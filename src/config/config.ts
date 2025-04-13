// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle:
		'Naviporta Wojciech Partyka - Tachografy. Serwis, kalibracja, naprawa i wymiana tachogragfów cyfrowych Miechów.',
	siteDescription:
		'Naviporta Wojciech Partyka - Firma zajmuję się kalibracją, naprawą Tachografów Cyfrowych marek VDO i Stoneridge oraz wymianą Tachografów cyfrowych wyłacznie firmy VDO',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Naviporta logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
