<script>
	import Loader from "../components/Loader.svelte";
	import Nav from "../components/Nav.svelte";
</script>

<Loader />
<Nav />
<main>
	<slot />
</main>
