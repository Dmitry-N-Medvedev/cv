<style>
  header {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr auto;
    grid-template-areas:
      'h1' 
      'h2'
      'nav'
    ;
    gap: var(--gap);
  }

  header > h1 {
    grid-area: h1;
  }

  header > h2 {
    grid-area: h2;
    display: grid;
    grid-auto-flow: column;
    /* grid-auto-columns: 1fr; */
    gap: var(--gap);
  }

  header > h2 > .position {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  header > h2 > .position:first-of-type {
    justify-content: end;
  }

  header > h2 > .position:last-of-type {
    justify-content: start;
  }

  header > h2 > .position:not(:first-of-type)::before{
    /* content: "&"; */
    font-size: 1.5rem;
    /* padding: 0 calc(var(--gap) * 1.5); */
  }

  header > nav {
    grid-area: nav;
  }

  header > :is(h1, nav) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<header>
  <h1>
Dmitry N Medvedev
  </h1>
  <h2>
    <div class="position">CTO</div>
    <div class="position">project manager</div>
  </h2>
  <nav></nav>
</header>