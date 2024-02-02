<script>
  let {
    url = '',
    alt = '',
    size = 150,
  } = $props();
</script>

<style>
  .certificate-qr {
    display: none;
  }

  @media print {
    .certificate-qr {
      display: block;
    }
  }
</style>

<img
  src={`https://chart.googleapis.com/chart?cht=qr&chs=${size}x${size}&chl=${encodeURIComponent(url)}&choe=UTF-8`}
  class="certificate-qr"
  {alt}
/>