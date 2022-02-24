import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Resource from "./Pages/Resource"

const App = () => {
	return (
		<Box minH={"100vh"}>
			<Box maxW="1400px" margin="auto" px={{ base: 2, lg: 4 }}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/resource" element={<Resource />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</Box>
			<Footer />
		</Box>
	)
}

export default App
