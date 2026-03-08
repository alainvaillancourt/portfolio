import { _ } from 'svelte-i18n';
import { get } from 'svelte/store';
import { locale, lang } from '$lib/i18n';

import Assets from './assets';
import type { Education } from './types';

const items: Array<Education> = [
	{
		slug: get(_)('education.self.slug'),
		name: "",
		logo: Assets.Unknown,
		//degree: "Self-taught learning",
		degree: get(_)('education.self.degree'),
		abstract: "",
		description: "",
		organization: "",
		location: "",
		period: { from: new Date(1986, 8) },
		//subjects: ["Programming", "Databases", "Networking", "Office Software", "Computer Assembly"]
		subjects: [ get(_)('education.subject.0'), get(_)('education.subject.1'), get(_)('education.subject.2'), get(_)('education.subject.3'), get(_)('education.subject.4') ]
	}
];

//const title = "Education";
const title = get(_)('page.education.title');

const EducationData = { title, items };
export default EducationData;
