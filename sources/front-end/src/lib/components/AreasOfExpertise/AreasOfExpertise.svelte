<script>
  import cvSchema from '$lib/json+ld/cv.json';
  import SectionWithCaption from "$lib/controls/SectionWithCaption/SectionWithCaption.svelte";

  let areas = $state(new Set());

  cvSchema.mainEntity.hasOccupation.forEach((occupation) => {
    occupation.skills.forEach((skill) => {
      areas.add(skill);
    });
  });
</script>

<style>
  .areas-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--gap);
  }

  .areas-content > .area {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  @container (width <= 1400px) {
    .areas-content {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  @container (width <= 1030px) {
    .areas-content {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

<SectionWithCaption>
  <h3 slot="caption">areas of expertise</h3>
  <div slot="content" class="areas-content skills">
    {#each areas as area}
      <div class="area skill">
        {area}
      </div>
    {/each}
  </div>
</SectionWithCaption>