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
  }

  .job-info {
    grid-area: job-info;
    display: grid;
    grid-template-columns: 5fr 1fr;
    grid-template-areas:
      'job-info-left job-info-right' 
    ;
    gap: calc(var(--gap) / 2);
  }

  .job-info-left {
    grid-area: job-info-left;
  }

  .job-info-right {
    grid-area: job-info-right;
  }

  :is(.job-info-left, .job-info-right) {
    display: flex;
    align-items: center;
    gap: var(--gap);

    container-type: inline-size;
  }

  .job-info-left {
    flex-wrap: wrap;
    justify-content: start;
  }

  .job-info-right {
    justify-content: space-between;
  }

  .job-time-span-start,
  .job-time-span-end {
    font-size: 10cqi;
  }

  .company-info {
    display: flex;
    flex: 1 0 auto;
    container-type: inline-size;
  }

  .company-info > *:not(:last-of-type)::after {
    content: ", ";
    position: relative;
    padding-right: calc(var(--gap) / 2);
  }

  .company-name,
  .company-city-locality,
  .company-city-region {
    font-size: clamp(2.5cqi, 3cqi, 3.5cqi);
  }

  /* .job-time-span-start::after {
    content: '\2013';
    position: relative;
    left: calc(var(--gap) * 2);
  } */

  .short-overview {
    grid-area: short-overview;
    font-style: italic;
  }

  .responsibilities {
    grid-area: responsibilities;
  }

  .responsibilities > ul {
    list-style-position: inside;
    padding-left: calc(var(--occupation-gap) / 2);
  }

  @media print {
    .company-name,
    .company-city-locality,
    .company-city-region {
      font-size: unset;
    }
  }
</style>

<article class="occupation">
  <div class="job-info">
    <div class="job-info-left">
      <h4 class="job-title">
        {occupation.roleName}
      </h4>
      <div class="company-info">
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