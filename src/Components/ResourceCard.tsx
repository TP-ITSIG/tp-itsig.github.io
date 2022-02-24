import {
    Flex,
	Box,
    SimpleGrid,
    AspectRatio,
    Spacer,
    Image
} from "@chakra-ui/react"
import { Resource } from '../Models/Resource'
import { ResourceType } from "../Models/ResourceType"
const ResourceCard: React.FC<{resource: Resource, reverse: boolean}> = ({resource, reverse}) => {
    return (
        <Flex marginBottom={10} direction={{base: 'column', md: reverse ? 'row-reverse' : 'row'}}>
            <Box flex={3}>
                { resource.type == ResourceType.VIDEO ? (
                    <AspectRatio>
                        <iframe width={"100%"} height={"100%"} src={resource.thumbnail} allowFullScreen ></iframe>

                    </AspectRatio>

                )
                    : <Image width={"100%"} height={"100%"} src={resource.thumbnail}/>
                }
            </Box>
            <Spacer />
            <Box flex={5}>
                <SimpleGrid columns={1}>
                    <Box fontWeight={800} fontSize={{base: "24", md: "36", lg:"48"}}>{resource.title}</Box>
                    <Box fontSize={{base: "14", md:"16", lg:"24"}}>{resource.content}</Box>
                </SimpleGrid>
            </Box>
        </Flex>
    )
}
export default ResourceCard