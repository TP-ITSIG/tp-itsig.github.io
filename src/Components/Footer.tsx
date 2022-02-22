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
} from "@chakra-ui/react"

const Footer = () => {
	return (
		<Box
			bg="rgba(0, 0, 0, 0.06)"
			p={2}
			sx={{ w: "100%", position: "absolute", bottom: 0 }}>
			<Center>
				<VStack spacing={2}>
					<HStack spacing={1}>
						<Text>Made with love, by</Text>
						<Text color="hsl(207, 100%, 66%)">ITSIG</Text>
					</HStack>
					<HStack>
						<Tooltip
							label="ITSIG Instagram"
							aria-label="ITSIG Instagram"
							placement="left">
							<IconButton
								isRound
								aria-label="ITSIG Instagram"
								icon={<FaInstagram />}
								fontSize="30px"
								onClick={() => {
									window.open(
										"https://www.instagram.com/itsigtp/",
									)
								}}
							/>
						</Tooltip>
						<Tooltip
							label="ITSIG GitHub"
							aria-label="ITSIG GitHub"
							placement="right">
							<IconButton
								isRound
								aria-label="ITSIG GitHub"
								icon={<SiGithub />}
								fontSize="30px"
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
