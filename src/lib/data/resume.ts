import { _ } from 'svelte-i18n';
import { get } from 'svelte/store'
import { locale, lang } from '$lib/i18n';

import { href } from '$lib/utils';

//const title = "Résumé";
const title = get(_)('page.resume.title');

let filepath = "/pdf";
let filename = "alainv_resume.pdf";
let resume = href(`${filepath}/${filename}`);
switch(lang) {
	case 'en': 
		filename = "alainv_resume.pdf";
		resume = href(`${filepath}/${filename}`);
		break;
	case 'fr': 
		filename = "alainv_curriculum.pdf";
		resume = href(`${filepath}/${filename}`);
		break;
	default: 
		filename = "alainv_resume.pdf";
		resume = href(`${filepath}/${filename}`);
		break;
}

const ResumeData = { title, filepath, filename, resume };
export default ResumeData;
