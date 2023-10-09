import {
	AspectRatio,
	Button,
	IconButton,
	Image,
	LightMode,
	Tooltip,
} from "@chakra-ui/react"
import React from "react"

interface SoftwareButtonProps {
	iconPath: string
	name: string
	url: string
}

const SoftwareButton = (props: SoftwareButtonProps) => {
	return (
		<Tooltip label={props.name} placement="bottom">
			<a href={props.url} target="_blank">
				<IconButton
					aria-label={`${props.name}-button`}
					isRound
					w="fit-content"
					h="auto"
					colorScheme="whiteAlpha"
					transition="box-shadow 0.3s ease-out"
					boxShadow={"0px 2px 3px hsl(0, 0%, 0%, 16%)"}
					_hover={{ boxShadow: "0px 4px 8px hsl(0, 0%, 0%, 16%)" }}
					_focus={{ boxShadow: "0px 4px 8px hsl(0, 0%, 0%, 16%)" }}>
					<Image
						p={3}
						src={props.iconPath}
						boxSize={{ base: 16, lg: 20 }}
					/>
				</IconButton>
			</a>
		</Tooltip>
	)
}

export default SoftwareButton
