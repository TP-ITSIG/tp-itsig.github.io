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
			boxShadow={`0px 4px 6px ${props.bgColor}`}
			_hover={{
				boxShadow: `0px 8px 12px ${props.bgColor}`,
			}}
			transition="box-shadow 0.3s ease-out"
			overflow="hidden">
			<Center bg={props.bgColor} w="auto" minH="60%" maxH="60%">
				<Image py={2} src={props.image} boxSize="125px" />
			</Center>
			<Box my={2} px={{base: 2, lg: 3}}>
				<Text fontSize={{base:"lg", md: "xl", lg: "2xl"}} fontWeight="bold">
					{props.title}
				</Text>
				<Text fontSize={{base:"xs", md: "sm"}} mb={1}>{props.description}</Text>
			</Box>
		</Box>
	)
}

export default SubjectCard
