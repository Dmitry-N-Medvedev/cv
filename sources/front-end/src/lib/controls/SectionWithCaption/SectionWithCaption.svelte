<style>
  .section {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'caption'
      'content'
    ;
    gap: calc(var(--gap));
  }

  .caption {
    grid-area: caption;
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-template-areas:
      'l-hr caption-value r-hr'
    ;
    justify-content: center;
    align-items: center;
    gap: var(--gap);

    container-name: caption;
    container-type: inline-size;
  }

  .caption > .l-hr {
    grid-area: l-hr;
  }

  .caption > .r-hr {
    grid-area: r-hr;
  }

  .caption > .caption-value {
    grid-area: caption-value;
    /* display: contents; */
  }

  .caption > :is(.l-hr, .r-hr) {
    width: 100%;
    height: 0.125rem;
    background-color: var(--dimmed-header-color);
  }

  .content {
    grid-area: content;
  
    container-name: section-with-caption;
    container-type: inline-size;
  }
</style>

<div class="section">
  <div class="caption">
    <div class="l-hr"></div>
    <div class="caption-value">
      <slot name="caption" />
    </div>
    <div class="r-hr"></div>
  </div>
  <div class="content">
    <slot name="content" />
  </div>
</div>