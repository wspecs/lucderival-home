<script>
  import { onMount } from "svelte";
  import { fetchData, getLink } from "../util";

  export let assets = [];
  export let moreAssets = [];

  onMount(async () => {
    const galleryItems = (
      await fetchData("/gallery?fields=thumbnail,video_link")
    ).map((x) => ({
      type: x.video_link ? "video" : "image",
      icon: x.video_link ? "video" : "plus",
      thumbnail: getLink(x.thumbnail),
      href: getLink(x.video_link ? x.video_link : x.thumbnail),
    }));
    assets = galleryItems.slice(0, 4);
    moreAssets = galleryItems.slice(4);
  });
</script>

<!-- GALLERY -->
<section class="section last-media" id="gallery">
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="voffset90" />
        <div class="title-wrapper">
          <h2 class="title">GALLERY</h2>
        </div>
        <div class="voffset50" />
      </div>
    </div>
    <!-- Filters -->
    <div class="row">
      <div class="col-md-12">
        <ul class="filters">
          <li
            data-filter="*"
            class="is-checked wow fadeInUp"
            data-wow-delay="0.5s"
          >
            All
          </li>
          <li data-filter=".image" class="wow fadeInUp" data-wow-delay="0.8s">
            Image
          </li>
          <li data-filter=".video" class="wow fadeInUp" data-wow-delay="1s">
            Video
          </li>
        </ul>
      </div>
    </div>
    <!-- gallery -->
    <div class="row">
      <div class="col-md-12">
        <div class="voffset50" />
        <div class="thumbnails">
          {#each assets as asset}
            <div class="thumbnail {asset.type}">
              <a href={asset.href} class="swipebox">
                <!-- data-fancybox-type="iframe" -->
                <img src={asset.thumbnail} alt="" />
                <div class="rollover">
                  <i class={asset.icon} />
                </div>
              </a>
            </div>
          {/each}
        </div>
        <div class="voffset50" />
        <p class="loadmore">
          <a id="append" href="#" class="btn square inverse">Load more</a>
        </p>
        <div id="more-items">
          {#each moreAssets as asset}
            <div class="thumbnail {asset.type}">
              <a href={asset.href} class="swipebox">
                <!-- data-fancybox-type="iframe" -->
                <img src={asset.thumbnail} alt="" />
                <div class="rollover">
                  <i class={asset.icon} />
                </div>
              </a>
            </div>
          {/each}
        </div>
        <div class="voffset90" />
      </div>
    </div>
  </div>
</section>
