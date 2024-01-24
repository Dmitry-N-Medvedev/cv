<script>
</script>

<style>
  .experience-record {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      'position-info'
    ;
    gap: var(--gap);
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
  <slot name="short-description" />
  <slot name="responsibilities" />
  <slot name="results" />
</div>