import {
	Box,
	Button,
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
	useColorMode,
} from "@chakra-ui/react"
import { useEffect, useLayoutEffect, useState } from "react"
import { IoMenu, IoSunny, IoMoon } from "react-icons/io5"
import { useNavigate, useLocation } from "react-router-dom"
import { subjects } from "../Models/Subjects"

interface NavbarItems {
	pageTitle: string
	pageUrl: string
}

const pages: NavbarItems[] = [
	{
		pageTitle: "Home",
		pageUrl: "",
	},
	{
		pageTitle: "Resources",
		pageUrl: "resource",
	},
	{
		pageTitle: "About",
		pageUrl: "about",
	},
]

const Navbar = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const { colorMode, toggleColorMode } = useColorMode()
	const [currentPath, setCurrentPath] = useState(
		location.pathname.split("/").at(-1),
	)

	const [bgColor, setBgColor] = useState<any>("hsl(0, 0%, 0%, 0.05)")

	useEffect(() => {
		setCurrentPath(location.pathname.split("/").at(-1))
	}, [location])

	useLayoutEffect(() => {
		for (let i = 0; i < subjects.length; i++) {
			if (currentPath === subjects[i].abbreviation) {
				setBgColor(subjects[i].color)
				break
			} else {
				setBgColor("hsl(0, 0%, 0%, 0.05)")
			}
		}
	}, [currentPath])

	return (
		<Box
			bg={bgColor}
			w="100%"
			py={{ base: 4, lg: 5 }}
			px={{ base: 2, lg: 4 }}>
			<HStack
				justifyContent={{ base: "space-between", lg: "flex-start" }}
				alignContent="center">
				<Box display={{ base: "block", lg: "none" }}>
					<Menu
						preventOverflow
						matchWidth
						flip
						gutter={2}
						autoSelect={false}>
						<MenuButton
							as={IconButton}
							icon={<IoMenu />}
							aria-label="menu-icon"
							colorScheme="undefined"
							color="hsla(0, 0%, 0%, 0.9)"
							fontSize="2xl"
						/>
						<MenuList bgColor="hsla(0, 0%, 100%, 0.95)">
							{pages.map(page => (
								<MenuItem
									key={page.pageUrl}
									onClick={() => {
										navigate(page.pageUrl)
									}}>
									{page.pageTitle}
								</MenuItem>
							))}
						</MenuList>
					</Menu>
				</Box>
				<Image
					src="../assets/itsig.svg"
					w={{ base: "4.5em", md: "5.5em" }}
					h="auto"
				/>
				<HStack
					display={{ base: "none", lg: "block" }}
					spacing={5}
					style={{ marginLeft: "3em" }}>
					{pages.map(page => (
						<Button
							key={page.pageUrl}
							fontWeight={
								currentPath === page.pageUrl
									? "semibold"
									: "normal"
							}
							fontSize="xl"
							colorScheme="black"
							variant="link"
							sx={{ transition: "all 0.15s ease-out" }}
							onClick={() => {
								navigate(page.pageUrl)
							}}>
							{page.pageTitle}
						</Button>
					))}
				</HStack>
				<Spacer display={{ base: "none", lg: "block" }} />
				<IconButton
					aria-label="color-mode-toggle"
					icon={colorMode === "light" ? <IoMoon /> : <IoSunny />}
					colorScheme="whiteAlpha"
					color="hsla(0, 0%, 0%, 0.75)"
					fontSize="xl"
					onClick={toggleColorMode}
				/>
			</HStack>
		</Box>
	)
}

export default Navbar
