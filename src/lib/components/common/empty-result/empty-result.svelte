<script>
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Large from '$lib/components/ui/typography/large.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import { _ } from 'svelte-i18n';
</script>

<div class="flex flex-1 flex-col items-center justify-center gap-2">
	<Icon className="text-3xl" icon="i-carbon-ai-status-failed" />
	<Large>Hmmm...</Large>
	<Muted>{$_('doesntexist')}</Muted>
</div>
