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
					w={{ base: "50%", md: "60%" }}
					h={{ base: "50%", md: "60%" }}
					pos="absolute"
					zIndex={0}
					pt={4}
				/>
			</Box>
			<Box display={{ base: "none", lg: "block" }} w="100%" pt={-5}>
				<HStack>
					<VStack
						display="flex"
						alignItems="left"
						justifyContent="left"
						pl={20}>
						<Text
							fontSize={{ lg: "2.5em", xl: "3.5em" }}
							fontWeight="bold">
							Hello! We're from the
						</Text>
						<Text
							fontSize={{ lg: "2.5em", xl: "3.5em" }}
							fontWeight="bold"
							color="itsig_blue">
							Information Technology Student Interest Group
						</Text>
					</VStack>
					<Image src="../../assets/itsig-icon.svg" w="30%" h="30%" />
				</HStack>
			</Box>
			<VStack
				spacing={4}
				display={{ base: "flex" }}
				align="left"
				justify="left"
				pt={{ base: "20", md: "20", lg: "12" }}
				px={{ base: "4", lg: "64" }}
				pb={24}>
				<Text
					fontSize={{ base: "1.5em", lg: "2.5em" }}
					fontWeight="bold">
					What is this website about?
				</Text>
				<Text fontSize={{ base: "1em", lg: "1.25em" }}>
					We know the transition from secondary school or ITE to Poly
					can come as a big shock to you in terms of what we learn, so
					we made this website for
					<span style={{ color: "hsl(207, 100%, 54%)" }}> IIT </span>
					freshmen to provide resources for you to view in your free
					time before school starts so that you have a clearer idea of
					what to expect in your first semester with us.
				</Text>

				<Text
					textAlign="left"
					fontSize={{ base: "1.5em", lg: "2.5em" }}
					fontWeight="bold">
					Who are we?
				</Text>
				<Text fontSize={{ base: "1em", lg: "1.25em" }} pt={-4}>
					We are a CCA consisting of students from the Diploma in
					<span style={{ color: "hsl(207, 87%, 30%)" }}>
						{" "}
						Information Technology
					</span>
					. We plan events that improve the student life in our
					diploma. Such events include technical workshops to
					introduce new technology, coming up with diploma
					windbreakers, starting software projects like this website,
					and many more. Follow us on
					<span style={{ color: "hsl(331, 70%, 49%)" }}>
						{" "}
						Instagram{" "}
					</span>
					for more updates and we hope you learn a thing or two from
					our events! :)
				</Text>
			</VStack>
		</>
	)
}

export default About
