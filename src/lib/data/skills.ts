import { _ } from 'svelte-i18n';
import { get } from 'svelte/store';
import { locale, lang } from '$lib/i18n';

import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';

import { omit } from '@riadh-adrani/utils';
import Assets from './assets';

import js_md from './md/skills/js.md?raw';
import ts_md from './md/skills/ts.md?raw';
import csharp_md from './md/skills/csharp.md?raw';
import node_md from './md/skills/node.md?raw';
import react_md from './md/skills/react.md?raw';
import svelte_md from './md/skills/svelte.md?raw';
import angular_md from './md/skills/angular.md?raw';
import xamarin_md from './md/skills/xamarin.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

/*const categories = [
	defineSkillCategory({ name: "Programming Languages", slug: 'pro-lang' }),
	defineSkillCategory({ name: "Frameworks", slug: 'framework' }),
	defineSkillCategory({ name: "Libraries", slug: 'library' }),
	defineSkillCategory({ name: "Databases", slug: 'db' }),
	defineSkillCategory({ name: "ORMs", slug: 'orm' }),
	defineSkillCategory({ name: "DevOps", slug: 'devops' }),
	defineSkillCategory({ name: "Dev Tools", slug: 'devtools' }),
	defineSkillCategory({ name: "Build Tools", slug: 'buildtools' }),
	defineSkillCategory({ name: "Markup & Style", slug: 'markup-style' }),
	defineSkillCategory({ name: "Design Software", slug: 'design' }),
	defineSkillCategory({ name: "Environments & Runtimes", slug: 'env' }),
	defineSkillCategory({ name: "Office Software", slug: 'office' })
] as const;*/

const categories = [
	defineSkillCategory({ key: 'proglang', name: get(_)('category.proglang.name'), slug: get(_)('category.proglang.slug') }),
	defineSkillCategory({ key: 'framework', name: get(_)('category.framework.name'), slug: get(_)('category.framework.slug') }),
	defineSkillCategory({ key: 'lib', name: get(_)('category.lib.name'), slug: get(_)('category.lib.slug') }),
	defineSkillCategory({ key: 'db', name: get(_)('category.db.name'), slug: get(_)('category.db.slug') }),
	defineSkillCategory({ key: 'orm', name: get(_)('category.orm.name'), slug: get(_)('category.orm.slug') }),
	defineSkillCategory({ key: 'devops', name: get(_)('category.devops.name'), slug: get(_)('category.devops.slug') }),
	defineSkillCategory({ key: 'dev', name: get(_)('category.dev.name'), slug: get(_)('category.dev.slug') }),
	defineSkillCategory({ key: 'build', name: get(_)('category.build.name'), slug: get(_)('category.build.slug')}),
	defineSkillCategory({ key: 'mark', name: get(_)('category.mark.name'), slug: get(_)('category.mark.slug') }),
	defineSkillCategory({ key: 'design', name: get(_)('category.design.name'), slug: get(_)('category.design.slug') }),
	defineSkillCategory({ key: 'env', name: get(_)('category.env.name'), slug: get(_)('category.env.slug') }),
	defineSkillCategory({ key: 'office', name: get(_)('category.office.name'), slug: get(_)('category.office.slug') })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['key']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.key === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		//out.push({ category: { name: "Others", slug: 'others' }, items: others });
		out.push({ category: { key: 'other', name: get(_)('category.other.name'), slug: get(_)('category.other.slug') }, items: others });
	}

	return out;
};

