import { Box, Center, Image, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

interface SubjectCardProps {
	title: string
	description: string
	image: string
	color: string
	bgColor: string
}

const SubjectCard = (props: SubjectCardProps) => {
	const navigate = useNavigate()

	return (
		<Box
			borderColor={props.color}
			borderWidth={3.5}
			borderRadius={15}
			boxShadow={`0px 2px 3px ${props.bgColor}`}
			_hover={{
				boxShadow: `0px 8px 12px ${props.bgColor}`,
				cursor: "pointer",
			}}
			transition="box-shadow 0.3s ease-out"
			overflow="hidden"
			onClick={() => {
				navigate(`/resource/${props.title}`)
			}}>
			<Center bg={props.bgColor} w="auto" minH="60%" maxH="60%">
				<Image py={2} src={props.image} boxSize="125px" />
			</Center>
			<Box my={2} px={{ base: 2, lg: 3 }}>
				<Text
					fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
					fontWeight="bold">
					{props.title}
				</Text>
				<Text fontSize={{ base: "xs", md: "sm" }} mb={4}>
					{props.description}
				</Text>
			</Box>
		</Box>
	)
}

export default SubjectCard
