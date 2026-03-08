import type { Reroute } from '@sveltejs/kit';

//import { base } from '$app/paths';
//if ( base == '/portfolio' )
/*const translated: Record<string, string> = {
	'/portfolio/comp%C3%A9tences': '/portfolio/skills',
	'/portfolio/projets': '/portfolio/projects',
	'/portfolio/exp%C3%A9rience': '/portfolio/experience',
	'/portfolio/%C3%A9ducation': '/portfolio/education',
	'/portfolio/curriculum': '/portfolio/resume',
};*/
//else
/*const translated: Record<string, string> = {
	'/comp%C3%A9tences': '/skills',
	'/projets': '/projects',
	'/exp%C3%A9rience': '/experience',
	'/%C3%A9ducation': '/education',
	'/curriculum': '/resume',
};*/

const translated: Record<string, string> = {
	'comp%C3%A9tences': 'skills',
	'projets': 'projects',
	'exp%C3%A9rience': 'experience',
	'%C3%A9ducation': 'education',
	'curriculum': 'resume',
	'recherche': 'search',
};

export const reroute: Reroute = ({ url }) => {
	/*if (url.pathname in translated) {
		return translated[url.pathname];
	}*/
	const separator = '/';
	const slugs = url.pathname.split(separator);
	slugs.forEach((slug, index) => {
		if (slug == '' ) return;
		if (slug in translated) {
			//url.searchParams.set("lang", 'fr');
			slugs[index] = translated[slug];
		}
	});
	url.pathname = slugs.join(separator);
	return url.pathname;
};