<script>
  import cvSchema from '$lib/json+ld/cv.json';
  import SectionWithCaption from "$lib/controls/SectionWithCaption/SectionWithCaption.svelte";
</script>

<SectionWithCaption>
  <h3 slot="caption">professional summary</h3>
  <div slot="content">
    {#each cvSchema.mainEntity.description as summaryLine}
      <p>
        {summaryLine}  
      </p>
    {/each}
  </div>
</SectionWithCaption>