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

  :global([slot="caption"]) {
    grid-area: caption;
    border-bottom: var(--border);
  }

  :global([slot="content"]) {
    grid-area: content;
  }
</style>

<div class="section">
  <slot name="caption" />
  <slot name="content" />
</div>