import React, { useLayoutEffect } from "react"
import ResourceCard from "../Components/ResourceCard"
import { Subjects } from "../Resources/Subjects"
import { useLocation } from "react-router-dom"
import {
	Box,
	Button,
	Center,
	Divider,
	Flex,
	HStack,
	Icon,
	IconButton,
	Image,
	Stack,
	Text,
	useColorMode,
	VStack,
} from "@chakra-ui/react"
import SoftwareButton from "../Components/SoftwareButton"

const Resource = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const location = useLocation()
	const pathNameArray = location.pathname.split("/")
	const subjectAbbrev = pathNameArray[pathNameArray.length - 1]
	const subject = Subjects.filter(sub => {
		return sub.abbreviation.toUpperCase() == subjectAbbrev.toUpperCase()
	})[0]

	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<Stack direction={"column"} width={"100%"} pt={{ base: 0, md: 4 }}>
			<Box px={3}>
				<Center>
					<Stack
						width={{ base: "100%", md: "75%" }}
						textAlign="center"
						maxW="100ch"
						paddingBottom={5}
						justify="center">
						<Text
							fontWeight="bold"
							fontSize={{ base: "4xl", lg: "5xl" }}>
							What is{" "}
							<span style={{ color: subject.color }}>
								{subject.name}{" "}
							</span>
							about?
						</Text>
						<Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
							{subject.description}
						</Text>
					</Stack>
				</Center>

				<Text
					paddingBottom={3}
					fontWeight="bold"
					textAlign={{ base: "center", md: "left" }}
					fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
					px={{ base: 2, lg: 3 }}
					mb={5}>
					Some resources before you start...
				</Text>
				<Stack
					direction="column"
					gap={{ base: "1.5em", md: "3em" }}
					px={{ base: 2, lg: 3 }}>
					{subject.resources.map((res, index) => (
						<ResourceCard
							resource={res}
							reverse={index % 2 !== 0}
							key={index}
						/>
					))}
				</Stack>
			</Box>
			<br />
			<VStack justifyContent="center">
				<Text
					fontSize={{ base: "md", lg: "xl" }}
					borderBottom={{
						base: "1.25px solid",
						md: "2.25px solid",
					}}
					borderBottomColor={
						colorMode === "light" ? "black" : "white"
					}
					pb={2}
					px={"3.5%"}
					fontWeight="medium"
					mb={1.5}>
					Software
				</Text>
				<HStack spacing={5}>
					{subject.software.length !== 0 ? (
						subject.software.map((software, i) => (
							<SoftwareButton
								key={i}
								name={software.name}
								url={software.url}
								iconPath={software.icon}
							/>
						))
					) : (
						<Text fontSize={{ base: "md", lg: "xl" }}>
							Nothing special needed for this :D
						</Text>
					)}
				</HStack>
			</VStack>
		</Stack>
	)
}

export default Resource
