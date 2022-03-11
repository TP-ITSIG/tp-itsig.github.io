import React from "react"
import {
	Flex,
	Box,
	SimpleGrid,
	AspectRatio,
	Spacer,
	Image,
	Text,
	Link,
	Stack,
	Grid,
	GridItem,
	VStack,
	Button,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react"

const CarouselCard = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const data = {
		title: "Google Cloud Firebase",
		preview:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
		image: "../assets/Advanced/FirestoreLogo.svg",
	}

	return (
		<VStack
			w="100%"
			px={{ base: "1em" }}
			_before={{
				content: `''`,
				bgImage: {
					base: "../assets/Advanced/FirestoreLogo.svg",
					lg: "none",
				},
				opacity: "0.3",
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
			<Text
				fontSize={{ base: "2xl" }}
				fontWeight="bold"
				textAlign="center">
				{data.title}
			</Text>
			<Text fontSize={{ base: "1xl" }} fontWeight="regular">
				{data.preview}
			</Text>
			<Button onClick={onOpen}>Learn More</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text fontWeight="bold" mb="1rem">
							You can scroll the content behind the modal
						</Text>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant="ghost">Secondary Action</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</VStack>
	)
}

export default CarouselCard
