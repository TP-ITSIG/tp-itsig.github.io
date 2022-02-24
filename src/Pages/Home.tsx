import {
	Box,
	Grid,
	GridItem,
	SimpleGrid,
	VStack,
	HStack,
	Text,
	Image,
	Stack,
	Center,
	Spacer,
} from "@chakra-ui/react"
import { repeat } from "lodash"
import React from "react"
import SubjectCard from "../Components/SubjectCard"
import { subjects } from "../Models/Subjects"

const Home = () => {
	return (
		<>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				bgColor="hsl(0, 0%, 0%, 0.05)"
				h={{ base: "40%" }}
				p={5}
				_before={{
					content: `''`,
					bgImage: { base: "assets/home-icon.svg", lg: "none" },
					opacity: "0.2",
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
				}}
				position="relative">
				<Stack
					direction={{ base: "column", lg: "row" }}
					justify={{ lg: "space-around" }}
					align="center"
					spacing={0}>
					<Stack
						direction="column"
						textAlign={{ base: "center", lg: "left" }}>
						<Box>
							<Text
								fontSize={{
									base: "3xl",
									md: "4xl",
									lg: "4xl",
									xl: "5xl",
								}}
								fontWeight="bold"
								textAlign={{ base: "center", lg: "left" }}>
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
						</Box>
						<Text
							fontSize={{ base: "sm", md: "md", lg: "lg" }}
							fontWeight="semibold"
							maxW={{ lg: "55ch" }}>
							This website provides resources to give you a
							general overview of what to expect for each module
							so that you might feel better prepared for your
							first semester with us.
							<br />
							<br />
							We hope you will find the information that we
							curated useful!
						</Text>
					</Stack>
					<Image
						display={{ base: "none", lg: "block" }}
						src="assets/home-icon.svg"
						w="35%"
					/>
				</Stack>
			</Box>

			<Stack direction={{base: "column", lg: "row"}} p={4} mt={{base: 2, lg:10}}>
				<Stack direction="column" spacing={0} mb={2.5}>
					<Text fontWeight="bold" fontSize={{base:"2xl", md: "3xl", lg:"4xl", xl:"5xl"}}>
						Year 1
					</Text>
					<Text fontWeight="semibold" fontSize={{base:"xl", md: "2xl", lg: "3xl", xl:"4xl"}}>
						Semester 1 Resources
					</Text>
				</Stack>
				
				<SimpleGrid columns={{ base: 2, md: 3 }} gap={5} rowGap={7}>
					{subjects.map(subject => (
						<SubjectCard
							key={subject.abbreviation.toLowerCase()}
							title={subject.abbreviation}
							description={subject.tagline}
							image={subject.image}
							color={subject.color}
							bgColor={subject.bgColor}
						/>
					))}
				</SimpleGrid>
			</Stack>
		</>
	)
}

export default Home
