import React from "react"

import {
	Box,
	SimpleGrid,
	Text,
	Image,
	Stack,
	Tag,
	useColorMode,
	Button,
	Center,
	HStack,
	VStack,
	Icon,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Tooltip,
} from "@chakra-ui/react"

import Resources from "../Resources/Resources"
import SubjectCard from "./SubjectCard"
import { MdOutlineUpdate } from "react-icons/md"

interface YearCardProps {
	course: string
}

const YearCard = (props: YearCardProps) => {
	const { colorMode } = useColorMode()

	const content = Resources.find(resource => resource.course === props.course)

	return content === undefined ? (
		<></>
	) : (
		<Box
			bgColor={
				colorMode === "light"
					? "hsl(0, 0%, 0%, 0.05)"
					: "hsl(0, 0%, 80%, 0.05)"
			}
			maxW="100%"
			borderRadius={{ base: "16px", lg: "20px" }}
			my={4}
			mx={4}
			px={{ base: "2", md: "4" }}
			py={{ base: "2", md: "4" }}>
			<Text
				fontSize={{
					base: "2xl",
					md: "4xl",
					lg: "4xl",
					xl: "4xl",
				}}
				fontWeight="bold"
				textAlign={{ base: "center", lg: "left" }}>
				{content?.name}
			</Text>
			<Stack
				justifyContent="flex-start"
				direction={{ base: "column", lg: "row" }}>
				<Stack
					maxW={{ base: "100%", lg: "35%" }}
					direction={{ base: "row", lg: "column" }}
					justifyContent="start">
					<VStack align="start">
						<Text
							fontSize={{
								base: "md",
								md: "2xl",
								lg: "3xl",
								xl: "3xl",
							}}
							fontWeight="medium">
							{content.description}
						</Text>
						<Text
							fontSize={{
								base: "sm",
								md: "lg",
								lg: "xl",
								xl: "xl",
							}}
							fontWeight="regular">
							📝 Content curated by{" "}
							<span>
								<a href={content.creatorLink} target="_blank">
									<Tooltip
										hasArrow
										label={content.creatorHelp}
										aria-label={content.creatorHelp}>
										<Text
											_hover={{
												cursor: "pointer",
											}}
											textDecoration="underline"
											fontSize={{
												base: "sm",
												md: "lg",
												lg: "xl",
												xl: "xl",
											}}
											fontWeight="medium">
											{content.creator}
										</Text>
									</Tooltip>
								</a>
							</span>
						</Text>

						<Text
							fontSize={{
								base: "sm",
								md: "lg",
								lg: "xl",
								xl: "xl",
							}}
							fontWeight="regular">
							🕐 Last updated in{" "}
							<span>
								<Text
									fontSize={{
										base: "sm",
										md: "lg",
										lg: "xl",
										xl: "xl",
									}}
									fontWeight="medium">
									{content.updated}
								</Text>
							</span>
						</Text>
					</VStack>
					<Image
						src={content.image}
						w={{ base: "8em", lg: "20em" }}></Image>
				</Stack>

				<VStack w="100%">
					<Accordion
						defaultIndex={
							new Date().getMonth() + 1 >= 3 &&
							new Date().getMonth() + 1 <= 8
								? 0
								: 1
						}
						allowMultiple
						allowToggle
						w="100%">
						{content.semesters.map((semester, index) => (
							<AccordionItem
								mb={4}
								bgColor={
									colorMode === "light" ? "white" : "gray.800"
								}
								border="none"
								borderRadius="16px"
								key={index}>
								<AccordionButton justifyContent="space-between">
									<Text
										fontSize={{
											base: "sm",
											md: "lg",
											lg: "xl",
											xl: "xl",
										}}
										fontWeight="regular">
										{semester.name}
									</Text>
									<AccordionIcon />
								</AccordionButton>
								<AccordionPanel>
									{semester.subjects == undefined ? (
										<Center>
											<Text
												fontSize={{
													base: "sm",
													md: "lg",
													lg: "xl",
													xl: "xl",
												}}>
												Check back here in a week 👀
											</Text>
										</Center>
									) : (
										<SimpleGrid
											columns={{ base: 2, md: 3 }}
											gap={4}
											rowGap={4}>
											{semester.subjects?.map(subject => (
												<SubjectCard
													key={subject.abbreviation.toLowerCase()}
													title={subject.abbreviation}
													description={
														subject.tagline
													}
													imageLight={
														subject.imageLight
													}
													imageDark={
														subject.imageDark
													}
													color={subject.color}
													bgColor={subject.bgColor}
												/>
											))}
										</SimpleGrid>
									)}
								</AccordionPanel>
							</AccordionItem>
						))}
					</Accordion>
				</VStack>
			</Stack>
		</Box>
	)
}

export default YearCard
