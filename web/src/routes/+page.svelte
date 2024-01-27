<script>
	let noun1 = 'Data.';
	let noun2 = 'AI.';
	let noun3 = 'Algorithm.';

	let header = 'header';
	let content = 'content';

	let card_count = 9;

	import { Stepper, Step } from '@skeletonlabs/skeleton';
	
</script>


<div class="flex flex-col items-center justify-center mt-4">
	<h1 class="h1 mt-2 hover:animate-bounce">
		<span class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">{noun1}</span>
	</h1>
	<h1 class="h1 mt-2 hover:animate-bounce">
		<span class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone">{noun2}</span>
	</h1>
	<h1 class="h1 mt-2 hover:animate-bounce">
		<span class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone">{noun3}</span>
	</h1>
	
</div>

<div class="mx-16 my-16 ">
	<h1 class="text-4xl font-bold text-gray-200 mb-10">Recent News</h1>
	<div class="grid grid-cols-4 gap-4">
		{#each Array(card_count).fill(0) as _, i}
			<div class="block card card-hover p-4">
				<header class="card-header">(header {i})</header>
				<section class="p-4">
					<img src="https://plus.unsplash.com/premium_photo-1682124744308-a1df156dbe1f?q=80&w=2092&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" class="w-full h-48 object-cover object-center" aria-hidden="true" />
				</section>
				<footer class="card-footer">(footer)</footer>
			</div>
		{/each}
	</div>
</div>

<div class="mx-16 my-16">
	<h1 class="text-4xl font-bold text-gray-200 mb-10">How to use</h1>
	<div class="">
		<Stepper>
			<Step>
				<svelte:fragment slot="header">{header}</svelte:fragment>
				{content}
			</Step>
			<Step>
				<svelte:fragment slot="header">{ header }</svelte:fragment>
				{ content }
			</Step>
			<Step>
				<svelte:fragment slot="header">{ header }</svelte:fragment>
				{ content }
			</Step>
			<!-- ... -->
		</Stepper>
	</div>
</div>