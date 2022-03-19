import React, { useLayoutEffect, useState } from "react"
import {
	Box,
	VStack,
	Stack,
	Text,
	Image,
	Link,
	Center,
	Skeleton,
	useColorMode,
} from "@chakra-ui/react"

const About = () => {
	const { colorMode } = useColorMode()

	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				bgColor={
					colorMode === "light"
						? "hsl(0, 0%, 0%, 0.05)"
						: "hsl(0, 0%, 100%, 0.05)"
				}
				borderBottomRadius="20px"
				p={5}
				_before={{
					content: `''`,
					bgImage: { base: "/itsig-icon.svg", lg: "none" },
					opacity: "0.175",
					bgSize: "contain",
					bgRepeat: "no-repeat",
					bgPosition: "center",
					position: { base: "absolute", lg: "relative" },
					m: 2,
					top: 0,
					left: 0,
					bottom: 2,
					right: 0,
					zIndex: -1,
				}}
				position="relative">
				<Stack
					direction={{ base: "column", lg: "row" }}
					justify={{ lg: "space-around" }}
					mb={3.5}
					align="center"
					spacing={5}>
					<Stack
						direction="column"
						textAlign={{ base: "center", lg: "left" }}
						my={{ base: "10%", lg: "0" }}>
						<Box>
							<Text
								fontSize={{
									base: "2xl",
									md: "4xl",
									lg: "5xl",
									xl: "6xl",
								}}
								fontWeight="bold"
								textAlign={{ base: "center", lg: "left" }}>
								Hello! We’re from the
							</Text>
							<Text
								fontSize={{
									base: "2xl",
									md: "3xl",
									lg: "4xl",
									xl: "5xl",
								}}
								maxW="25ch"
								w="fit-content"
								fontWeight="bold"
								color="itsig_blue">
								Information Technology Student Interest Group
							</Text>
						</Box>
					</Stack>

					<Image
						display={{ base: "none", lg: "block" }}
						src="/itsig-icon.svg"
						w="30%"
					/>
				</Stack>
			</Box>
			<Center>
				<VStack
					spacing={6}
					justify={["center", "center"]}
					mt={{ base: "5", lg: "10" }}
					px={10}
					maxW={{ base: "75ch", lg: "90ch" }}>
					<Box>
						<Text
							fontSize={{ base: "2xl", lg: "4xl" }}
							mb={2}
							fontWeight="bold">
							What is this website about?
						</Text>
						<Text mb={3} fontSize={{ base: "md", lg: "xl" }}>
							We know the transition from secondary school or ITE
							to Poly can come as a big shock to you in terms of
							what we learn, so we made this website for
							<span style={{ color: "hsl(207, 100%, 54%)" }}>
								{" "}
								IIT freshmen{" "}
							</span>{" "}
							to provide resources for you to view in your free
							time before school starts so that you have a clearer
							idea of what to expect in your first semester with
							us.
						</Text>

						<Link
							href="https://www.privacypolicies.com/live/0f15cdbd-2f76-49ec-8046-188e8d6695bd"
							isExternal
							color="iit_blue"
							fontSize={{ base: "sm", lg: "lg" }}>
							Click here to view our Privacy Policy
						</Link>
					</Box>

					<Box>
						<Text
							fontSize={{ base: "2xl", lg: "4xl" }}
							mb={2}
							fontWeight="bold">
							Who are we?
						</Text>

						<Text fontSize={{ base: "md", lg: "xl" }} pt={-4}>
							We are a CCA consisting of students from the{" "}
							<span
								style={{
									color: "hsl(221, 55%, 63%)",
									fontWeight: "600",
								}}>
								{" "}
								Diploma in Information Technology
							</span>
							. We plan events that improve the student life in
							our diploma. Such events include technical workshops
							to introduce new technology, coming up with diploma
							windbreakers, starting software projects like this
							website, and many more. Follow us on{" "}
							<Link
								href="https://www.instagram.com/itsigtp/"
								isExternal
								style={{
									fontWeight: "600",
									background:
										"linear-gradient(to bottom right, #833ab4, #fd1d1d, #fcb045)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
								}}>
								Instagram
							</Link>{" "}
							for more updates and we hope you learn a thing or
							two from our events! :D
						</Text>
					</Box>
				</VStack>
			</Center>
		</>
	)
}

export default About
