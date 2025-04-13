// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	companyDetails: string[]
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Naviporta',
		aboutText: 'Kalibracja i naprawa tachografów cyfrowych Miechów, Olkusz, Wolbrom, Kraków.',
		companyDetails: [
			'Naviporta Wojciech Partyka',
			'NIP: 6591556151',
			'Przybysławice 60,',
			'32-241 Miechów'
		],
		logo: {
			src: '/logo.svg',
			alt: 'Naviporta logo',
			text: 'Tachografy Naviporta'
		}
	},
	footerColumns: [
		{
			category: 'Usługi',
			subCategories: [
				{
					subCategory: 'Tachografy',
					subCategoryLink: '/services'
				},
				{
					subCategory: 'Serwis',
					subCategoryLink: '/services'
				},
				{
					subCategory: 'Kalibracja',
					subCategoryLink: '/services'
				},
				{
					subCategory: 'Wymiana',
					subCategoryLink: '/services'
				}
			]
		},
		{
			category: 'Kontakt',
			subCategories: [
				{
					subCategory: 'Godziny pracy',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Telefon',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Lokalizacja',
					subCategoryLink: '/contact'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© Naviporta 2025.'
	}
}
