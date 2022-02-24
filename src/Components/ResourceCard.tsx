import {
    Flex,
	Box,
    SimpleGrid,
    AspectRatio,
    Spacer,
    Image,
    Text,
    Link
} from "@chakra-ui/react"
import { Resource } from '../Models/Resource'
import { ResourceType } from "../Models/ResourceType"
const ResourceCard: React.FC<{resource: Resource, reverse: boolean}> = ({resource, reverse}) => {
    var urls = resource.resourceLinks
    return (
        <Flex marginBottom={10} direction={{base: 'column', md: reverse ? 'row-reverse' : 'row'}}>
            <Box flex={3}>
                { resource.type == ResourceType.VIDEO ? (
                    <AspectRatio>
                        <iframe width={"100%"} height={"100%"} src={resource.thumbnail} allowFullScreen ></iframe>

                    </AspectRatio>

                )
                    :  <a target="_blank" href={resource.imageUrl}><Image width={"100%"} height={"100%"} src={resource.thumbnail}/></a>
                }
            </Box>
            <Spacer />
            <Box flex={5}>
                <SimpleGrid columns={1}>
                    <Text fontWeight={800} fontSize={{base: "24", md: "36", lg:"48"}}>{resource.title}</Text>
                    <Text fontSize={{base: "14", md:"16", lg:"24"}}>{resource.content}</Text> 
                    { urls == null ? console.log("URLS NULL") : urls.map(url => {
                        return <a style={{color:"blue"}} target="_blank" href={url}>{url}</a>
                    })
                    }
                </SimpleGrid>
            </Box>
        </Flex>
    )
}
export default ResourceCard