import React from "react"
import ReactDOM from "react-dom"
import { HashRouter } from "react-router-dom"
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react"

import "./index.css"
import App from "./App"

const theme = extendTheme({
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



ReactDOM.render(
	<React.StrictMode>
		<HashRouter basename="/">
			<ChakraProvider theme={theme}>
				<ColorModeScript
					initialColorMode={theme.config.initialColorMode}
				/>
				<App />
			</ChakraProvider>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById("root"),
)
