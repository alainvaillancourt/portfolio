<script>
	import { _ } from 'svelte-i18n';
	import { get } from 'svelte/store'
	import { locale, lang } from '$lib/i18n';

	import Large from '$lib/components/ui/typography/large.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
</script>

<div style="display:none" class="flex flex-1 flex-col items-center justify-center gap-2">
	<Large>Ooops...</Large>
	<Muted>No content to display here, comeback another time...</Muted>
</div>
<div class="flex flex-1 flex-col items-center justify-center gap-2">
	<Large>{$_('Upcoming')}...</Large>
</div>
