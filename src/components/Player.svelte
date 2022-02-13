<script>
  import { onMount } from "svelte";
  import { BASE_API_URL, getLink, fetchData } from "../util";

  export let jams = [];
  export let jamCover = getLink("8b578adf-89ac-4e0b-bf47-9c8e8352aedd");

  onMount(async () => {
    const jamsUrl = BASE_API_URL.replace(
      "/items",
      '/files?fields=id,title&filter[tags][_in]=["selected_jam"]&sort=-modified_on'
    );
    jams = (await fetchData(jamsUrl))
      .map((x) => ({
        src: getLink(x.id),
        title: x.title,
      }))
      .sort(() => (Math.random() > 0.5 ? 1 : -1));
  });
</script>

<div class="player horizontal">
  <div class="container">
    <div class="info-album-player">
      <div
        class="album-cover"
        style="background: url('{jamCover}') no-repeat center"
        id="bg-image3"
      />
      <p class="album-title">Jams</p>
      <p class="artist-name">by Luc Derival</p>
    </div>
    <div class="player-content">
      <audio preload />
      <ol class="playlist">
        {#each jams as jam}
          <li>
            <a class="jam-link" href="#0" data-src={jam.src}>{jam.title}</a>
          </li>
        {/each}
      </ol>
      <div class="nextprev">
        <span class="prev">prev</span>
        <span class="next">next</span>
      </div>
      <span class="btnloop">loop</span>
    </div>
  </div>
</div>
