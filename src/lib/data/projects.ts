import { _ } from 'svelte-i18n';
import { get } from 'svelte/store';
import { locale, lang } from '$lib/i18n';

import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

import ptreport_md from './md/projects/ptreport.md?raw';

/*const type: Record<string, string> = {
	'website': "Site Web",
	'plugin': "Extension"
};*/

const items: Array<Project> = [
	{
		slug: get(_)('project.portfolio.slug'),
		name: get(_)('project.portfolio.name'),
		color: '#ff3e00',
		logo: Assets.Svelte,
		abstract: get(_)('project.portfolio.abstract'),
		description: "",
		period: { from: new Date(2024, 10), to: new Date(2026, 0) },
		links: [{ label: 'GitHub', to: 'https://github.com/alainvaillancourt/portfolio' }],
		skills: getSkills('svelte', 'ts', 'sass', 'unocss', 'vite'),
		type: get(_)('project.type.svelte.name')
	},
	{
		slug: get(_)('project.ptreport.slug'),
		name: get(_)('project.ptreport.name'),
		color: 'blue',
		logo: Assets.Word,
		abstract: get(_)('project.ptreport.abstract'),
		description: "", //ptreport_md,
		period: { from: new Date(2023, 8), to: new Date(2024, 9) },
		links: [],
		skills: getSkills('wordpress', 'html', 'css', 'word', 'vba'),
		type: get(_)('project.type.dotm.name')
	},
	{
		slug: get(_)('project.patientapp.slug'),
		name: get(_)('project.patientapp.name'),
		color: 'purple',
		logo: Assets.Blazor,
		abstract: get(_)('project.patientapp.abstract'),
		description: "",
		period: { from: new Date(2023, 3), to: new Date(2023, 11) },
		links: [],
		skills: getSkills('blazor', 'csharp', 'wordpress', 'formidable', 'php', 'html', 'css'),
		type: get(_)('project.type.bpwa.name')
	},
	{
		slug: get(_)('project.membership.slug'),
		name: get(_)('project.membership.name'),
		color: 'darkblue',
		logo: Assets.WordPress,
		abstract: get(_)('project.membership.abstract'),
		description: "",
		period: { from: new Date(2022, 9), to: new Date(2024, 10) },
		links: [],
		skills: getSkills('wordpress', 'php', 'js'),
		type: get(_)('project.type.wpext.name')
	},
	/*{
		slug: get(_)('project.quotes.slug'),
		name: get(_)('project.quotes.name'),
		color: '#a33539',
		logo: Assets.Access,
		abstract: get(_)('project.quotes.abstract'),
		description: "",
		period: { from: new Date(2021, 5), to: new Date(2022, 11) },
		links: [],
		skills: getSkills('access', 'vba'),
		type: get(_)('project.type.db.name')
	},*/
	{
		slug: get(_)('project.normalize.slug'),
		name: get(_)('project.normalize.name'),
		color: '#a33539',
		logo: Assets.Access,
		abstract: get(_)('project.normalize.abstract'),
		description: "",
		period: { from: new Date(2021, 2), to: new Date(2021, 5) },
		links: [],
		skills: getSkills('access', 'regex', 'vba'),
		type:  get(_)('project.type.db.name')
	},
	{
		slug: get(_)('project.gmap.slug'),
		name: get(_)('project.gmap.name'),
		color: 'darkblue',
		logo: Assets.WordPress,
		abstract: get(_)('project.gmap.abstract'),
		description: "",
		period: { from: new Date(2020, 7), to: new Date(2020, 7) },
		links: [],
		skills: getSkills('wordpress', 'acf', 'php', 'js'),
		type: get(_)('project.type.wpext.name')
	},
	{
		slug: get(_)('project.prodlist.slug'),
		name: get(_)('project.prodlist.name'),
		color: 'green',
		logo: Assets.Excel,
		abstract: get(_)('project.prodlist.abstract'),
		description: "",
		period: { from: new Date(2020, 4), to: new Date(2023, 3) },
		links: [],
		skills: getSkills('excel', 'powerquery', 'mlang', 'wordpress', 'woocommerce'),
		type: get(_)('project.type.ss.name')
	},
	{
		slug: get(_)('project.restrict.slug'),
		name: get(_)('project.restrict.name'),
		color: 'darkblue',
		logo: Assets.WordPress,
		abstract: get(_)('project.restrict.abstract'),
		description: "",
		period: { from: new Date(2020, 3), to: new Date(2021, 2) },
		links: [],
		skills: getSkills('wordpress', 'php', 'js'),
		type: get(_)('project.type.wpext.name')
	},
	{
		slug: get(_)('project.wallview.slug'),
		name: get(_)('project.wallview.name'),
		color: 'darkblue',
		logo: Assets.WordPress,
		abstract: get(_)('project.wallview.abstract'),
		description: "",
		period: { from: new Date(2019, 8), to: new Date(2019, 9) },
		links: [],
		skills: getSkills('wordpress', 'php', 'css', 'js', 'gulp'),
		type: get(_)('project.type.wpext.name')
	},
	{
		slug: get(_)('project.clinic.slug'),
		name: get(_)('project.clinic.name'),
		color: 'darkblue',
		logo: Assets.WordPress,
		abstract: get(_)('project.clinic.abstract'),
		description: "",
		period: { from: new Date(2019, 11), to: new Date(2022, 10) },
		links: [],
		skills: getSkills('wordpress', 'formidable', 'php', 'js'),
		type: get(_)('project.type.wpext.name')
	},
	{
		slug: get(_)('project.actugui.slug'),
		name: get(_)('project.actugui.name'),
		color: 'purple',
		logo: Assets.Csharp,
		abstract: get(_)('project.actugui.abstract'),
		description: "",
		period: { from: new Date(2019, 0), to: new Date(2020, 10) },
		links: [],
		skills: getSkills('csharp'),
		type: get(_)('project.type.app.name')
	},
	{
		slug: get(_)('project.actuapi.slug'),
		name: get(_)('project.actuapi.name'),
		color: '#a33539',
		logo: Assets.PHP,
		abstract: get(_)('project.actuapi.abstract'),
		description: "",
		period: { from: new Date(2018, 10), to: new Date(2020, 5) },
		links: [],
		skills: getSkills('linux', 'php', 'mysql'),
		type: get(_)('project.type.app.name')
	},
	{
		slug: get(_)('project.actumcu.slug'),
		name: get(_)('project.actumcu.name'),
		color: 'cyan',
		logo: Assets.Arduino,
		abstract: get(_)('project.actumcu.abstract'),
		description: "",
		period: { from: new Date(2018, 10), to: new Date(2020, 5) },
		links: [],
		skills: getSkills('cpp', 'arduino'),
		type: get(_)('project.type.app.name')
	},
	{
		slug: get(_)('project.sendmail.slug'),
		name: get(_)('project.sendmail.name'),
		color: 'blue',
		logo: Assets.VBnet,
		abstract: get(_)('project.sendmail.abstract'),
		description: "",
		period: { from: new Date(2018, 1), to: new Date(2019, 3) },
		links: [],
		skills: getSkills('vbnet'),
		type: get(_)('project.type.app.name')
	},
	{
		slug: get(_)('project.wcpos.slug'),
		name: get(_)('project.wcpos.name'),
		color: 'purple',
		logo: Assets.WooCommerce,
		abstract: get(_)('project.wcpos.abstract'),
		description: "",
		period: { from: new Date(2017, 7), to: new Date(2020, 0) },
		links: [],
		skills: getSkills('woocommerce', 'php', 'js'),
		type: get(_)('project.type.wcext.name')
	},
	{
		slug: get(_)('project.paypal.slug'),
		name: get(_)('project.paypal.name'),
		color: 'mediumpurple',
		logo: Assets.PayPal,
		abstract: get(_)('project.paypal.abstract'),
		description: "",
		period: { from: new Date(2016, 9), to: new Date(2018, 5) },
		links: [],
		skills: getSkills('php', 'paypal'),
		type: get(_)('project.type.php.name')
	},
	{
		slug: get(_)('project.outlookcrm.slug'),
		name: get(_)('project.outlookcrm.name'),
		color: 'blue',
		logo: Assets.Outlook,
		abstract: get(_)('project.outlookcrm.abstract'),
		description: "",
		period: { from: new Date(2013, 2), to: new Date(2022, 6) },
		links: [],
		skills: getSkills('vbnet', 'outlook'),
		type: get(_)('project.type.olext.name')
	},
	{
		slug: get(_)('project.simplecopy.slug'),
		name: get(_)('project.simplecopy.name'),
		color: 'blue',
		logo: Assets.VBnet,
		abstract: get(_)('project.simplecopy.abstract'),
		description: "",
		period: { from: new Date(2010, 8), to: new Date(2016, 2) },
		links: [],
		skills: getSkills('vbnet'),
		type: get(_)('project.type.app.name')
	},
	{
		slug: get(_)('project.conversion.slug'),
		name: get(_)('project.conversion.name'),
		color: '#a33539',
		logo: Assets.VB6,
		abstract: get(_)('project.conversion.abstract'),
		description: "",
		period: { from: new Date(1998, 4), to: new Date(1998, 8) },
		links: [],
		skills: getSkills('vb6', 'fmp', 'mac'),
		type: get(_)('project.type.app.name')
	},
	{
		slug: get(_)('project.commandes.slug'),
		name: get(_)('project.commandes.name'),
		logo: Assets.FMP,
		color: '#3633a0',
		abstract: get(_)('project.commandes.abstract'),
		description: "",
		period: { from: new Date(1998, 4), to: new Date(1998, 4) },
		links: [],
		skills: getSkills('fmp'),
		type:  get(_)('project.type.db.name')
	},
	{
		slug: get(_)('project.pricelist.slug'),
		name: get(_)('project.pricelist.name'),
		logo: Assets.Access,
		color: '#a33539',
		abstract: get(_)('project.pricelist.abstract'),
		description: "",
		period: { from: new Date(1997, 11), to: new Date(1997, 11) },
		links: [],
		skills: getSkills('access'),
		type:  get(_)('project.type.db.name')
	},
	{
		slug: get(_)('project.quest.slug'),
		name: get(_)('project.quest.name'),
		logo: Assets.VB6,
		color: '#a33539',
		abstract: get(_)('project.quest.abstract'),
		description: "",
		period: { from: new Date(1997, 5), to: new Date(1997, 5) },
		links: [],
		skills: getSkills('vb6'),
		type: get(_)('project.type.app.name')
	},
	{
		slug: get(_)('project.impots.slug'),
		name: get(_)('project.impots.name'),
		logo: Assets.Excel,
		color: '#227547',
		abstract: get(_)('project.impots.abstract'),
		description: "",
		period: { from: new Date(1997, 0), to: new Date(2010, 2) },
		links: [],
		skills: getSkills('excel'),
		type: get(_)('project.type.ss.name')
	},
	{
		slug: get(_)('project.etats.slug'),
		name: get(_)('project.etats.name'),
		color: '#a33539',
		logo: Assets.Access,
		abstract: get(_)('project.etats.abstract'),
		description: "",
		period: { from: new Date(1996, 11), to: new Date(2005, 10) },
		links: [],
		skills: getSkills('access'),
		type:  get(_)('project.type.db.name')
	},
	/*{
		slug: 'eclairage',
		name: "Éclairage des rues",
		logo: Assets.Access,
		color: '#a33539',
		abstract: "Base de données des poteaux d'éclairage des rues.",
		description: "",
		period: { from: new Date(1996, 9), to: new Date(1996, 9) },
		links: [],
		skills: getSkills('access'),
		type:  get(_)('project.type.db.name')
	},*/
	{
		slug: get(_)('project.inscriptions.slug'),
		name: get(_)('project.inscriptions.name'),
		color: '#3633a0',
		logo: Assets.FMP,
		abstract: get(_)('project.inscriptions.abstract'),
		description: "",
		period: { from: new Date(1996, 6), to: new Date(2000, 5) },
		links: [],
		skills: getSkills('fmp'),
		type:  get(_)('project.type.db.name')
	},
	{
		slug: get(_)('project.gestion.slug'),
		name: get(_)('project.gestion.name'),
		color: '#3633a0',
		logo: Assets.FMP,
		abstract: get(_)('project.gestion.abstract'),
		description: "",
		period: { from: new Date(1996, 6), to: new Date(1999, 8) },
		links: [],
		skills: getSkills('fmp'),
		type:  get(_)('project.type.db.name')
	},
	{
		slug: get(_)('project.achats.slug'),
		name: get(_)('project.achats.name'),
		logo: Assets.FMP,
		color: '#3633a0',
		abstract: get(_)('project.achats.abstract'),
		description: "",
		period: { from: new Date(1996, 5), to: new Date(1996, 5) },
		links: [],
		skills: getSkills('fmp'),
		type:  get(_)('project.type.db.name')
	},
	{
		slug: get(_)('project.formations.slug'),
		name: get(_)('project.formations.name'),
		logo: Assets.FMP,
		color: '#3633a0',
		abstract: get(_)('project.formations.abstract'),
		description: "",
		period: { from: new Date(1996, 3), to: new Date(1996, 3) },
		links: [],
		skills: getSkills('fmp'),
		type:  get(_)('project.type.db.name')
	},
	{
		slug: get(_)('project.paie.slug'),
		name: get(_)('project.paie.name'),
		logo: Assets.FMP,
		color: '#3633a0',
		abstract: get(_)('project.paie.abstract'),
		description: "",
		period: { from: new Date(1996, 1), to: new Date(1996, 1) },
		links: [],
		skills: getSkills('fmp'),
		type:  get(_)('project.type.db.name')
	},
	{
		slug: get(_)('project.bail.slug'),
		name: get(_)('project.bail.name'),
		logo: Assets.FMP,
		color: '#3633a0',
		abstract: get(_)('project.bail.abstract'),
		description: "",
		period: { from: new Date(1995, 11), to: new Date(1995, 11) },
		links: [],
		skills: getSkills('fmp'),
		type:  get(_)('project.type.db.name')
	},
	/*{
		slug: get(_)('project.fusion.slug'),
		name: get(_)('project.fusion.name'),
		logo: Assets.FoxPro,
		color: 'orange',
		abstract: get(_)('project.fusion.abstract'),
		description: "",
		period: { from: new Date(1995, 7), to: new Date(1995, 9) },
		links: [],
		skills: getSkills('foxpro','fmp'),
		type:  get(_)('project.type.db.name')
	},*/
	{
		slug: get(_)('project.facture.slug'),
		name: get(_)('project.facture.name'),
		logo: Assets.FMP,
		color: '#3633a0',
		abstract: get(_)('project.facture.abstract'),
		description: "",
		period: { from: new Date(1995, 5), to: new Date(1995, 5) },
		links: [],
		skills: getSkills('fmp'),
		type:  get(_)('project.type.db.name')
	},
];

//const title = "Projects";
const title = get(_)('page.projects.title');

const ProjectsData = { title, items };
export default ProjectsData;
