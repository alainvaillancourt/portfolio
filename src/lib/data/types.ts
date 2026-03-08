import { _ } from 'svelte-i18n';
import { get } from 'svelte/store';
import { locale, lang } from '$lib/i18n';

import type { Color } from './colors';

export type Icon = `i-carbon-${string}`;

export enum Platform {
	GitHub = 'github',
	StackOverflow = 'stackoverflow',
	Twitter = 'twitter',
	Linkedin = 'linkedin',
	Email = 'email',
	Facebook = 'facebook',
	Youtube = 'youtube'
}

/*export enum ContractType {
	FullTime = "Full-time",
	PartTime = "Part-time",
	SelfEmployed = "Self-employed",
	Freelance = "Freelance",
	Contract = "Contract",
	Internship = "Internship"
}*/

/*export enum ContractType {
	FullTime = "Temps plein",
	PartTime = "Temps partiel",
	SelfEmployed = "À mon compte",
	Freelance = "Pigiste",
	Contract = "Contrat",
	Internship = "Stage"
}*/

export enum ContractType {
	FullTime = "fulltime",
	PartTime = "parttime",
	SelfEmployed = "selfemployed",
	Freelance = "freelance",
	Contract = "contract",
	Internship = "internship"
}

export type Asset = { light: string; dark: string };

export type Screenshot = {
	src: string;
	label: string;
};

export interface Item<S extends string = string> {
	slug: S;
	name: string;
	logo: Asset;
	abstract: string;
	description: string;
	screenshots?: Array<Screenshot>;
}

export interface Link {
	to: string;
	label: string;
	newTab?: boolean;
}

export interface IconLink extends Link {
	icon: Asset;
}

export interface SkillCategory<S extends string = string> {
	key: S;
	slug: string;
	name: string;
}

export interface Skill<S extends string = string> extends Omit<Item<S>, 'abstract'> {
	color: string;
	category?: SkillCategory;
}

export interface Project<S extends string = string> extends Item<S> {
	links: Array<Link>;
	color: Color;
	period: {
		from: Date;
		to?: Date;
	};
	type: string;
	skills: Array<Skill<S>>;
}

export interface Experience<S extends string = string> extends Project<S> {
	company: string;
	location: string;
	contract: ContractType;
}

export interface Education<S extends string = string> extends Item<S> {
	organization: string;
	location: string;
	period: {
		from: Date;
		to?: Date;
	};
	subjects: Array<string>;
	degree: string;
}
