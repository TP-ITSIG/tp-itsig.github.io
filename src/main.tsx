import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react"
import "./index.css"
import App from "./App"

const theme = extendTheme({
	initialColorMode: "light",
	useSystemColorMode: false,
	colors: {
		iit_blue: "hsl(207, 100%, 54%)",
		itsig_blue: "hsl(207, 87%, 30%)",
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
	},
})

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<ColorModeScript
					initialColorMode={theme.config.initialColorMode}
				/>
				<App />
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root"),
)
