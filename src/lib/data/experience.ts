import { _ } from 'svelte-i18n';
import { get } from 'svelte/store';
import { locale, lang } from '$lib/i18n';

import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const items: Array<Experience> = [
	{
		slug: get(_)('experience.dev.slug'),
		//name: "Websites & Web Apps Developer",
		//name: "Web & Apps Developer",
		name: get(_)('experience.dev.name'),
		logo: Assets.Unknown,
		color: 'azure',
		links: [],
		abstract: get(_)('experience.dev.abstract'),
		description: get(_)('experience.dev.description'),
		contract: ContractType.Freelance,
		type: get(_)('experience.dev.type'),
		//company: "Self-employed worker",
		company: get(_)('experience.dev.company'),
		location: get(_)('experience.dev.location'),
		period: { from: new Date(1996, 7) },
		skills: getSkills( 'php', 'html', 'css', 'js', 'ts', 'node', 'vbnet', 'csharp', 'wordpress' )
	},
	{
		slug: get(_)('experience.tech.slug'),
		//name: "Computer technician",
		name: get(_)('experience.tech.name'),
		logo: Assets.CSLE,
		color: 'darkgreen',
		links: [],
		abstract: get(_)('experience.tech.abstract'),
		//description: "Software and hardware technical support",
		description: get(_)('experience.tech.description'),
		contract: ContractType.FullTime,
		//type: "Computer technician",
		type: get(_)('experience.tech.type'),
		company: get(_)('experience.tech.company'),
		location: get(_)('experience.tech.location'),
		period: { from: new Date(1986, 8), to: new Date(1996, 7) },
		skills: getSkills( 'access', 'excel', 'word', 'vba', 'foxpro', 'fmp', 'vb6' )
	}
];

//const title = "Experience";
const title = get(_)('page.experience.title');

const ExperienceData = { title, items };
export default ExperienceData;
