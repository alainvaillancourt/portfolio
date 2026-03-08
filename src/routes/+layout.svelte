<script lang="ts">
	import NavBar from '$lib/components/common/nav-bar/nav-bar.svelte';
	import 'virtual:uno.css';
	import '../app.css';
	import '../icons.css';
	import '../markdown.css';
	import { ModeWatcher } from 'mode-watcher';
	import { locale, lang } from '$lib/i18n';
	//import { goto } from '$app/navigation';
	import { page } from "$app/state";

	let { children } = $props();

	const language = page.url.searchParams.get('lang');

	if (language != null) {
		if (language != lang) {
			locale.set(language);
			page.url.searchParams.delete('lang');
			//goto(page.url.toString(), { replaceState: true });
			location.href = page.url.toString();
			location.reload();
		} else {
			page.url.searchParams.delete('lang');
			//goto(page.url.toString(), { replaceState: true });
			location.href = page.url.toString();
		}
	}
	
	/*if (language != null) {
		if (language != lang) {
			locale.set(language);
			location.reload();
		}
	}*/
</script>

<ModeWatcher />
<div class="flex h-screen w-screen flex-col overflow-x-hidden">
	<NavBar />
	<div class="mt-[50px] flex flex-1 flex-col">{@render children()}</div>
</div>
