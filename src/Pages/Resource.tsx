import React from "react"
import ResourceCard from "../Components/ResourceCard"
import {subjects} from "../Models/Subjects"
import {
	Box,
	Center
} from "@chakra-ui/react"
const Resource = () => {
	return (
	<Center>
	<Box width={{lg: '90%'}}>
	{
		subjects[0].resources.map((res, index) => {
		return <ResourceCard resource={res} reverse={!(index % 2 == 0)} />
		})
	}
	</Box>
	</Center>
	)

}

export default Resource
