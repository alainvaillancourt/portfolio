import { addMessages, init, getLocaleFromNavigator } from "svelte-i18n";
import { writable, get } from "svelte/store";
import { browser } from "$app/environment";

import en from "$lib/lang/en.json";
import fr from "$lib/lang/fr.json";

addMessages('en', en);
addMessages('fr', fr);

/*
import { register, init, getLocaleFromNavigator } from "svelte-i18n";
register('en', () => import('$lib/lang/en.json'));
register('fr', () => import('$lib/lang/fr.json'));
*/

const fallback = 'en';

const storedLocale = localStorage.getItem("locale");
export const locale = writable(browser ? storedLocale || getLocaleFromNavigator() : fallback);
export const lang = get(locale)?.split('-')[0];

locale.subscribe((value) => {
	if (browser) {
		if (value)
			localStorage.setItem("locale", value);
		else
			localStorage.removeItem("locale");
	}
});

init({
	fallbackLocale: fallback,
	initialLocale: get(locale),
});
