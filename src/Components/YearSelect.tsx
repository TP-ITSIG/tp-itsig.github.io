import React, { useEffect, useState } from "react"

import {
	Box,
	SimpleGrid,
	Text,
	Image,
	Stack,
	Tag,
	useColorMode,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	useBreakpointValue,
	Button,
	Center,
} from "@chakra-ui/react"

const selectedTabSx = {
	borderColor: "itsig_blue",
	bgColor: "itsig_blue",
}

const activeTabSx = {
	bg: "itsig_blue",
	borderColor: "itsig_blue",
}

const hoverTabSx = {
	bg: "itsig_blue",
	borderColor: "itsig_blue",
}

const tabSx = {
	w: "100%",
	my: 0,
	borderRadius: 8,
	borderWidth: 2,
	borderColor: "itsig_blue",
}

const courses = [
	{
		name: "IT",
		value: "IT",
	},
	{
		name: "AAI",
		value: "AAI",
	},
	{
		name: "BDA",
		value: "BDA",
	},
	{
		name: "CDF",
		value: "CDF",
	},
	{
		name: "IGD/GDD",
		value: "IGD",
	},
]

interface YearSelectProps {
	setCourse: (course: string) => void
}

const YearSelect = (props: YearSelectProps) => {
	const [selectedCourse, setSelectedCourse] = useState("Common")
	const [selectedYear2, setSelectedYear2] = useState("IT")
	const { colorMode } = useColorMode()

	useEffect(() => {
		props.setCourse(selectedCourse)
	}, [selectedCourse])

	return (
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
			pt={{ base: "2", md: "4" }}>
			<Tabs
				variant="unstyled"
				size={useBreakpointValue({ base: "sm", md: "md" })}
				onChange={index => {
					if (index === 0) {
						setSelectedCourse("Common")
					} else {
						setSelectedCourse(selectedYear2)
					}
				}}>
				<TabList justifyContent="space-evenly" gap={2}>
					<Tab
						{...tabSx}
						color={colorMode === "light" ? "black" : "white"}
						fontWeight="semibold"
						_selected={selectedTabSx}
						_hover={hoverTabSx}
						_active={activeTabSx}>
						<Text
							fontSize={{
								base: "md",
								md: "xl",
							}}>
							Year 1
						</Text>{" "}
					</Tab>
					<Tab
						{...tabSx}
						color={colorMode === "light" ? "black" : "white"}
						fontWeight="semibold"
						_selected={selectedTabSx}
						_hover={hoverTabSx}
						_active={activeTabSx}>
						<Text
							fontSize={{
								base: "md",
								md: "xl",
							}}>
							Year 2
						</Text>
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel
						px={{ base: "2", md: "4" }}
						py={{ base: "2", md: "4" }}>
						<Center>
							{" "}
							<Text
								fontSize={{
									base: "md",
									md: "xl",
								}}>
								Common foundation year taken by all courses!
							</Text>
						</Center>
					</TabPanel>
					<TabPanel
						px={{ base: "2", md: "4" }}
						py={{ base: "2", md: "4" }}>
						<Tabs
							variant="unstyled"
							size={useBreakpointValue({
								base: "sm",
								md: "md",
							})}
							onChange={index => {
								setSelectedYear2(courses[index].value)
								setSelectedCourse(courses[index].value)
							}}>
							<TabList justifyContent="space-evenly">
								{courses.map((course, index) => (
									<Tab
										_hover={{
											textDecoration: "underline",
											cursor: "pointer",
										}}
										_selected={{
											textDecoration: "underline",
											fontWeight: "semibold",
										}}
										key={index}>
										<Text
											_hover={{
												cursor: "pointer",
											}}
											fontSize={{
												base: "sm",
												md: "xl",
											}}>
											{course.name}
										</Text>
									</Tab>
								))}
							</TabList>
						</Tabs>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	)
}

export default YearSelect
