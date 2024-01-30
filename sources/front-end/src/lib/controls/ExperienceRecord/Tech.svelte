<style>
  .tech {
    display: grid;
    grid-template-areas:
      'title title title title' 
      'languages-title databases-title os-title tools-title'
      'languages databases os tools'
    ;
  }

  .tech > .title {
    grid-area: title;
  }

  .tech > .languages-title {
    grid-area: languages-title;
  }

  .tech > .databases-title {
    grid-area: databases-title;
  }

  .tech > .os-title {
    grid-area: os-title;
  }

  .tech > .tools-title {
    grid-area: tools-title;
  }

  .tech > .tech-languages {
    grid-area: languages;
    /* display: contents; */
  }
</style>

<div class="tech">
  <h4 class="title">tech</h4>
  <h5 class="languages-title">languages</h5>
  <div class="tech-languages">
    <slot name="tech-languages" />
  </div>
  <h5 class="databases-title">databases</h5>
  <slot name="tech-databases" />
  <h5 class="os-title">os</h5>
  <slot name="tech-os" />
  <h5 class="tools-title">tools</h5>
  <slot name="tech-tools" />
</div>