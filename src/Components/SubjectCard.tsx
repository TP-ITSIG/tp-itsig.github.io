import { Box, Center, Image, Text, useColorMode } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

interface SubjectCardProps {
	title: string
	description: string
	imageLight: string
	imageDark: string
	color: string
	bgColor: string
}

const SubjectCard = (props: SubjectCardProps) => {
	const navigate = useNavigate()
	const { colorMode } = useColorMode()

	return (
		<Box
			bgColor={
				colorMode === "light" ? "hsl(0, 0%, 98%)" : "hsl(222, 24%, 10%)"
			}
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
				<Image
					py={1}
					src={
						colorMode === "light"
							? props.imageLight
							: props.imageDark
					}
					boxSize={{ base: "80%", sm: "60%", lg: "35%" }}
				/>
			</Center>
			<Box my={2} px={{ base: 2, lg: 3 }}>
				<Text
					fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
					fontWeight="bold"
					_hover={{
						cursor: "pointer",
					}}>
					{props.title}
				</Text>
				<Text
					fontSize={{ base: "xs", md: "sm" }}
					mb={4}
					_hover={{
						cursor: "pointer",
					}}>
					{props.description}
				</Text>
			</Box>
		</Box>
	)
}

export default SubjectCard
