import { Box, Text, Image, Stack } from "@chakra-ui/react"
import { useEffect, useLayoutEffect, useState } from "react"

import YearSelect from "../Components/YearSelect"
import YearCard from "../Components/YearCard"
import { useSearchParams } from "react-router-dom"
const Home = () => {
	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const [searchParams, setSearchParams] = useSearchParams()

	const [selectedCourse, setSelectedCourse] = useState("Common")

	useEffect(() => {
		if (selectedCourse !== "Common") {
			setSearchParams(
				{
					course: selectedCourse,
				},
				{
					replace: false,
				},
			)
		} else {
			setSearchParams(new URLSearchParams({}))
		}
	}, [selectedCourse])

	return (
		<Box maxW="1400px" margin="auto">
			<Box
				h="100%"
				display="flex"
				justifyContent="center"
				alignItems="center"
				borderBottomRadius="20px"
				p={4}
				position="relative"
				_before={{
					content: `''`,
					bgImage: { base: "/home-icon.svg", lg: "none" },
					opacity: "0.175",
					bgSize: "contain",
					bgRepeat: "no-repeat",
					bgPosition: "center",
					position: { base: "absolute", lg: "relative" },
					m: 2,
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					zIndex: -1,
				}}>
				<Stack
					direction={{ base: "column", lg: "row" }}
					justify={{ lg: "space-evenly" }}
					mb={1}
					align="center"
					spacing={0}>
					<Stack
						direction="column"
						textAlign={{ base: "center", lg: "left" }}>
						<Text
							fontSize={{
								base: "3xl",
								md: "4xl",
								lg: "4xl",
								xl: "5xl",
							}}
							fontWeight="bold"
							textAlign={{ base: "center", lg: "left" }}
							mb={-3.5}>
							Welcome to the
						</Text>
						<Text
							fontSize={{
								base: "2xl",
								md: "3xl",
								lg: "4xl",
								xl: "5xl",
							}}
							fontWeight="bold"
							color="iit_blue">
							School of Informatics & IT
						</Text>
						<Text
							fontSize={{ base: "md", md: "lg", lg: "xl" }}
							fontWeight="semibold"
							maxW={{ lg: "80ch" }}>
							Hello we are from the{" "}
							<span style={{ color: "hsl(221, 55%, 63%)" }}>
								Diploma in Information Technology!
							</span>
							{`\n`}
						</Text>
						<Text
							fontSize={{ base: "sm", md: "md", lg: "lg" }}
							fontWeight="medium"
							maxW={{ base: "55ch" }}>
							We've put together this website to give you a
							general overview of what to expect for each module
							in your upcoming semesters!
						</Text>
					</Stack>
					<Image
						display={{ base: "none", lg: "block" }}
						src="/home-icon.svg"
						w="30%"
					/>
				</Stack>
			</Box>
			<YearSelect setCourse={setSelectedCourse} />
			<YearCard course={selectedCourse} />
		</Box>
	)
}

export default Home
