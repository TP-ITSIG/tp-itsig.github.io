import { Box, Heading, HStack, Stack, Text, useColorMode, VStack } from "@chakra-ui/react"
import { useLayoutEffect } from "react"
import { Question } from "../Interfaces/Question"

const questions: Question[] = [
	{
		question: "What is ITSIG about?",
		answer: "We are the Information Technology Student Interest Group, and we plan workshops for IIT students. We also manage the ITSIG Freshman Website (the one you're viewing on)! We also plan other fun events like KNIT Exchange, Hackathons, and Carnivals! "
	},
	{
		question: "Why join the Diploma of IT?",
		answer: "If you want to learn how to make websites & mobile apps, ITO is the perfect diploma for you! You get to learn how to build an app, and also integrate different disciplines (e.g Machine Learning) into them.",
	},
	{
		question: "How do I join ITSIG events?",
		answer: "Check us out on our Instagram (link to Instagram: https://www.instagram.com/tp.itsig/?hl=en) for upcoming events, and sometimes we'll send the announcements in your cohort MSTeams chat :)"
	}
]

const FAQ = () => {
	const { colorMode } = useColorMode()

	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Box maxW="1400px" margin="auto" p={5}>
				<HStack>
					<Box flex={1}>
						<Heading 
							size="md"
							mb={4}>Submit Your Question</Heading>
						<Box 
							as="iframe"
							src="https://forms.office.com/r/cbHMt89M5d"
							width="100%"
							height="100%"
							minH="500px"
							border="1px solid"
							borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
							borderRadius="md"
						/>
					</Box>
					<Box 
						flex={1}
						bgColor={
							colorMode === "light"
								? "hsl(0, 0%, 0%, 0.05)"
								: "hsl(0, 0%, 80%, 0.05)"
						}
					>
						<VStack spacing={6} p={5} align="stretch">
							<Heading size="md" mb={4}>Frequently Asked Questions</Heading>
							{questions.map((q, index) => (
								<Stack key={index} spacing={2}>
									<Heading size="sm">{q.question}</Heading>
									<Text>{q.answer}</Text>
								</Stack>
							))}
						</VStack>
					</Box>
				</HStack>
			</Box>
			
		</>
	)
}

export default FAQ