const items = [
	// LANGUAGES
	defineSkill({
		slug: 'js',
		name: "JavaScript",
		logo: Assets.JavaScript,
		color: 'yellow',
		description: "",
		category: 'proglang',
	}),
	defineSkill({
		slug: 'ts',
		name: "TypeScript",
		logo: Assets.TypeScript,
		color: 'blue',
		description: "",
		category: 'proglang',
	}),
	defineSkill({
		slug: 'csharp',
		name: "C#",
		logo: Assets.Csharp,
		color: 'purple',
		description: "",
		category: 'proglang',
	}),
	defineSkill({
		slug: 'php',
		name: "PHP",
		logo: Assets.PHP,
		color: 'purple',
		description: "",
		category: 'proglang',
	}),
	defineSkill({
		slug: 'vbnet',
		name: "VB.NET",
		logo: Assets.VBnet,
		color: 'blue',
		description: "",
		category: 'proglang',
	}),
	defineSkill({
		slug: 'vba',
		name: "VBA",
		logo: Assets.VBA,
		color: 'purple',
		description: "",
		category: 'proglang',
	}),
	defineSkill({
		slug: 'vb6',
		name: "VB6",
		logo: Assets.VB6,
		color: 'purple',
		description: "",
		category: 'proglang',
	}),
	defineSkill({
		slug: 'cpp',
		name: "C++",
		logo: Assets.Cpp,
		color: 'blue',
		description: "",
		category: 'proglang',
	}),
	defineSkill({
		slug: 'regex',
		//name: "RegEx",
		name: get(_)('skill.regex.name'),
		logo: Assets.RegEx,
		color: 'cyan',
		description: get(_)('skill.regex.description'),
		category: 'proglang',
	}),
	defineSkill({
		slug: 'mlang',
		name: "M",// M formula language
		logo: Assets.M,
		color: 'green',
		description: get(_)('skill.mlang.description'),
		category: 'proglang'
	}),

	// FRAMEWORKS
	defineSkill({
		slug: 'blazor',
		name: "Blazor",
		logo: Assets.Blazor,
		color: 'purple',
		description: "",
		category: 'lib',
	}),
	/*defineSkill({
		slug: 'react',
		name: "React",
		logo: Assets.React,
		color: 'cyan',
		description: "",
		category: 'library',
	}),*/
	defineSkill({
		slug: 'svelte',
		name: "Svelte",
		logo: Assets.Svelte,
		color: 'orange',
		description: "",
		category: 'lib',
	}),
	defineSkill({
		slug: 'bootstrap',
		name: "Bootstrap",
		logo: Assets.Bootstrap,
		color: 'purple',
		description: "",
		category: 'lib',
	}),
	defineSkill({
		slug: 'jquery',
		name: "jQuery",
		logo: Assets.jQuery,
		color: 'blue',
		description: "",
		category: 'lib',
	}),

	/*
	defineSkill({
		slug: 'vue',
		name: "Vue JS",
		logo: Assets.VueJS,
		color: 'green',
		description: "",
		category: 'framework',
	}),
	defineSkill({
		slug: 'angular',
		name: "Angular",
		logo: Assets.Angular,
		color: 'red',
		description: "",
		category: 'framework',
	}),
	defineSkill({
		slug: 'xamarin',
		name: "Xamarin",
		logo: Assets.Xamarin,
		color: 'purple',
		description: "",
		category: 'framework',
	}),
	*/

	// ENV & BACKEND
	defineSkill({
		slug: 'node',
		name: "Node JS",
		logo: Assets.NodeJS,
		color: 'green',
		description: "",
		category: 'env',
	}),

	// DATABASES
	defineSkill({
		slug: 'access',
		name: "Microsoft Access",
		logo: Assets.Access,
		color: 'red',
		description: "",
		category: 'db',
	}),
	/*defineSkill({
		slug: 'foxpro',
		name: "Visual FoxPro",
		logo: Assets.FoxPro,
		color: 'orange',
		description: "",
		category: 'db',
	}),*/
	defineSkill({
		slug: 'fmp',
		name: "FileMaker Pro",
		logo: Assets.FMP,
		color: 'blue',
		description: "",
		category: 'db',
	}),
	defineSkill({
		slug: 'mssql',
		name: "Microsoft SQL",
		logo: Assets.MSSQL,
		color: 'red',
		description: "",
		category: 'db',
	}),
	defineSkill({
		slug: 'mysql',
		name: "MySQL",
		logo: Assets.MySQL,
		color: 'cyan',
		description: "",
		category: 'db',
	}),
	/*defineSkill({
		slug: 'mariadb',
		name: "MariaDB",
		logo: Assets.MariaDB,
		color: 'brown',
		description: "",
		category: 'db',
	}),*/
	defineSkill({
		slug: 'sqlite',
		name: "SQLite",
		logo: Assets.SQLite,
		color: 'cyan',
		description: "",
		category: 'db',
	}),

	// ORMs
	defineSkill({
		slug: 'ef',
		name: "Entity Framework",
		logo: Assets.EF,
		color: 'darkcyan',
		description: "",
		category: 'orm',
	}),
	defineSkill({
		slug: 'efcore',
		name: "EF Core",
		logo: Assets.EFCore,
		color: 'purple',
		description: "",
		category: 'orm',
	}),
	defineSkill({
		slug: 'dapper',
		name: "Dapper",
		logo: Assets.Dapper,
		color: 'darkcyan',
		description: "",
		category: 'orm',
	}),

	/*
	// DEVOPS
	defineSkill({
		slug: 'docker',
		name: "Docker",
		logo: Assets.Docker,
		color: 'blue',
		description: "",
		category: 'devops',
	}),
	defineSkill({
		slug: 'kubernetes',
		name: "Kubernetes",
		logo: Assets.Kubernetes,
		color: 'purple',
		description: "",
		category: 'devops',
	}),
	*/

	// DEVTOOLS / task runners / build tools
	defineSkill({
		slug: 'webpack',
		name: "Webpack",
		logo: Assets.Webpack,
		color: 'darkcyan',
		description: "",
		category: 'build',
	}),
	/*
	defineSkill({
		slug: 'grunt',
		name: "Grunt",
		logo: Assets.Grunt,
		color: 'orange',
		description: "",
		category: 'build',
	}),
	*/	
	defineSkill({
		slug: 'gulp',
		name: "Gulp",
		logo: Assets.Gulp,
		color: 'red',
		description: "",
		category: 'build',
	}),
	defineSkill({
		slug: 'vite',
		name: "Vite",
		logo: Assets.Vite,
		color: 'purple',
		description: "",
		category: 'build',
	}),

	// MARKUP & STYLING
	defineSkill({
		slug: 'html',
		name: "HTML",
		logo: Assets.HTML,
		color: 'orange',
		description: "",
		category: 'mark',
	}),
	defineSkill({
		slug: 'css',
		name: "CSS",
		logo: Assets.CSS,
		color: 'blue',
		description: "",
		category: 'mark',
	}),
	defineSkill({
		slug: 'scss',
		name: "SCSS", // Sassy CSS
		logo: Assets.SCSS,
		color: 'pink',
		description: "",
		category: 'mark',
	}),
	defineSkill({
		slug: 'postcss',
		name: "PostCSS",
		logo: Assets.PostCSS,
		color: 'red',
		description: "",
		category: 'mark',
	}),
	defineSkill({
		slug: 'unocss',
		name: "UnoCSS",
		logo: Assets.UnoCSS,
		color: 'gray',
		description: "",
		category: 'mark',
	}),
	defineSkill({
		slug: 'tailwind',
		name: "Tailwind",
		logo: Assets.Tailwind,
		color: 'cyan',
		description: "",
		category: 'mark',
	}),

	// DESIGN
	defineSkill({
		slug: 'ps',
		name: "Adobe Photoshop",
		logo: Assets.Photoshop,
		color: 'cyan',
		description: "",
		category: 'design'
	}),
	defineSkill({
		slug: 'ai',
		name: "Adobe Illustrator",
		logo: Assets.Illustrator,
		color: 'orange',
		description: "",
		category: 'design'
	}),
	defineSkill({
		slug: 'dw',
		name: "Adobe Dreamweaver",
		logo: Assets.Dreamweaver,
		color: 'purple',
		description: "",
		category: 'design'
	}),

	// Microsoft Office
	defineSkill({
		slug: 'word',
		name: "Microsoft Word",
		logo: Assets.Word,
		color: 'blue',
		description: "",
		category: 'office'
	}),
	defineSkill({
		slug: 'excel',
		name: "Microsoft Excel",
		logo: Assets.Excel,
		color: 'green',
		description: "",
		category: 'office'
	}),
	defineSkill({
		slug: 'powerpoint',
		name: "Microsoft PowerPoint",
		logo: Assets.PowerPoint,
		color: 'orange',
		description: "",
		category: 'office'
	}),
	defineSkill({
		slug: 'onenote',
		name: "Microsoft OneNote",
		logo: Assets.OneNote,
		color: 'purple',
		description: "",
		category: 'office'
	}),
	defineSkill({
		slug: 'outlook',
		name: "Microsoft Outlook",
		logo: Assets.Outlook,
		color: 'blue',
		description: "",
		category: 'office'
	}),

	defineSkill({
		slug: 'powerquery',
		name: "Power Query",
		logo: Assets.PowerQuery,
		color: 'green',
		description: "",
		category: ''
	}),
	defineSkill({
		slug: 'wordpress',
		name: "WordPress",
		logo: Assets.WordPress,
		color: 'blue',
		description: "",
		category: ''
	}),
	defineSkill({
		slug: 'woocommerce',
		name: "WooCommerce",
		logo: Assets.WooCommerce,
		color: 'blue',
		description: "",
		category: ''
	}),
	defineSkill({
		slug: 'acf',
		name: "ACF",
		logo: Assets.ACF,
		color: 'green',
		description: "",
		category: ''
	}),
	defineSkill({
		slug: 'formidable',
		name: "Formidable Forms",
		logo: Assets.Formidable,
		color: 'grey',
		description: "",
		category: ''
	}),
	defineSkill({
		slug: 'linux',
		name: "Linux",
		logo: Assets.Linux,
		color: 'orange',
		description: "",
		category: ''
	}),
	defineSkill({
		slug: 'arduino',
		name: "Arduino",
		logo: Assets.Arduino,
		color: 'cyan',
		description: "",
		category: ''
	}),
	defineSkill({
		slug: 'paypal',
		name: "PayPal",
		logo: Assets.PayPal,
		color: 'blue',
		description: "",
		category: ''
	}),
] as const;

//const title = "Skills";
const title = get(_)('page.skills.title');

const SkillsData = { title, items };
export default SkillsData;
