<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	import { initializeStores } from '@skeletonlabs/skeleton';

	// Toast
	import { Toast, getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';

	// Drawer
	import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';

	initializeStores();

	const drawerStore = getDrawerStore();
	const drawerSettings: DrawerSettings = {
		id: 'example-3',
		// Provide your property overrides:
		position: 'right',
		bgDrawer: 'bg-purple-900 text-white',
		bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
		width: 'w-[280px] md:w-[480px]',
		padding: 'p-4',
		rounded: 'rounded-xl',
	};

	import { Avatar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Login state
	import { get } from 'svelte/store';
	import { login_status } from '../store';

	get(login_status);

	function Logout() {
		login_status.set(false);
		window.location.href = './';
	}
</script>


<Toast />
<Drawer />
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="./" class="text-xl uppercase ml-2">AI CUP</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-md variant-ghost-surface"
					href="./compitition"
					target="_blank"
					rel="noreferrer"
				>
					Compitition
				</a>
				<a
					class="btn btn-md variant-ghost-surface"
					href="./doc"
					target="_blank"
					rel="noreferrer"
				>
					Documents
				</a>
				{#if $login_status}
					<button
						class="btn btn-md variant-ghost-surface"
						on:click={() => { Logout();}}
					>Logout
					</button>
					<Avatar
						initials="TS"
						border="border-4 border-surface-300-600-token hover:!border-primary-500"
						width="w-12"
						cursor="cursor-pointer"
						on:click={() => {
							drawerStore.open(drawerSettings);
						}}
					/>
				{:else}
					<a
						class="btn btn-sm variant-ghost-surface"
						href="./login"
						rel="noreferrer"
						>Login
					</a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
