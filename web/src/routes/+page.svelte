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
	<h1 class="h1 mt-2">
		<span class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">{noun1}</span>
	</h1>
	<h1 class="h1 mt-2">
		<span class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone">{noun2}</span>
	</h1>
	<h1 class="h1 mt-2">
		<span class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone">{noun3}</span>
	</h1>
	
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
			<!-- ... -->
		</Stepper>
	</div>
</div>

<div class="mx-16 my-16 ">
	<h1 class="text-4xl font-bold text-gray-200 mb-10">Recent News</h1>
	<div class="grid grid-cols-4 gap-4">
		{#each Array(card_count).fill(0) as _, i}
			<div class="bg-gray-800 rounded-lg shadow-lg p-4">
				<div class="flex flex-col items-center justify-center">
					<h1 class="text-2xl font-bold text-gray-200 mb-4">Card {i}</h1>
					<p class="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
				</div>
			</div>
		{/each}
	</div>
</div>