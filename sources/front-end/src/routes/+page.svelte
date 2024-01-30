<script>
  import ProfessionalSummary from '$lib/components/Experience/ProfessionalSummary.svelte';
  import ProfessionalExperience from '$lib/components/Experience/ProfessionalExperience.svelte';
  import AreasOfExpertise from '$lib/components/AreasOfExpertise/AreasOfExpertise.svelte';
</script>

<style>
  .experience {
    display: grid;
    grid-template-rows: max-content;
    grid-auto-flow: row;
    gap: calc(var(--gap) * 2);
  }
</style>

<article class="experience">
  <ProfessionalSummary />
  <AreasOfExpertise />
  <ProfessionalExperience />
</article>