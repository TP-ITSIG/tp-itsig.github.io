import React from "react"
import {
	Box,
	Center,
	Tooltip,
	IconButton,
	VStack,
	HStack,
	Text,
	Icon,
	Image,
} from "@chakra-ui/react"

const Home = () => {
	return (
		<>
			<Box
				display={{ base: "flex", lg: "none" }}
				alignItems="center"
				justifyContent="center"
				w="100%">
				<VStack pos="absolute" zIndex={0} spacing={0}>
					<Text
						fontSize={{ base: "24px", md: "40px" }}
						fontWeight="bold">
						Welcome to the
					</Text>
					<Text
						fontSize={{ base: "24px", md: "40px" }}
						fontWeight="bold"
						color="#1494FF">
						School of Informatics & IT
					</Text>
					<VStack spacing={4} pt={4}>
						<Text
							px={{ base: "8", md: "24" }}
							fontSize={{ base: "12px", md: "20px" }}
							fontWeight="semibold">
							This website provides resources to give you a
							general overview of what to expect for each module
							so that you might feel better prepared for your
							first semester with us.
							<br />
							<br />
							We hope you will find the information that we
							curated useful!
						</Text>
					</VStack>
				</VStack>
				<Image
					opacity={0.12}
					src="../../assets/home-lightmode-icon.svg"
				/>
			</Box>
		</>
	)
}

export default Home
