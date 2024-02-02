<script>
  import cvSchema from '$lib/json+ld/cv.json';
  import SectionWithCaption from "$lib/controls/SectionWithCaption/SectionWithCaption.svelte";
  import Qr from '$lib/components/qr/Qr.svelte';
</script>

<style>
  .education-list {
    display: flex;
    flex-direction: column;
    gap: var(--list-gap);
  }

  .education {
    display: grid;
    grid-template-areas:
      'date-org-info'
      'course'
      'certificate-url'
    ;
    gap: var(--gap);
  }

  .date-org-info {
    grid-area: date-org-info;
    display: flex;
    gap: var(--gap);

    container-type: inline-size;
  }

  .summary,
  .start-end {
    display: flex;
    font-size: 2cqi;
  }

  .course {
    grid-area: course;
  }

  .certificate-url {
    grid-area: certificate-url;
  }
    
  /* .certificate-url a::after {
    content: url(https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=attr(href)&choe=UTF-8);
    position: absolute;
    right: 0;
    top: 0;
  } */
</style>

<SectionWithCaption>
  <h3 slot="caption">training</h3>
  <div slot="content" class="education-list vcalendar">
    {#each cvSchema.mainEntity.hasCredential as education}
      <div class="education vevent">
        <div class="date-org-info">
          <div class="start-end">
            <abbr class="dtstart" title={education.dateCreated}>{education.dateCreated}</abbr>
          </div> 
          <div class="summary vcard">
            <a href={education.recognizedBy.url} class="url fn org" target="_blank">{education.recognizedBy.name}</a>
          </div>
        </div>
        <div class="course-name">
          {education.name}
        </div>
        <div class="certificate-url">
          <a href={education.url} target="_blank">{education.url}</a>
        </div>
        <Qr
          url={education.url}
          alt={`certificate ${education.name}`}
          size={150}
        />
      </div> 
    {/each}
  </div>
</SectionWithCaption>