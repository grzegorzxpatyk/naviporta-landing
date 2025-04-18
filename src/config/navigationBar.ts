// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	heading: string
	subheading: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'Naviporta Wojciech Partyka - Tachografy',
		heading: 'Tachografy',
		subheading: 'Naviporta'
	},
	navItems: [
		{ name: 'Strona główna', link: '/' },
		{ name: 'Usługi', link: '/services' },
		{ name: 'Kontakt', link: '/contact' }
	],
	navActions: []
}
