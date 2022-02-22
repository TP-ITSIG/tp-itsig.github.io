import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import "./index.css"
import App from "./App"

const theme = extendTheme({
	fonts: {
		heading: '"Poppins", sans-serif',
		body: '"Poppins", sans-serif',
	},
})

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root"),
)
