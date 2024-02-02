<script>
  import cvSchema from '$lib/json+ld/cv.json';
  import ProfessionalSummary from '$lib/components/Experience/ProfessionalSummary.svelte';
  import ProfessionalExperience from '$lib/components/Experience/ProfessionalExperience.svelte';
  import AreasOfExpertise from '$lib/components/AreasOfExpertise/AreasOfExpertise.svelte';
  import Training from '$lib/components/Training/Training.svelte';

  const robots = ['index', 'follow', 'noarchive'].join(',');
  const positions = cvSchema.mainEntity.makesOffer.map((o) => o.alternateName);
  const titleContent = `${cvSchema.mainEntity.name}: ${positions.join(' and ')}`;
  const description = `${cvSchema.mainEntity.description.map((d) => d).join('')}`;
  const keywords = ['cv', 'resume', cvSchema.mainEntity.name, positions.join(',')].join(',');
</script>

<svelte:head>
  <meta name="author" content="{cvSchema.mainEntity.name}" />
  <meta name="publisher" content="{cvSchema.mainEntity.name}" />
  <meta name="description" content="{description}" />
  <meta name="generator" content="hand-made" />
  <meta name="keywords" content="{keywords}" />

  <meta name="twitter:site" content="//dmitry-n-medvedev.denebkaitos.tech" />
  <meta name="twitter:creator" content="@dmitrynmedvedev" />
  <meta name="twitter:title" content="{titleContent}" />
  <meta name="twitter:description" content="{description}" />
  
  <meta prefix="og: http://ogp.me/ns#" property="og:title" content="{titleContent}" />
  <meta prefix="og: http://ogp.me/ns#" property="og:type" content="CV" />
  <meta prefix="og: http://ogp.me/ns#" property="og:description" content="{description}" />
  <meta prefix="og: http://ogp.me/ns#" property="og:url" content="//dmitry-n-medvedev.denebkaitos.tech" />

  <meta name="referrer" content="no-referrer" />
  <meta name="robots" content="{robots}" />
  <meta name="googlebot" content="{robots}" />
  <title>{titleContent}</title>
</svelte:head>

<style>
  .experience {
    display: grid;
    grid-template-rows: max-content;
    grid-auto-flow: row;
    gap: calc(var(--gap) * 2);
  }
</style>

<article class="experience hresume">
  <ProfessionalSummary />
  <AreasOfExpertise />
  <ProfessionalExperience />
  <Training />
</article>