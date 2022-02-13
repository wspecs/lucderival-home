<script>
	import { onMount } from "svelte";
	import Intro from "../components/Intro.svelte";
	import Player from "../components/Player.svelte";
	import Jams from "../components/Jams.svelte";
	import Biography from "../components/Biography.svelte";
	import Gallery from "../components/Gallery.svelte";
	import Footer from "../components/Footer.svelte";
	import Contact from "../components/Contact.svelte";
	import { fetchData } from "../util";

	let overview = {};
	onMount(async () => {
		console.info("Layout is Ready!");
		// Ensure that the slides are available before loading the scripts
		let timeElapseMs = 0;
		const delayBetweenChecksMs = 200;
		var checkExist = setInterval(function () {
			timeElapseMs += delayBetweenChecksMs;
			console.log(timeElapseMs);
			if (
				timeElapseMs > 3000 ||
				(document.querySelector(".jam-link") &&
					document.querySelector(".swipebox") &&
					document.querySelector(".jam.track-info"))
			) {
				window.dispatchEvent(new CustomEvent("SveltePageReady", null));
				clearInterval(checkExist);
			}
		}, delayBetweenChecksMs);

		overview = await fetchData("/Overview");
	});
</script>

<Intro />
<Player />
<Jams />
<Biography paragraph={overview.bio_paragraph} quote={overview.bio_quote} />
<Gallery />
<Contact />
<Footer />
