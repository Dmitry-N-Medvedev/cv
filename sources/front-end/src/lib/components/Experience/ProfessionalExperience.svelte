<script>
  import SectionWithCaption from "$lib/controls/SectionWithCaption/SectionWithCaption.svelte";
  import ExperienceRecord from "$lib/controls/ExperienceRecord/ExperienceRecord.svelte";
  import Occupation from "./Occupation.svelte";
  import cvSchema from '$lib/json+ld/cv.json';
  import {
    serializeSchema,
  } from '$lib/utils/serializeSchema';

  const processCVSchema = (schema = null) => {
    if (schema === null) {
      throw new ReferenceError('schema is undefined');
    }

    return schema;
  }

  let processedSchema = processCVSchema(cvSchema);
</script>

<svelte:head>
  <title>
    {processedSchema.mainEntity.givenName} N {processedSchema.mainEntity.familyName}
  </title>
  {@html serializeSchema(cvSchema)}
</svelte:head>

<style>
  :is(ul[slot="responsibilities"], ul[slot="results"]) {
    display: grid;
    grid-auto-flow: row;
    gap: var(--gap);
    list-style-position: inside;
  }

  div[slot="content"] {
    display: grid;
    grid-auto-flow: row;
    gap: var(--list-gap);
  }

  :is(.tech-languages, .tech-databases, .tech-os, .tech-tools) {
    display: grid;
    grid-auto-flow: row;
    list-style-type: none;
    padding: var(--gap) 0;
    gap: var(--gap);
  }
</style>

<SectionWithCaption>
  <h3 slot="caption">professional experience</h3>
  <div slot="content" class="vcalendar">
    {#each processedSchema.mainEntity.hasOccupation as occupation}
      <Occupation {occupation} />
    {/each}
  </div>
</SectionWithCaption>