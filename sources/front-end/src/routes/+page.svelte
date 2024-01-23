<script>
  import Contact from '$lib/components/Contact/Contact.svelte';
  import ProfessionalSummary from '$lib/components/ProfessionalSummary/ProfessionalSummary.svelte';
  import Education from '$lib/components/Education/Education.svelte';
  import CareerHighlights from '$lib/components/CareerHighlights/CareerHighlights.svelte';
  import Expertise from '$lib/components/Expertise/Expertise.svelte';
  import KeySkills from '$lib/components/KeySkills/KeySkills.svelte';
  import Training from '$lib/components/Training/Training.svelte';
  import Experience from '$lib/components/Experience/Experience.svelte';
</script>

<style>
  article {
    display: grid;
    grid-template-columns: 1fr 7fr;
    grid-auto-rows: max-content;
    grid-template-areas:
      'contact professional-summary'
      'education experience'
      'career-highlights experience'
      'expertise experience'
      'key-skills experience'
      'training experience'
    ;
  
    gap: var(--gap);
    margin: 0 auto;

    min-height: 100%;
    max-width: 75%;
  }

  article > .contact {
    grid-area: contact;
  }

  article > .professional-summary {
    grid-area: professional-summary;
  }

  article > .education {
    grid-area: education;
  }

  article > .career-highlights {
    grid-area: career-highlights;
  }

  article > .expertise {
    grid-area: expertise;
  }

  article > .key-skills {
    grid-area: key-skills;
  }

  article > .training {
    grid-area: training;
  }

  article > .experience {
    grid-area: experience;
  }

  article > section {
    display: contents;
  }
</style>

<article>
  <section class="contact">
    <Contact />
  </section>
  <section class="professional-summary">
    <ProfessionalSummary />
  </section>
  <section class="education">
    <Education />
  </section>
  <section class="career-highlights">
    <CareerHighlights />
  </section>
  <section class="expertise">
    <Expertise />
  </section>
  <section class="key-skills">
    <KeySkills />
  </section>
  <section class="training">
    <Training />
  </section>
  <section class="experience">
    <Experience />
  </section>
</article>