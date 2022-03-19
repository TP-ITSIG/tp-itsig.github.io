import React from "react"
import { FaInstagram } from "react-icons/fa"
import { SiGithub } from "react-icons/si"
import {
	Box,
	Center,
	Tooltip,
	IconButton,
	VStack,
	HStack,
	Text,
	Icon,
	Image,
	Stack,
	useColorMode,
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const Footer = () => {
	const { colorMode } = useColorMode()

	const navigate = useNavigate()

	return (
		<Box
			bgColor={
				colorMode === "light"
					? "hsl(0, 0%, 0%, 0.05)"
					: "hsl(0, 0%, 100%, 0.025)"
			}
			mt="auto"
			p={{ base: 1.5, md: 2 }}
			sx={{ w: "100%" }}>
			<Center>
				<VStack justifyItems="center">
					<HStack spacing={1}>
						<Text fontSize={{ base: "sm", md: "md" }}>
							Made with love
						</Text>
						{/* <Text
							fontSize={{ base: "sm", md: "md" }}
							color="hsl(207, 100%, 66%)">
							ITSIG
						</Text> */}
					</HStack>
					<HStack spacing={5}>
						<Tooltip
							label="ITSIG Instagram"
							aria-label="ITSIG Instagram"
							placement="left">
							<IconButton
								isRound
								bg="transparent"
								aria-label="ITSIG Instagram"
								icon={<FaInstagram />}
								fontSize="3xl"
								onClick={() => {
									window.open(
										"https://www.instagram.com/itsigtp/",
									)
								}}
							/>
						</Tooltip>
						<Image
							src="/itsig-footer.svg"
							w={{ base: "4em", md: "4.5em" }}
							h="auto"
							_hover={{
								cursor: "pointer",
							}}
							onClick={() => {
								navigate("/about")
							}}
						/>
						<Tooltip
							label="ITSIG GitHub"
							aria-label="ITSIG GitHub"
							placement="right">
							<IconButton
								isRound
								bg="transparent"
								aria-label="ITSIG GitHub"
								icon={<SiGithub />}
								fontSize="3xl"
								onClick={() => {
									window.open(
										"https://www.github.com/tp-itsig/",
									)
								}}
							/>
						</Tooltip>
					</HStack>
				</VStack>
			</Center>
		</Box>
	)
}

export default Footer
