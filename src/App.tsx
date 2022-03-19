import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Resource from "./Pages/Resource"

const App = () => {
	return (
		<Box minH={"100vh"}  transition="all normal">
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
