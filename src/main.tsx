import React from "react"
import ReactDOM from "react-dom"
import { HashRouter } from "react-router-dom"
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react"

import "./index.css"
import App from "./App"
import { theme } from "./Theme"

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
