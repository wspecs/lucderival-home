<script>
  import { getLink, fetchData } from "../util";
  import { onMount } from "svelte";
  export let slides = [];
  onMount(async () => {
    slides = await fetchData("/home_slide?fields=*,feature_image.id");
  });
</script>

<!-- INTRO -->
<section class="intro full-width jIntro" id="home">
  <div
    id="intro-carousel"
    class="carousel slide carousel-fade"
    data-pause="false"
  >
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#intro-carousel" data-slide-to="0" class="active" />
      <li data-target="#intro-carousel" data-slide-to="1" />
      <li data-target="#intro-carousel" data-slide-to="2" />
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      {#each slides as slide}
        {#if slide.style === 1}
          <!-- First slide -->
          <div class="item active intro-fullscreen">
            <!-- Modify Image BG -->
            <div
              class="fill"
              style="background-image:url('{getLink(slide.feature_image.id)}');"
            />
            <div class="carousel-caption intro-center">
              <h1 data-animation="animated fadeIn" class="primary-title">
                {slide.primary}
              </h1>
              <h2 data-animation="animated fadeIn" class="subtitle-text">
                {slide.secondary}
              </h2>
              <div class="voffset50" />
              <div data-animation="animated fadeInUp" class="animate-btn">
                <a href={slide.action_link}>
                  <input
                    class="btn square stay-in-touch-submit"
                    type="submit"
                    name="button"
                    value={slide.action}
                  />
                </a>
              </div>
            </div>
          </div>
          <!-- /.item -->
        {:else if slide.style === 2}
          <!-- Second slide -->
          <div class="item">
            <!-- Modify Image BG -->
            <div
              class="fill"
              style="background-image:url('{getLink(slide.feature_image.id)}');"
            />
            <div class="carousel-caption p-intro-animate">
              <p data-animation="animated fadeIn">
                {@html slide.primary}
              </p>
              <a
                class="intro-link"
                href={slide.action_link}
                data-animation="animated fadeIn"
                >{slide.action}<i class="fa fa-angle-right" /></a
              >
            </div>
          </div>
          <!-- /.item -->
        {:else}
          <!-- Third slide -->
          <div class="item title-alt">
            <!-- Modify Image BG -->
            <div
              class="fill"
              style="background-image:url('{getLink(slide.feature_image.id)}');"
            />
            <div class="carousel-caption">
              <p data-animation="animated fadeInUp">{@html slide.primary}</p>
              <div data-animation="animated fadeInUp" class="animate-btn-alt">
                <a href={slide.action_link}>
                  <input
                    class="btn square stay-in-touch-submit"
                    type="submit"
                    name="button"
                    value={slide.action}
                  />
                </a>
              </div>
            </div>
          </div>
          <!-- /.item -->
        {/if}
      {/each}
    </div>
    <!-- /.carousel-inner -->
  </div>
  <!-- /.carousel -->
</section>
