import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react"
import { repeat } from "lodash"
import React from "react"
import SubjectCard from "../Components/SubjectCard"
import { subjects } from "../Models/Subjects"

const Home = () => {
	return (
		<>
			<div>Home</div>
			<SimpleGrid columns={{base: 2, sm: 2, md: 3}} gap={5}>
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
		</>
	)
}

export default Home
