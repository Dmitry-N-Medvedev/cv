<script>
  import SectionWithCaption from "$lib/controls/SectionWithCaption/SectionWithCaption.svelte";
</script>

<style>
  .contacts {
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: 3rem;
    gap: var(--gap);
    font-style: normal;
  }

  .contacts > :is(h3, div) {
    display: flex;
    align-items: center;
    justify-content: start;
  }

  .contacts a {
    pointer-events: auto;
    display: flex;
    flex: 1 0 auto;
    align-items: center;
    height: 100%;
  }
</style>

<SectionWithCaption>
  <h3 slot="caption">contact</h3>
  <address slot="content" class="contacts">
    <div>
      <a href="mailto:dmitry.medvedev@gmail.com" target="_blank">dmitry.medvedev@gmail.com</a>
    </div>
    <div>Berlin</div>
    <div>
      <a href="https://www.linkedin.com/in/dmitrymedvedev/" target="_blank">linkedin.com/in/dmitrymedvedev</a>
    </div>
  </address>
</SectionWithCaption>