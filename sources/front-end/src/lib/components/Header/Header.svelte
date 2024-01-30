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
    font-size: 8.5rem;
    line-height: 0;
    padding: 0 calc(var(--gap) * 2);
    text-decoration: none;
    position: relative;
    bottom: calc(var(--gap) / 4);
    color: var(--dimmed-header-color);
    width: var(--gap);
    right: 1.5rem;
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
    font-size: 2cqw;
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
        'telephone email'
        'linkedin linkedin'
      ;
      grid-auto-columns: 1fr;
      font-size: 2.25cqw;
    }

    .header > .contacts > div {
      display: flex;
      align-items: center;
    }

    .header > .contacts > .telephone {
      grid-area: telephone;
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
</style>

<div class="header">
  <h1>
    {cvSchema.mainEntity.givenName} 
    {cvSchema.mainEntity.additionalName}
    {cvSchema.mainEntity.familyName}
  </h1>
  <h2>
    {#each cvSchema.mainEntity.makesOffer as offer}
      <a href={offer.url} class="position">{offer.name}</a>
    {/each}
  </h2>
  <div class="contacts">
    <div class="telephone">
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
</div>