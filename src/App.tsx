import { Box } from "@chakra-ui/react"
import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Resource from "./Pages/Resource"
import ReactGA from "react-ga4"

const App = () => {
	const location = useLocation()
	ReactGA.initialize("G-RRCEHPXBET")
	

	useEffect(() => {
		console.info(`
██╗████████╗███████╗██╗ ██████╗ 
██║╚══██╔══╝██╔════╝██║██╔════╝ 
██║   ██║   ███████╗██║██║  ███╗
██║   ██║   ╚════██║██║██║   ██║
██║   ██║   ███████║██║╚██████╔╝
╚═╝   ╚═╝   ╚══════╝╚═╝ ╚═════╝ 
                                
WoAh what are you doing in the console?

Well since your already here, We're actually recruiting Dip IT students into our CCA!

Just DM "supercalifragilisticexpialidocious" to our Instagram if you're interested in joining us!
`)
	}, [location])

	return (
		<Box minH={"100vh"} transition="all normal">
			<Box maxW="1500px" margin="auto" mb={10}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/resource/:subject" element={<Resource />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</Box>
			<Footer />
		</Box>
	)
}

export default App
