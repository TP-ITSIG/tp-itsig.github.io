import {
	Box,
	Center,
	Flex,
	HStack,
	Icon,
	IconButton,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	position,
	Spacer,
} from "@chakra-ui/react"
import { useState } from "react"
import { IoMenu, IoClose } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

interface NavbarItems {
	pageTitle: string
	pageUrl: string
}

const pages: NavbarItems[] = [
	{
		pageTitle: "Home",
		pageUrl: "/",
	},
	{
		pageTitle: "Resources",
		pageUrl: "/resource",
	},
	{
		pageTitle: "About",
		pageUrl: "/about",
	},
]

const Navbar = () => {
	const navigate = useNavigate()

	return (
		<Box bg="transparent" w="100%" py={{ base: 4 }} px={{ base: 2.5 }}>
			<HStack justifyContent="space-between">
				<Menu preventOverflow matchWidth flip>
					<MenuButton
						as={IconButton}
						isRound
						icon={<IoMenu />}
						aria-label="menu-icon"
						variant="ghost"
						fontSize="2xl"
					/>
					<MenuList>
						{pages.map(page => (
							<MenuItem key={page.pageUrl} onClick={() => {navigate(page.pageUrl)}}>
								{page.pageTitle}
							</MenuItem>
						))}
					</MenuList>
				</Menu>
				<Image src="./assets/itsig.svg" w="4.5em" />
				<Box w="40px" h="40px" />
			</HStack>
		</Box>
	)
}

export default Navbar
