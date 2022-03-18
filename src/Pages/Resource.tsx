import React, { useLayoutEffect } from "react"
import ResourceCard from "../Components/ResourceCard"
import { subjects } from "../Models/Subjects"
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
	VStack,
} from "@chakra-ui/react"
import SoftwareButton from "../Components/SoftwareButton"

const Resource = () => {
	const location = useLocation()
	const pathNameArray = location.pathname.split("/")
	const subjectAbbrev = pathNameArray[pathNameArray.length - 1]
	const subject = subjects.filter(sub => {
		return sub.abbreviation.toUpperCase() == subjectAbbrev.toUpperCase()
	})[0]

	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<Stack direction={"column"} width={"100%"}>
			<Box
				bgColor={subject.color}
				py={8}
				borderBottomRadius="20px"
				mb={5}>
				<Center
					fontWeight="bold"
					fontSize={{ base: 24, md: 36, lg: 42 }}>
					<Text align="center" pb={3.5}>
						{subject.name}
					</Text>
				</Center>
			</Box>
			<Box px={3}>
				<Center>
					<Stack
						width={{ base: "100%", md: "75%" }}
						textAlign="center"
						maxW="75ch"
						paddingBottom={5}
						justify="center">
						<Text
							fontWeight="bold"
							fontSize={{ base: "2xl", lg: "3xl" }}>
							What is{" "}
							<span style={{ color: subject.color }}>
								{subject.name}{" "}
							</span>
							about?
						</Text>
						<Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
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
						base: "1.25px solid black",
						md: "2.25px solid black",
					}}
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
