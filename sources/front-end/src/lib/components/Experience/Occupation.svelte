<script>
  let {
    /**
     * @type {Object}
    */
    occupation,
  } = $props();
</script>

<style>
  .occupation {
    --occupation-gap: var(--gap);

    display: grid;
    grid-template-areas:
      'job-info'
      'short-overview'
      'responsibilities'
    ;
    gap: var(--occupation-gap);

    container-name: occupation;
    container-type: inline-size;
  }

  .job-info {
    grid-area: job-info;
    display: grid;
    grid-template-columns: 5fr 1fr;
    grid-template-areas:
      'job-info-left job-info-right'
    ;
    gap: var(--occupation-gap);
  }

  .job-info > .job-info-left {
    grid-area: job-info-left;
    justify-content: start;
  }

  .job-info > .job-info-left > span:not(:last-of-type)::after {
    content: ", ";
    position: relative;
  }

  .job-info > .job-info-right {
    grid-area: job-info-right;
    justify-content: end;
  }

  .job-info > :is(.job-info-left, .job-info-right) {
    display: flex;
    align-items: center;
    gap: var(--occupation-gap);
  }

  .job-time-span-start::after {
    content: '\2013';
    position: relative;
    left: calc(var(--occupation-gap) / 2);
  }

  .short-overview {
    font-style: italic;
  }

  .responsibilities {
    grid-area: responsibilities;
  }

  .responsibilities > ul {
    list-style-position: inside;
    padding-left: calc(var(--occupation-gap) / 2);
  }

  @container occupation (width <= 850px) {
    .job-info {
      grid-template-columns: 1fr 1fr;
    }
  }

  @container occupation (width <= 1750px) {
    .job-info {
      grid-template-columns: 2fr 1fr;
    }

    .job-info > .job-info-left {
      display: grid;
      grid-template-areas:
        'job-title job-title job-title'
        'company-name company-city-locality company-city-region'
      ;
      gap: 0px;
    }

    .job-title {
      grid-area: job-title;
      padding: 0;
    }

    .company-name {
      grid-area: company-name;
    }

    .company-city-locality {
      grid-area: company-city-locality;
    }

    .company-city-region {
      grid-area: company-city-region;
    }
  }
</style>

<article class="occupation">
  <div class="job-info">
    <div class="job-info-left">
      <h4 class="job-title">
        {occupation.roleName}
      </h4>
      <span class="company-name">
        {occupation.alumniOf.name}
      </span>
      <span class="company-city-locality">
        {occupation.alumniOf.address.addressLocality}
      </span>
      <span class="company-city-region">
        {occupation.alumniOf.address.addressRegion}
      </span>
    </div>
    <div class="job-info-right">
      <span class="job-time-span-start">{occupation.startDate}</span>
      <span class="job-time-span-end">{occupation.endDate}</span>
    </div>
  </div>
  <div class="short-overview">
    {#each occupation.description as descr}
      <p>
        {descr}     
      </p>
    {/each}
  </div>
  <div class="responsibilities">
    <h5 class="title">results</h5>
    <ul>
      {#each occupation.responsibilities as r}
        <li>{r}</li>
      {/each}
    </ul>
  </div>
</article>