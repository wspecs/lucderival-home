<script>
  import { getLink } from "../util";
  export let paragraph = "",
    quote = "",
    signature = "";
</script>

<section class="section container-fluid full-width biography" id="bio">
  <div class="row">
    <div class="col-xs-12 col-md-4 col-md-offset-1 biography-description">
      <h2 class="title inverse">biography</h2>
      <div class="voffset40" />
      <p class="cousine">
        {paragraph}
      </p>
      <div class="voffset40" />
      <p class="montserrat extra-bold cita">
        {quote}
      </p>
      <br />
      {#if signature.length > 0}
        <p>
          <img src={getLink(signature)} alt="" />
        </p>
      {/if}
    </div>
    <img
      class="col-xs-12 col-md-6 col-sm-offset-1"
      src={getLink("9a365ce9-0164-444c-a40c-1058ec7d98cb")}
      alt=""
    />
  </div>
</section>
