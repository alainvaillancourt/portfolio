<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import {
		Dialog,
		DialogClose,
		DialogContent,
		DialogFooter,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { Tooltip, TooltipTrigger } from '$lib/components/ui/tooltip';
	import TooltipContent from '$lib/components/ui/tooltip/tooltip-content.svelte';
	import H4 from '$lib/components/ui/typography/h4.svelte';
	import Large from '$lib/components/ui/typography/large.svelte';
	import BaseData from '$lib/data/base';
	import NavBarData from '$lib/data/nav-bar';
	import { href } from '$lib/utils';
	import { mode, toggleMode } from 'mode-watcher';

	import { _ } from 'svelte-i18n';
	import { get } from 'svelte/store';
	import { locale, lang } from '$lib/i18n';

	let isDarkMode = $derived($mode === 'dark');

	function setLocale(value: string) {
		locale.set(value);
		location.reload();
		/*
		let hostname = location.hostname;
		let parts = hostname.split('.');
		switch (value) {
			case 'en':
				parts.shift();
				break;
			case 'fr':
				parts.unshift('fr');
				break;
			default:
		}
		hostname = parts.join('.');
		location.hostname = hostname;
		*/
	}
</script>

<div
	class="border-1 absolute left-0 right-0 top-0 z-10 flex h-[50px] flex-row items-center border-b bg-[--bg] px-4 backdrop-blur-xl sm:px-8"
	style="--bg : hsl(var(--background) / 0.5)"
>
	<div class="sm:flex-1">
		<a href={href('/')} class="flex flex-row items-center justify-start gap-2 text-2xl">
			<Tooltip>
				<TooltipTrigger>
					<Icon icon={NavBarData.left.icon} />
				</TooltipTrigger>
				<TooltipContent side="bottom" class="lg:hidden">
					{NavBarData.left.title}
				</TooltipContent>
			</Tooltip>
			<H4 className="hidden lg:block">{NavBarData.left.title}</H4>
		</a>
	</div>

	<!-- larger than sm -->
	<div class="hidden flex-[2] flex-row items-center justify-center gap-2 sm:flex">
		{#each NavBarData.items as item}
			<a href={href(item.href)}>
				<Tooltip>
					<TooltipTrigger>
						<Button class="flex flex-row items-center justify-center gap-2" variant="ghost">
							<Icon icon={item.icon} className="text-xl" />
							<div class="hidden lg:block">{item.title}</div>
						</Button>
					</TooltipTrigger>
					<TooltipContent side="bottom" class="lg:hidden">
						{item.title}
					</TooltipContent>
				</Tooltip>
			</a>
		{/each}
		<a href="#/" onclick={() => setLocale(lang=='fr'?'en':'fr')}>
			<Tooltip>
				<TooltipTrigger>
					<Button class="flex flex-row items-center justify-center gap-2" variant="ghost">
						<Icon icon="i-carbon-language" className="text-xl" />
						<div class="hidden lg:block">{lang=='fr'?"English":"Français"}</div>
					</Button>
				</TooltipTrigger>
				<TooltipContent side="bottom" class="lg:hidden">
					{lang=='fr'?"English":"Français"}
				</TooltipContent>
			</Tooltip>
		</a>
	</div>
	<div class="hidden flex-row items-center justify-end gap-2 sm:flex sm:flex-1">
		<a href={href($_('nav.search.href'))}>
			<Button variant="ghost" class="text-xl">
				<Icon icon="i-carbon-search" />
			</Button>
		</a>
		<Button variant="ghost" class="text-xl" on:click={toggleMode}>
			<Icon icon={isDarkMode ? 'i-carbon-sun' : 'i-carbon-moon'} />
		</Button>
	</div>

	<!-- sm -->
	<div class="flex flex-[2] flex-row items-center justify-center sm:hidden">
		<a href={href('/')}>
			<Large>{BaseData.fullname}</Large>
		</a>
	</div>
	<div class="flex flex-row items-center justify-center sm:hidden">
		<Dialog>
			<DialogTrigger>
				<Button size="icon" variant="ghost">
					<Icon className="text-xl" icon="i-carbon-menu" />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<div class="flex flex-col gap-2 pt-4">
					{#each NavBarData.items as item}
						<DialogClose>
							<a href={href(item.href)} class="w-full">
								<Button class="flex w-full flex-row items-center justify-start gap-2" variant="ghost">
									<Icon icon={item.icon} className="text-xl" />
									<div>{item.title}</div>
								</Button>
							</a>
						</DialogClose>
					{/each}
					<DialogClose>
						<a href="#/" class="w-full">
							<Button class="flex w-full flex-row items-center justify-start gap-2" variant="ghost" on:click={() => setLocale(lang=='fr'?'en':'fr')}>
								<Icon icon="i-carbon-language" className="text-xl" />
								<div>{lang=='fr'?"English":"Français"}</div>
							</Button>
						</a>
					</DialogClose>
					<Separator />
					<DialogClose>
						<a href={href($_('nav.search.href'))} class="w-full">
							<Button class="flex w-full flex-row items-center justify-start gap-2" variant="ghost">
								<Icon icon={'i-carbon-search'} className="text-xl" />
								<div>{$_('nav.search.title')}</div>
							</Button>
						</a>
					</DialogClose>
					<Separator />
					<Button class="flex w-full flex-row items-center justify-start gap-2" variant="ghost" on:click={toggleMode}>
						<Icon icon={isDarkMode ? 'i-carbon-sun' : 'i-carbon-moon'} className="text-xl" />
						<div>{isDarkMode ? $_('mode.light') : $_('mode.dark')}</div>
					</Button>
				</div>
				<DialogFooter class="items-end">
					<DialogClose>
						<Button>Close</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	</div>
</div>
