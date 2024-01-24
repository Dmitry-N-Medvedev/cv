<script>
  import ProfessionalSummary from '$lib/components/Experience/ProfessionalSummary.svelte';
  import ProfessionalExperience from '$lib/components/Experience/ProfessionalExperience.svelte';
</script>

<style>
  .experience {
    display: grid;
    grid-template-rows: max-content;
    grid-auto-flow: row;
    gap: var(--gap);
    padding: 0 calc(var(--gap) * 2);
  }
</style>

<article class="experience">
  <ProfessionalSummary />
  <ProfessionalExperience />
</article>