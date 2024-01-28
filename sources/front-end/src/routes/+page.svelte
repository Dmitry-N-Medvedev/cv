<script>
  import Contact from '$lib/components/Contact/Contact.svelte';
  import ProfessionalSummary from '$lib/components/ProfessionalSummary/ProfessionalSummary.svelte';
  import Education from '$lib/components/Education/Education.svelte';
  import CareerHighlights from '$lib/components/CareerHighlights/CareerHighlights.svelte';
  import Expertise from '$lib/components/Expertise/Expertise.svelte';
  import KeySkills from '$lib/components/KeySkills/KeySkills.svelte';
  import Training from '$lib/components/Training/Training.svelte';
  import Experience from '$lib/components/Experience/Experience.svelte';
  import Me from '$lib/images/me.jpeg';
</script>

<style>
  .cv {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      'aside header'
      'aside content'
    ;
    grid-template-rows: clamp(20rem, 25rem, 30rem) auto;
  
    margin: 0 auto;

    min-height: 100%;
    max-width: 50%;
  }

  .cv > .aside {
    grid-area: aside;
    display: grid;
    grid-template-rows: max-content;
    grid-auto-flow: row;
    background-color: var(--background-highlight-color);
    padding: 0 calc(var(--gap) * 3);
  }

  .cv > .aside > .photo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cv > .aside > .photo > img {
    border-radius: 50%;
    width: 90%;
    padding: var(--gap);
  }

  .cv > .header {
    grid-area: header;
    display: grid;
    grid-template-areas:
      '.'
      'name'
      'title'
      '.'
    ;
    grid-template-rows: 3rem 1fr 1fr 3rem;
  }

  .cv > .header > .name {
    grid-area: name;
    background-color: var(--background-highlight-color);
  }

  .cv > .header > .title {
    grid-area: title;
    background-color: var(--background-highlight-color);
  }

  .cv > .header > :is(.name, .title) {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 calc(var(--gap) * 2);
  }

  .cv > .content {
    grid-area: content;
    /* display: contents; */
  }
</style>

<article class="cv">
  <aside class="aside">
    <section class="photo">
      <img src={Me} alt="profile" />
    </section>
    <Contact />
    <CareerHighlights />
    <Expertise />
    <KeySkills />
    <!-- <ProfessionalSummary /> -->
    <!-- <Education /> -->
    <Training />
  </aside>
  <section class="header">
    <h1 class="name">
      Dmitry N Medvedev
    </h1>
    <h2 class="title">
      project manager | cto
    </h2>
  </section>
  <article class="content">
    <Experience />
  </article>
</article>