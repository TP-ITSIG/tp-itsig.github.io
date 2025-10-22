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
	Tooltip,
	useColorMode,
} from "@chakra-ui/react"
import { useEffect, useLayoutEffect, useState } from "react"
import { IoMenu, IoSunny, IoMoon } from "react-icons/io5"
import { useNavigate, useLocation } from "react-router-dom"
import { Subjects } from "../Resources/Subjects"
import ReactGA from "react-ga4"

interface NavbarItems {
	pageTitle: string
	pageUrl: string
}

const pages: NavbarItems[] = [
	{
		pageTitle: "Home",
		pageUrl: "",
	},
	// {
	// 	pageTitle: "Resources",
	// 	pageUrl: "resource",
	// },
	{
		pageTitle: "About",
		pageUrl: "about",
	},
	{
		pageTitle: "FAQ",
		pageUrl: "faq",
	},
]

const Navbar = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const { colorMode, toggleColorMode } = useColorMode()
	const [currentPath, setCurrentPath] = useState(
		location.pathname.split("/")[location.pathname.split("/").length - 1],
	)
	const navBg =
		colorMode === "light"
			? "hsl(0, 0%, 0%, 0.05)"
			: "hsl(0, 0%, 100%, 0.05)"

	const [bgColor, setBgColor] = useState<any>(navBg)

	useEffect(() => {
		setCurrentPath(
			location.pathname.split("/")[
				location.pathname.split("/").length - 1
			],
		)
		ReactGA.send({ hitType: "pageview", page: location.pathname })
	}, [location])

	useLayoutEffect(() => {
		for (let i = 0; i < Subjects.length; i++) {
			if (currentPath === Subjects[i].abbreviation) {
				setBgColor(Subjects[i].color)
				break
			} else {
				colorMode === "light"
					? setBgColor("hsl(0, 0%, 0%, 0.05)")
					: setBgColor("hsl(0, 0%, 80%, 0.1)")
			}
		}
	}, [currentPath, colorMode])

	return (
		<Box
			bgColor={bgColor}
			transition="background-color 0.1s ease-out"
			maxW="100%"
			borderRadius={{ base: "16px", lg: "20px" }}
			my={4}
			mx={4}
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
							filter={
								currentPath === "" ||
								currentPath === "about" ||
								currentPath === "faq"
									? colorMode === "light"
										? "none"
										: "invert(100%)"
									: "none"
							}
							aria-label="menu-icon"
							colorScheme="undefined"
							color="hsla(0, 0%, 0%, 0.9)"
							fontSize="2xl"
						/>
						<MenuList>
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
				<a href={"/#/"}>
					<Image
						src="/ITSIG_Logo_No_BG.svg"
						w={{ base: "3.5em", md: "5.5em" }}
						h="auto"
						_before={{
							padding: "0px",
							margin: "0px",
						}}
					/>
				</a>
				<HStack
					display={{ base: "none", lg: "block" }}
					spacing={5}
					style={{ marginLeft: "3em" }}>
					{pages.map(page => (
						<a
							href={`#/${page.pageUrl}`}
							target="_self"
							key={page.pageUrl}>
							<Button
								fontWeight={
									currentPath === page.pageUrl
										? "bold"
										: "normal"
								}
								fontSize="xl"
								color={
									currentPath === "" ||
									currentPath === "about" ||
									currentPath === "faq"
										? colorMode === "light"
											? "black"
											: "white"
										: "black"
								}
								variant="link"
								sx={{
									transition: "font-weight 0.1s ease-out",
								}}>
								{page.pageTitle}
							</Button>
						</a>
					))}
				</HStack>
				<Spacer display={{ base: "none", lg: "block" }} />
				<Tooltip
					label={
						colorMode === "light"
							? "I'm a vampire"
							: "Burn my eyes plz"
					}>
					<IconButton
						aria-label="color-mode-toggle"
						icon={colorMode === "light" ? <IoMoon /> : <IoSunny />}
						colorScheme="whiteAlpha"
						color={
							currentPath === "" || currentPath === "about"
								? colorMode === "light"
									? "hsla(0, 0%, 0%, 0.75)"
									: "hsla(0, 0%, 100%, 0.75)"
								: "hsla(0, 0%, 0%, 0.75)"
						}
						fontSize="xl"
						onClick={toggleColorMode}
					/>
				</Tooltip>
			</HStack>
		</Box>
	)
}

export default Navbar
