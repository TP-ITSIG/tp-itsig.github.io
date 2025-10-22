import { Box, Heading, HStack, Link, Stack, Text, useColorMode, VStack, Center, Container } from "@chakra-ui/react"
import { useLayoutEffect } from "react"
import { Question } from "../Interfaces/Question"
import { motion } from "framer-motion"

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
		answer: (
			<>
				Check us out on our{" "}
				<Link 
					href="https://www.instagram.com/tp.itsig/?hl=en" 
					color="blue.400" 
					isExternal
				>
					Instagram
				</Link>{" "}
				for upcoming events, and sometimes we'll send the announcements in your cohort MSTeams chat :)
			</>
		)
	},
	{
		question: "Where can we find the modules we'll be taking this/next semester?",
		answer: (
			<>
				You can find your respective diploma modules{" "}
				<Link 
					href="https://tp-itsig.github.io/#/" 
					color="blue.400" 
					isExternal
				>
					here
				</Link>
				.
			</>
		)
	}
]
const MotionBox = motion(Box)

const FAQ = () => {
  const { colorMode } = useColorMode()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const panelBg =
    colorMode === "light"
      ? "hsl(0, 0%, 0%, 0.05)"
      : "hsl(0, 0%, 80%, 0.05)"

  return (
    <Stack direction="column" width="100%">
		<Box p={{ base: 4, md: 8 }}>
			<Center>
				<Stack
					width={{ base: "100%", md: "75%" }}
					textAlign="center"
					maxW="100ch"
					pb={5}
					justify="center"
				>
					<Text
					fontSize={{
						base: "3xl",
						md: "4xl",
						lg: "4xl",
						xl: "5xl"
					}}
					fontWeight="bold"
					>
					Frequently Asked Questions
					</Text>
					<Text
					fontSize={{ base: "sm", md: "md", lg: "lg" }}
					lineHeight={{ base: "1.6", md: "1.8" }}
					textAlign="justify"
					px={{ base: 2, md: 0 }}
					>
					We recognise that you might have questions about your studies at
					Temasek Polytechnic, so we've put together a list of frequently
					asked questions. If you don't see your question listed, no
					problem! We've included an{" "}
					<span style={{ color: "hsl(221, 55%, 63%)" }}>
						Ask Me Anything
					</span>{" "}
					form where your seniors will provide answers every week on our{" "}
					<Link
						href="https://www.instagram.com/tp.itsig/?hl=en"
						color="hsl(221, 55%, 63%)"
						isExternal
					>
						Instagram.
					</Link>{" "}
					You can also find past questions in the highlights section. We
					hope you will find the questions that we've answered useful!
					</Text>
				</Stack>
			</Center>
		</Box>
		<Box px={{ base: 4, sm: 6, md: 8, lg: 12 }} w="100%">
			<Center w="100%">
				<Stack
					direction={{ base: "column", md: "row" }}
					spacing={{ base: 8, md: 8 }}
					align="stretch"
					w={{ base: "100%", md: "90%", lg: "80%" }} 
					maxW="6xl" 
				>
					<MotionBox
					flex={1}
					p={6}
					borderRadius={{ base: "16px", lg: "20px" }}
					bgColor={panelBg}
					display="flex"
					flexDirection="column"
					justifyContent="flex-start"
					minH={{ base: "auto", md: "500px" }}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					>
						<Heading size="md" mb={4}>
							Submit Your Question
						</Heading>
						<Box
							flex="1"
							overflow="hidden"
							borderRadius={{ base: "16px", lg: "20px" }}
						>
							<Box
							as="iframe"
							src="https://forms.office.com/r/cbHMt89M5d"
							width="100%"
							height="500px"
							style={{ border: "none", borderRadius: "inherit" }}
							/>
						</Box>
					</MotionBox>
					<MotionBox
					flex={1}
					p={6}
					borderRadius={{ base: "16px", lg: "20px" }}
					bgColor={panelBg}
					minH={{ base: "auto", md: "500px" }}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					>
						<VStack spacing={6} align="stretch">
							<Heading size="md">Frequently Asked Questions</Heading>
							{questions.map((q, index) => (
							<Stack key={index} spacing={2}>
								<Heading size="sm">{q.question}</Heading>
								<Text>{q.answer}</Text>
							</Stack>
							))}
						</VStack>
					</MotionBox>
				</Stack>
			</Center>
		</Box>
    </Stack>
  )
}

export default FAQ