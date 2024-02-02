<script>
  import cvSchema from '$lib/json+ld/cv.json';
</script>

<style>
  .header {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content 1fr auto auto;
    grid-template-areas:
      'h1' 
      'h2'
      'contacts'
      'nav'
    ;
    gap: var(--gap);
    width: 100%;

    container-name: header;
    container-type: inline-size;
    font-style: normal;
  }


  .header > h1 {
    grid-area: h1;
    display: flex;
    justify-content: center;
    align-items: end;
  }

  .header > h2 {
    grid-area: h2;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: auto;
    gap: var(--gap);
  }

  .header > h2 > .position {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--main-color);
  }

  .header > h2 > .position:first-of-type {
    justify-content: end;
  }

  .header > h2 > .position:last-of-type {
    justify-content: start;
  }

  .header > h2 > .position:not(:last-of-type)::after{
    content: "\22C5";
    font-size: 12cqi;
    line-height: 0;
    padding: 0 calc(var(--gap) * 2);
    text-decoration: none;
    position: relative;
    bottom: calc(var(--gap) / 4);
    color: var(--dimmed-header-color);
    /* width: var(--gap); */
    /* right: 1.5rem; */
  }

  .header > nav {
    grid-area: nav;
  }

  .header > .contacts {
    grid-area: contacts;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
    justify-content: center;
    align-items: center;
    gap: var(--gap);
    /* font-size: 2cqw; */
  }
  
  .header > .contacts > div {
    display: flex;
  }

  .header > .contacts > div:not(:last-of-type)::after {
    position: relative;
    content: "|";
    left: calc(var(--gap) / 2);
    color: var(--dimmed-header-color);
  }


  @container header (width <= 1400px) {
    .header > .contacts > .locality {
      display: none;
    }

    .header > .contacts > div:not(:last-of-type)::after {
      content: unset;
    }
  }

  @container header (width <= 1250px) {
    .header > .contacts {
      grid-template-areas:
        'tel email'
        'linkedin linkedin'
      ;
      grid-auto-columns: 1fr;
      font-size: 2.25cqw;
    }

    .header > .contacts > div {
      display: flex;
      align-items: center;
    }

    .header > .contacts > .tel {
      grid-area: tel;
      justify-content: end;
    }

    .header > .contacts > .email {
      grid-area: email;
      justify-content: start;
    }

    .header > .contacts > .linkedin {
      grid-area: linkedin;
      justify-content: center;
    }
  }

  @media print {
    .header > .contacts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      font-size: unset;
    }

    .header h1::after {
      content: url(https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=https://dmitry-n-medvedev.denebkaitos.tech&choe=UTF-8);
      position: absolute;
      right: 0;
      top: 0;
    }

    .header > h2 > .position:not(:last-of-type)::after{
      font-size: 5cqi;
    }

    .header > .contacts > :is(.tel, .email, .linkedin) {
      justify-content: start !important;
      align-items: center !important;
    }

    :is(.tel, .email)::before {
      padding-right: var(--gap);
      position: relative;
    }

    .tel::before {
      content: "tel.:";
    }

    .email::before {
      content: "email:";
    }
  }
</style>

<address class="header vcard">
  <h1 class="n">
    <span class="given-name">
      {cvSchema.mainEntity.givenName} 
    </span>
    <span class="additional-name">
      {cvSchema.mainEntity.additionalName}
    </span>
    <span class="family-name">
      {cvSchema.mainEntity.familyName}
    </span>
  </h1>
  <h2>
    {#each cvSchema.mainEntity.makesOffer as offer}
      <a href={offer.url} class="position">{offer.name}</a>
    {/each}
  </h2>
  <div class="contacts">
    <div class="tel">
      <a href="tel:{cvSchema.mainEntity.telephone}" target="_blank">
        {cvSchema.mainEntity.telephone} 
      </a>
    </div>
    <div class="email">
      <a href="mailto:{cvSchema.mainEntity.email}" target="_blank">
        {cvSchema.mainEntity.email} 
      </a>
    </div>
    <div class="locality">
      {cvSchema.mainEntity.address.addressLocality} 
    </div>
    {#each cvSchema.mainEntity.sameAs as sameAs}
      <div class="linkedin">
        <a href={sameAs} target="_blank">{sameAs}</a> 
      </div>
    {/each}
  </div>
  <nav></nav>
</address>