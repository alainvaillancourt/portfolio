<script lang="ts">
	import { _ } from 'svelte-i18n';
	//import { get } from 'svelte/store'
	import { locale, lang } from '$lib/i18n';

	import TitledPage from '$lib/components/common/titled-page/titled-page.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import ResumeData from '$lib/data/resume';
</script>

<TitledPage title={ResumeData.title}>
	<a href={ResumeData.resume} download={ResumeData.filename} class="mx-auto">
		<Button>{$_('Download')}</Button>
	</a>
	<iframe src={ResumeData.resume} class="h-full w-full" title={ResumeData.title}></iframe>
</TitledPage>
