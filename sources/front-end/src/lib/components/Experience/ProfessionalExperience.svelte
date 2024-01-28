<script>
  import SectionWithCaption from "$lib/controls/SectionWithCaption/SectionWithCaption.svelte";
  import ExperienceRecord from "$lib/controls/ExperienceRecord/ExperienceRecord.svelte";
  import ProfessionalExperience from '$lib/data/professionalExperience.json';
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
    gap: calc(var(--gap) * 4);
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
  <div slot="content">
    {#each processedSchema.mainEntity.hasOccupation as occupation}
      <Occupation {occupation} />
    {/each}
    <!-- {#each ProfessionalExperience as experience(experience.id)}
      <ExperienceRecord>
        <div slot="workTimeFrom">Mar 2021</div>
        <div slot="workTimeTo">Feb 2023</div>
        <div slot="company-name">
          <a href={experience.company.link} target="_blank">{experience.company.name}</a>
        </div>
        <div slot="company-city">Berlin</div>
        <div slot="short-description">{experience.short_description}</div>
        <h4 slot="position">{experience.position.name}</h4>
        <ul slot="responsibilities">
          {#each experience.responsibilities as responsibility}
            <li class="responsibility">{responsibility}</li>
          {/each}
        </ul>
        <ul slot="results">
          {#each experience.results as result}
            <li class="result">{result}</li> 
          {/each}
        </ul>
        <div slot="team-size">{experience.team.size}</div>
        <ul slot="tech-languages" class="tech-languages">
          {#each experience.tech.stack.languages as language}
            <li class="language">{language}</li> 
          {/each}
        </ul>
        <ul slot="tech-databases" class="tech-databases">
          {#each experience.tech.stack.databases as database}
            <li class="database">{database}</li> 
          {/each}
        </ul>
        <ul slot="tech-os" class="tech-os">
          {#each experience.tech.stack.os as os}
            <li class="os">{os}</li> 
          {/each}
        </ul>
        <ul slot="tech-tools" class="tech-tools">
          {#each experience.tech.stack.tools as tool}
            <li class="tool">{tool}</li> 
          {/each}
        </ul>
      </ExperienceRecord>
    {/each} -->
  </div>
</SectionWithCaption>