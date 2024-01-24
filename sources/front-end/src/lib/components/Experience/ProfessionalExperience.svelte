<script>
  import SectionWithCaption from "$lib/controls/SectionWithCaption/SectionWithCaption.svelte";
  import ExperienceRecord from "$lib/controls/ExperienceRecord/ExperienceRecord.svelte";
  import ProfessionalExperience from '$lib/data/professionalExperience.json';
</script>

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
</style>

<SectionWithCaption>
  <h3 slot="caption">professional experience</h3>
  <div slot="content">
    {#each ProfessionalExperience as experience(experience.id)}
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
      </ExperienceRecord>
    {/each}
  </div>
</SectionWithCaption>