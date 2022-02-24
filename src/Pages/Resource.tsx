import React from "react"
import ResourceCard from "../Components/ResourceCard"
import { subjects } from "../Models/Subjects"
import { useLocation } from "react-router-dom"
import {
	Box,
	Center,
	Flex,
	Text
} from "@chakra-ui/react"
const Resource = () => {
	const location = useLocation()
	const pathNameArray = location.pathname.split("/")
	const subjectAbbrev = pathNameArray[pathNameArray.length-1]
	const subject = subjects.filter(sub => {
		return sub.abbreviation == subjectAbbrev
	})[0]
	console.log(subjectAbbrev)
	return (
	<Flex direction={"column"} width={"100%"}>
		<Box bgColor={subject.color} paddingTop={10} paddingBottom={10} >
			<Center fontWeight={800} fontSize={{base: 24, md: 36, lg: 42}}>{subject.name}</Center>
		</Box>
		<Center >
		<Box width={{base:"100%", md:"75%"}} alignSelf={"center"}  paddingBottom={5} >
			<Text paddingBlock={2} align={{base: "start", md: "center"}} fontWeight={800} fontSize={{base: 20, md: 24, lg: 36}}>What is <span style={{color: subject.color}}>{subject.name} </span>about?</Text>
			<Text justifyContent={"center"}  paddingBlock={2} align={{base: "start", md: "center"}} fontSize={{base: 14, md: 20}} >{subject.description}</Text>
		</Box>
		</Center>

		<Text paddingBottom={3} fontWeight={800} fontSize={{base: 26, md: 32, lg: 36}} >Some resources before you start...</Text>
		<Box width={{lg: '90%'}}>
		{
			subject.resources.map((res, index) => {
			return <ResourceCard resource={res} reverse={!(index % 2 == 0)} />
			})
		}
		</Box>
	</Flex>
	)

}

export default Resource
