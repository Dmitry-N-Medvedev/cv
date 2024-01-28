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
    display: grid;
    grid-template-areas:
      'company-info'
      'job-info'
      'responsibilities'
      'skills'
    ;
    gap: calc(var(--gap) * 2);
    padding: var(--gap) 0;
  }

  /* .occupation:not(:last-of-type)::after {
    content: '\2218 \2218 \2218';
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    font-size: 5rem;
    color: var(--main-color);
  } */

  :is(.company-info, .company-name, .company-city, .job-info, .job-time-span, .job-time-span-start, .job-time-span-end) {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: var(--gap);
  }

  .company-info {
    grid-area: company-info;
    /* font-size: 1.25rem; */
  }

  .job-info {
    grid-area: job-info;
  }

  .job-title {
    font-size: 1.5rem;
  }

  .job-time-span {
    gap: calc(var(--gap) / 3);
  }
  
  .company-city-locality::after {
    content: ",";
  }

  .description {
    grid-area: description;
  }

  .responsibilities {
    grid-area: responsibilities;
  }

  .skills {
    grid-area: skills;
  }

  :is(.responsibilities, .skills) {
    display: grid;
    grid-auto-flow: row;
    gap: var(--gap);
  }

  :is(.responsibilities > ul, .skills > ul) {
    display: grid;
    gap: calc(var(--gap) / 2);
  }

  :is(.responsibilities li, .skills li) {
    display: flex;
    flex: 1 0 auto;
    min-height: 2.5rem;
    justify-content: start;
    align-items: center;
  }

  .responsibilities > ul {
    grid-template-columns: 1fr;
  }

  .skills > ul {
    grid-template-columns: repeat(4, 1fr);
  }

  .title {
    color: var(--theme-light_gray_bright);
  }
</style>

<article class="occupation">
  <div class="company-info">
    <div class="company-name">
      <a href={occupation.alumniOf.sameAs} target="_blank">
        {occupation.alumniOf.name}
      </a>
    </div>
    <div class="company-city">
      <div class="company-city-locality">
        {occupation.alumniOf.address.addressLocality}
      </div>
      <div class="company-city-region">
        {occupation.alumniOf.address.addressRegion}
      </div>
    </div>
  </div>
  <div class="job-info">
    <h4 class="job-title">
      {occupation.roleName}
    </h4>
    <div class="job-time-span">
      <div class="job-time-span-start">{occupation.startDate}</div>
      <div class="job-time-span-devider">..</div>
      <div class="job-time-span-end">{occupation.endDate}</div>
    </div>
  </div>
  <!-- <div class="description">
    {occupation.description}
  </div> -->
  <div class="responsibilities">
    <h4 class="title">responsibilities</h4>
    <ul>
      {#each occupation.responsibilities as r}
        <li>{r}</li>
      {/each}
    </ul>
  </div>
  <div class="skills">
    <h4 class="title">skills</h4>
    <ul>
      {#each occupation.skills as s}
        <li>{s}</li>
      {/each}
    </ul>
  </div>
</article>