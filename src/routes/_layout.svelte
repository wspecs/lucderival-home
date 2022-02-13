<script>
	import Loader from "../components/Loader.svelte";
	import Nav from "../components/Nav.svelte";
	export let segment;
</script>

<Loader />
<Nav />
<main>
	<slot />
	<!--[if lt IE 7]>
	<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
	<![endif]-->
</main>
