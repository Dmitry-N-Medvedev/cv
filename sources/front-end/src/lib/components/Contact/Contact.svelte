<style>
  .contacts {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-auto-flow: row;
    grid-auto-rows: 1fr;
    grid-template-areas:
      'h3 h3'
    ;
    gap: var(--gap);
    font-style: normal;
  }

  .contacts > h3 {
    grid-area: h3;
    justify-content: start;
    border-bottom: var(--border);
  }

  .contacts > :is(h3, div) {
    display: flex;
    align-items: center;
  }

  .contacts > div:nth-child(even) {
    justify-content: start;
  }

  .contacts > div:nth-child(odd) {
    justify-content: end;
  }

  .contacts a {
    pointer-events: auto;
    display: flex;
    flex: 1 0 auto;
    align-items: center;
    justify-content: end;
    height: 100%;
  }
</style>

<address class="contacts">
  <h3>contact</h3>
  <div>email</div>
  <div>
    <a href="mailto:dmitry.medvedev@gmail.com" target="_blank">dmitry.medvedev@gmail.com</a>
  </div>
  <div>city</div>
  <div>Berlin</div>
  <div>LinkedIn</div>
  <div>
    <a href="https://www.linkedin.com/in/dmitrymedvedev/" target="_blank">dmitrymedvedev</a>
  </div>
</address>