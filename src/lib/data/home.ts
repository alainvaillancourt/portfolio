import { _ } from 'svelte-i18n';
import { get } from 'svelte/store';
//import { locale, lang } from '$lib/i18n';

import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

//const title = "Home";
const title = get(_)('page.home.title');

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullname},`,
	//description: "Websites & Web Apps Developer",
	description: get(_)('page.home.description'),
	links: [
		{ label: "GitHub", href: 'https://github.com/alainvaillancourt', icon: 'i-carbon-logo-github' },
		{ label: "LinkedIn", href: 'https://www.linkedin.com/in/alain-vaillancourt', icon: 'i-carbon-logo-linkedin' },
		//{ label: "Stack Overflow", href: 'https://stackoverflow.com/users/28380049/alain-vaillancourt', icon: 'i-carbon-logo-stackoverflow' },
		//{ label: "Twitter", href: 'https://twitter.com/alainvaillanc', icon: 'i-carbon-logo-twitter' },
		//{ label: "Bluesky", href: 'https://bsky.app/profile/alainvaillanc.bsky.social', icon: 'i-carbon-logo-bluesky' },
		//{ label: get(_)('Website'), href: 'https://alainvaillancourt.pro', icon: 'i-carbon-link' },
		//{ label: get(_)('Email'), href: 'mailto:alain.vaillancourt@outlook.com', icon: 'i-carbon-at' }
		{ label: get(_)('Email'), href: 'mailto:"Alain Vaillancourt" <contact@alainvaillancourt.pro>', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
