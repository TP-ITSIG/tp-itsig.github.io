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
	Skeleton,
	Icon,
	IconButton,
	Tooltip,
	useColorMode,
} from "@chakra-ui/react"
import { useState } from "react"
import { Resource } from "../Models/Resource"
import { ResourceType } from "../Models/ResourceType"
import { FiExternalLink } from "react-icons/fi"

interface ResourceCardProps {
	resource: Resource
	reverse: boolean
}

const ResourceCard = ({ resource, reverse }: ResourceCardProps) => {
	const { colorMode } = useColorMode()
	const [isIframeLoading, setIsIframeLoading] = useState(true)

	return (
		<Grid
			w="100%"
			templateColumns={{ base: "1", md: "repeat(2, 1fr)" }}
			templateRows="repeat(auto, 1fr)"
			autoFlow="dense"
			columnGap={10}>
			<GridItem
				rowSpan={5}
				mb={{ base: 3, md: 0 }}
				order={{ base: 2, md: 1, lg: reverse ? 2 : 1 }}>
				{resource.type === ResourceType.VIDEO ? (
					<AspectRatio
						ratio={16 / 9}
						borderRadius="xl"
						overflow="hidden"
						boxShadow={"0px 2px 12px hsl(0, 0%, 0%, 25%)"}>
						<Skeleton isLoaded={!isIframeLoading}>
							<iframe
								width="100%"
								height="100%"
								src={`${resource.thumbnail}&rel=0`}
								allowFullScreen
								onLoad={() => setIsIframeLoading(false)}
							/>
						</Skeleton>
					</AspectRatio>
				) : (
					<Box position="relative">
						<Image
							width="100%"
							height="100%"
							borderRadius="xl"
							objectFit="cover"
							boxShadow={"0px 2px 12px hsl(0, 0%, 0%, 25%)"}
							src={resource.thumbnail}
							onClick={() => window.open(resource.imageUrl)}
						/>
						<Tooltip label="Open in new tab" placement="right">
							<IconButton
								aria-label="image-url-btn"
								icon={<FiExternalLink />}
								position="absolute"
								bottom={2.5}
								left={2.5}
								size="md"
								colorScheme="black"
								color="white"
								bgColor="hsla(0, 0%, 0%, 0.65)"
								_hover={{ bgColor: "hsla(0, 0%, 0%, 0.75)" }}
								_active={{ filter: "brightness(0.65)" }}
								transition="all 0.35s ease"
								onClick={() => window.open(resource.imageUrl)}
							/>
						</Tooltip>
					</Box>
				)}
			</GridItem>
			<GridItem colSpan={1} order={1}>
				<Text
					fontWeight={800}
					fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
					mb={3}>
					{resource.title}
				</Text>
			</GridItem>
			<GridItem order={2}>
				<Stack>
					<Text
						fontSize={{ base: "md", md: "lg", lg: "xl" }}
						mb={2.5}>
						{resource.content}
					</Text>

					{resource.resourceLinks && (
						<Text
							fontWeight="medium"
							fontSize={{ base: "sm", md: "md", lg: "lg" }}>
							Relevant Links:
						</Text>
					)}
					{resource.resourceLinks &&
						resource.resourceLinks.map((link, index) => (
							<Link
								fontSize={{ base: "sm", md: "md", lg: "lg" }}
								key={index}
								href={link.url}
								color="iit_blue"
								isExternal>
								{link.title}
							</Link>
						))}
				</Stack>
			</GridItem>
		</Grid>
	)
}
export default ResourceCard
