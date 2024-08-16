import { Subject } from "../Interfaces/Subject"
import { ResourceType } from "../Interfaces/ResourceType"
import { Year } from "../Interfaces/Year"
import {
	ADEV,
	COMT,
	CYFUN,
	DAVA,
	DBAV,
	DSAG,
	LOMA,
	Others,
	UXID,
} from "./IITY1Resources"
import { MBAP, CADV, AMDT } from "./ITY2Resources"

const Resources: Year[] = [
	{
		name: "IIT Year 1",
		course: "Common",
		description: "What every IIT student will take in Year 1!",
		image: "/Year-Icons/IIT_Year1.svg",
		updated: "August 2024",
		creator: "ITSIG",
		creatorLink: "https://www.instagram.com/tp.itsig",
		creatorHelp: "With help from our lecturers!",
		semesters: [
			{
				name: "Semester 1 (COMT, UXID, DAVA, LOMA, CYFUN & Others)",
				subjects: [COMT, UXID, DAVA, LOMA, CYFUN, Others],
			},
			{
				name: "Semester 2 (ADEV, DBAV, DSAG & NECT)",
				subjects: [ADEV, DBAV, DSAG],
			},
		],
	},
	{
		name: "Dip IT Year 2",
		course: "IT",
		description:
			"Information Technology students takes these subjects in Year 2!",
		image: "/Year-Icons/DipIT_Year2.svg",
		updated: "April 2023",
		creator: "ITSIG",
		creatorLink: "https://www.instagram.com/tp.itsig",
		creatorHelp: undefined,
		semesters: [
			{
				name: "Semester 1 (MBAP, CADV & AMDT)",
				subjects: [MBAP, CADV, AMDT],
			},
			{
				name: "Semester 2 (FWEB, DEVOPS, MLDP & ITAD)",
				subjects: undefined,
			},
		],
	},
]

export default Resources
