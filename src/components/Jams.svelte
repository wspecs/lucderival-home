<script>
  import { onMount } from "svelte";
  import { BASE_API_URL, getLink, fetchData } from "../util";

  let jam = {
    title: "Selected Jams",
    description: "Some of my favorites jams<br>from playing over the years",
  };
  let jams = [];

  const pictureUrl = BASE_API_URL.replace(
    "/items",
    '/files?fields=id,title&filter[tags][_in]=["selected_jam"]&sort=-modified_on'
  );

  onMount(async () => {
    jams = (await fetchData(pictureUrl)).map((x) => ({
      src: getLink(x.id),
      title: x.title,
      album: "Selected Jams",
    }));
  });
</script>

<section class="section latest-album" id="jams">
  <div class="container">
    <div class="voffset70" />
    <div class="title-wrapper">
      <h2 class="title">{jam.title}</h2>
    </div>
    <div class="voffset80" />

    <div class="row">
      <div class="col-md-6">
        <div class="info-album">
          <div class="cover">
            <img src={getLink("8b578adf-89ac-4e0b-bf47-9c8e8352aedd")} alt="" />
          </div>
          <p class="album album-list">{jam.title}</p>
          <p class="artist">by Luc Derival</p>
          <div class="voffset20" />
          <p class="description">
            {@html jam.description}
          </p>
          {#if jam.action}
            <p class="buyalbum">
              <a href={jam.actionLink} class="btn square inverse"
                >{jam.action}</a
              >
            </p>
          {/if}
          <div class="voffset80" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="disc-tracklist">
          <audio preload id="playlist_newalbum" />
          <ol class="playlist1">
            {#each jams as j}
              <li>
                <a href={j.source} data-src={j.src}>
                  <div class="track-info jam">
                    <p class="track-title">{j.title}</p>
                    <p class="track-album">{j.album}</p>
                  </div>
                </a>
              </li>
            {/each}
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>
