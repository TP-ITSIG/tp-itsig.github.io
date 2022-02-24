import React from "react"
import { Box, VStack, HStack, Text, Image } from "@chakra-ui/react"

const Home = () => {
	return (
		<>
			<Box
				display={{ base: "flex", lg: "none" }}
				alignItems="center"
				justifyContent="center"
				w="100%"
				pt={{ base: "4", md: "16" }}>
				<VStack spacing={0}>
					<Text
						fontSize={{ base: "1.5em", md: "2.5em" }}
						fontWeight="bold">
						Welcome to the
					</Text>
					<Text
						fontSize={{ base: "1.5em", md: "2.5em" }}
						fontWeight="bold"
						color="iit_blue">
						School of Informatics & IT
					</Text>
					<Text
						fontSize={{ base: "0.75em", md: "1.25em" }}
						fontWeight="semibold"
						pt={2}
						px={{ base: "8", md: "24" }}>
						This website provides resources to give you a general
						overview of what to expect for each module so that you
						might feel better prepared for your first semester with
						us.
						<br />
						<br />
						We hope you will find the information that we curated
						useful!
					</Text>
				</VStack>
				<Image
					src="../../assets/home-icon.svg"
					opacity={0.12}
					pos="absolute"
					zIndex={0}
					pt={4}
				/>
			</Box>
			<Box display={{ base: "none", lg: "block" }} w="100%" pt={-5}>
				<HStack>
					<VStack
						spacing={-5}
						display="flex"
						alignItems="left"
						justifyContent="left">
						<Text fontSize={{ base: "3.125em" }} fontWeight="bold">
							Welcome to the
						</Text>
						<Text
							fontSize={{ base: "3.125em" }}
							fontWeight="bold"
							color="iit_blue">
							School of Informatics & IT
						</Text>
						<Text
							fontSize={{ base: "0.75em", md: "1.25em" }}
							pt={8}>
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
					<Image
						src="../../assets/home-icon.svg"
						w="90%"
						h="90%"
						ml={24}
					/>
				</HStack>
			</Box>
		</>
	)
}

export default Home
