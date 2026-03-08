import { _ } from 'svelte-i18n';
import { get } from 'svelte/store'
//import { locale, lang } from '$lib/i18n';

import BaseData from './base';

const left = { title: BaseData.fullname, icon: 'i-carbon-code' } as const;

/*const items: Array<{
	title: string;
	icon: `i-carbon-${string}`;
	href: string;
}> = [
	{ title: "Skills", icon: 'i-carbon-assembly-cluster', href: '/skills' },
	{ title: "Projects", icon: 'i-carbon-cube', href: '/projects' },
	{ title: "Experience", icon: 'i-carbon-development', href: '/experience' },
	{ title: "Education", icon: 'i-carbon-education', href: '/education' },
	{ title: "Resume", icon: 'i-carbon-document', href: '/resume' }
];*/

const items: Array<{
	title: string;
	icon: `i-carbon-${string}`;
	href: string;
}> = [
	{ title: get(_)('nav.skills.title'), icon: 'i-carbon-assembly-cluster', href: get(_)('nav.skills.href') },
	{ title: get(_)('nav.projects.title'), icon: 'i-carbon-cube', href: get(_)('nav.projects.href') },
	{ title: get(_)('nav.experience.title'), icon: 'i-carbon-development', href: get(_)('nav.experience.href') },
	{ title: get(_)('nav.education.title'), icon: 'i-carbon-education', href: get(_)('nav.education.href') },
	{ title: get(_)('nav.resume.title'), icon: 'i-carbon-document', href: get(_)('nav.resume.href') }
];

const NavBarData = { left, items };

export default NavBarData;
