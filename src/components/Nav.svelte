<script>
	import { getLink } from "../util";
</script>

<header id="jHeader">
	<nav class="navbar navbar-default " role="navigation">
		<div class="navbar-header">
			<button
				type="button"
				class="navbar-toggle"
				data-toggle="collapse"
				data-target=".navbar-ex1-collapse"
			>
				<span class="sr-only">Desplegar navegación</span>
				<span class="icon-bar" />
				<span class="icon-bar" />
				<span class="icon-bar" />
			</button>
			<a class="navbar-brand" href="#home"
				><img
					width="128"
					src={getLink("1424726a-81e4-4746-9e3a-4543de242c56")}
					alt="logo"
				/></a
			>
		</div>

		<div class="collapse navbar-collapse navbar-ex1-collapse" id="navbar-muziq">
			<ul class="nav navbar-nav navbar-right">
				<li class="active"><a href="#home">Home</a></li>
				<li><a href="#jams">Jams</a></li>
				<li><a href="#bio">Bio</a></li>
				<li><a href="#gallery">Gallery</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</div>
	</nav>
</header>
