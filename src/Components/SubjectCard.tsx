import { Box, Center, Image, Text } from "@chakra-ui/react"
import React from "react"

interface SubjectCardProps {
	title: string
	description: string
	image: string
	color: string
	bgColor: string
}

const SubjectCard = (props: SubjectCardProps) => {
	return (
		<Box
			borderColor={props.color}
			borderWidth={3.5}
			borderRadius={15}
			overflow="hidden"
			
			>
			<Center bg={props.bgColor} w="auto" minH="60%" maxH="60%">
				<Image py={2} src={props.image} boxSize="65%" />
			</Center>
			<Box my={2} px={2} minH="50%" >
				<Text fontSize="lg" fontWeight="bold">
					{props.title}
				</Text>
				<Text fontSize="xs">{props.description}</Text>
			</Box>
		</Box>
	)
}

export default SubjectCard
