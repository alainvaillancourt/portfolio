<script lang="ts">
	import { _ } from 'svelte-i18n';
	//import { get } from 'svelte/store';
	//import { locale, lang } from '$lib/i18n';

	import { tick } from 'svelte';
	import { page } from '$app/state';
	import { pushState, replaceState } from "$app/navigation";

	import Input from '$lib/components/ui/input/input.svelte';
	import { onMount, type Snippet } from 'svelte';
	import TitledPage from '../titled-page/titled-page.svelte';

	let {
		//title = "Untitled",
		title = `{$_('Untitled')}`,
		onSearch,
		children
	}: { title: string; onSearch: (value: string) => void; children: Snippet } = $props();

	let query = $state('');
	let mounted = $state(false);

	$effect(() => {
		if (mounted) {
			page.params.q = query;
			page.url.searchParams.set('q', query);
			replaceState(page.url, page.state);
			onSearch(query);
		}
	});

	onMount(async () => {
		await tick();
		query = page.url.searchParams.get('q') ?? '';
		mounted = true;
	});
</script>

<TitledPage {title}>
	<Input id="search" placeholder="{$_('nav.search.title')}..." bind:value={query} />
	{@render children()}
</TitledPage>
