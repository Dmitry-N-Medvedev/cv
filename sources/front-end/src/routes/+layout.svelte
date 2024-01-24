<script>
  import 'inter-ui/inter-variable.css';
  import Header from '$lib/components/Header/Header.svelte';
  import Footer from '$lib/components/Footer/Footer.svelte';
</script>

<style>
  .layout-root {
    display: grid;
    grid-template-columns: 1fr;
    /* grid-template-rows: auto 1fr auto; */
    grid-template-rows: 1fr;
    grid-template-areas:
      'header-container'
      'main'
      'footer-container'
    ;
    gap: 1rem;
  

    /* height: 100svh; */
    min-height: 100svh;
    /* max-height: 100svh; */
  }

  .header-container {
    grid-area: header-container;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
  }

  main {
    grid-area: main;
  }

  .footer-container {
    grid-area: footer-container;
    bottom: 0;
  }

  .header-container, .footer-container{
    display: contents;
    position: sticky;
  }
</style>

<div class="layout-root">
  <div class="header-container">
    <!-- <Header /> -->
  </div>
  <main>
    <slot />
  </main>
  <div class="footer-container">
    <!-- <Footer /> -->
  </div>
</div>