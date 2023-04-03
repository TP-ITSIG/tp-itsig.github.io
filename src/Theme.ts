import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
	initialColorMode: "light",
	useSystemColorMode: false,
	colors: {
		iit_blue: "hsl(207, 100%, 54%)",
		itsig_blue: "hsl(221, 55%, 63%)",
	},
	fonts: {
		heading: '"Poppins", sans-serif',
		body: '"Poppins", sans-serif',
	},
	components: {
		Button: {
			baseStyle: {
				_focus: {
					boxShadow: "none",
				},
			},
		},
		Text: {
			baseStyle: {
				_hover: {
					cursor: "default",
				},
			},
		},
	},
})
