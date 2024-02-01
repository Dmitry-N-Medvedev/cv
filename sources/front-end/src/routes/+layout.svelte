<script>
  import 'inter-ui/inter-variable.css';
  import Header from '$lib/components/Header/Header.svelte';
  import Footer from '$lib/components/Footer/Footer.svelte';
</script>

<style>
  .layout-root {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content;
    grid-template-areas:
      'header-container'
      'main'
      'footer-container'
    ;
    gap: 1rem;
    min-height: 100svh;
    margin: 0 auto;
    max-width: 50%;
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

/*
  rem = (pt * var(--pt-to-rem-coef)) / var(--rem-size)

  mobile:   12pt .. 16pt
  tablet:   15pt .. 19pt 
  monitor:  16pt .. 20pt

  extra small:  0px    < W  <=  600px
  small:        600px  < W  <=  768px
  medium:       768px  < W  <=  992px
  large:        992px  < W  <=  1200px
  extra large:  1200px < W
*/

  /* @container body (width > 0px) and (width <= 600px) {
    :root {
      --main-font-size: calc(16pt * var(--pt-to-rem-coef));
    }
  }

  @container body (width > 600px) and (width <= 768px) {
    :root {
      --main-font-size: calc(19pt * var(--pt-to-rem-coef));
    }
  }

  @container body (width > 768px) and (width <= 992px) {
    :root {
      --main-font-size: calc(19pt * var(--pt-to-rem-coef));
    }
  }

  @container body (width > 992px) and (width <= 1200px) {
    :root {
      --main-font-size: calc(20pt * var(--pt-to-rem-coef));
    }
  } */

  @container body (width <= 2500px) {
    .layout-root {
       max-width: 75%;
    }
  }

  @container body (width <= 768px) {
    .layout-root {
      max-width: 85%;
    }
  }
</style>

<div class="layout-root">
  <header class="header-container">
    <Header />
  </header>
  <main>
    <slot />
  </main>
  <footer class="footer-container">
    <Footer />
  </footer>
</div>