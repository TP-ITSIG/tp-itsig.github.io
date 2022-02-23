import React from "react"
import { Box, VStack, HStack, Text, Image } from "@chakra-ui/react"

const About = () => {
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
						Hello! We're from the
					</Text>
					<Text
						fontSize={{ base: "1.5em", md: "2.5em" }}
						fontWeight="bold"
						textAlign="center"
						color="itsig_blue">
						Information Technology Student Interest Group
					</Text>
				</VStack>
				<Image
					src="../../assets/itsig-icon.svg"
					opacity={0.08}
					w={{ base: "70%", md: "60%" }}
					h={{ base: "70%", md: "60%" }}
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
						<Text fontSize={{ base: "4em" }} fontWeight="bold">
							Hello! We're from the
						</Text>
						<Text
							fontSize={{ base: "4em" }}
							fontWeight="bold"
							color="itsig_blue">
							Information Technology Student Interest Group
						</Text>
					</VStack>
					<Image src="../../assets/itsig-icon.svg" w="60%" h="60%" />
				</HStack>
			</Box>
		</>
	)
}

export default About
