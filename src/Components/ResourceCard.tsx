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
} from "@chakra-ui/react"
import { useState } from "react"
import { Resource } from "../Models/Resource"
import { ResourceType } from "../Models/ResourceType"

interface ResourceCardProps {
	resource: Resource
	reverse: boolean
}

const ResourceCard = ({ resource, reverse }: ResourceCardProps) => {
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
				{resource.type == ResourceType.VIDEO ? (
					<AspectRatio
						ratio={16 / 9}
						borderRadius="xl"
						overflow="hidden">
						<Skeleton isLoaded={!isIframeLoading}>
							<iframe
								width="100%"
								height="100%"
								src={resource.thumbnail}
								allowFullScreen
								onLoad={() => setIsIframeLoading(false)}
							/>
						</Skeleton>
					</AspectRatio>
				) : (
					<Image
						width="100%"
						height="100%"
						borderRadius="xl"
						src={resource.thumbnail}
						objectFit="cover"
					/>
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
					<Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
						{resource.content}
					</Text>
					<br />
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
								color="blue"
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
