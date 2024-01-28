<script>
  import Tech from "./Tech.svelte";
</script>

<style>
  .experience-record {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      'position-info'
      'short-description'
      'responsibilities'
      'results'
    ;
    gap: var(--gap);
    padding: var(--gap) 0;
  }

  :global(.row) {
    display: flex;
    gap: var(--gap);
  }

  :global(.row > div:not(:last-of-type)::after) {
    content: "|";
    margin-left: calc(var(--gap) / 2);
    color: var(--theme-light_gray_bright);
  }

  .position-info {
    grid-area: position-info;
    display: flex;
    flex-direction: column;
    gap: calc(var(--gap) / 2);
  }

  .position-info > :is([slot="position"]) {
    font-variation-settings: "wght" 900;
    font-weight: 600;
  }

  .experience-record > .short-description {
    grid-area: short-description;
  }

  .experience-record > .responsibilities {
    grid-area: responsibilities;
  }
  
  .experience-record > .results {
    grid-area: results;
  }

  :is(.short-description, .responsibilities, .results) {
    padding: var(--gap) 0;
  }

  .position-info .team-size {
    display: flex;
  }
</style>

<div class="experience-record">
  <div class="position-info">
    <div class="row">
      <slot name="position" />
    </div>
    <div class="row">
      <slot name="company-name" /> <slot name="company-city" />
      <slot name="workTimeFrom" />&mdash;<slot name="workTimeTo" />
      <div class="team-size">team:&nbsp;<slot name="team-size" /></div>
    </div>
  </div>
  <div class="short-description">
    <slot name="short-description" />
  </div>
  <div class="responsibilities">
    <h4>responsibilities</h4>
    <slot name="responsibilities" />
  </div>
  <div class="results">
    <h4>results</h4>
    <slot name="results" />
  </div>
  <Tech>
    <div slot="tech-languages">
      <slot name="tech-languages" />
    </div>
    <div slot="tech-databases">
      <slot name="tech-databases" />
    </div>
    <div slot="tech-os">
      <slot name="tech-os" />
    </div>
    <div slot="tech-tools">
      <slot name="tech-tools" />
    </div>
  </Tech>
</div>