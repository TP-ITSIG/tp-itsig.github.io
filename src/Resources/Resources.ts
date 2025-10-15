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
	NECT,
	Others,
	UXID,
} from "./IITY1Resources"
import { 
	MBAP, 
	CADV, 
	AMDT, 
	APPSEC, 
	FWEB, 
	DEVOPS, 
	MLDP, 
	ITAD 
} from "./ITY2Resources"
import { 
	GADV, 
	GADS, 
	TMOD, 
	CPGP, 
	PGGE, 
	ARAD, 
	IMUX, 
	MPPR 
} from "./IGDY2Resources"

const Resources: Year[] = [
	{
		name: "IIT Year 1",
		course: "Common",
		description: "What every IIT student will take in Year 1!",
		image: "/Year-Icons/IIT_Year1.svg",
		updated: "October 2025",
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
				subjects: [ADEV, DBAV, DSAG, NECT],
			},
		],
	},
	{
		name: "Dip IT Year 2",
		course: "IT",
		description:
			"Information Technology students takes these subjects in Year 2!",
		image: "/Year-Icons/DipIT_Year2.svg",
		updated: "October 2025",
		creator: "ITSIG",
		creatorLink: "https://www.instagram.com/tp.itsig",
		creatorHelp: undefined,
		semesters: [
			{
				name: "Semester 1 (MBAP, CADV, AMDT & APPSEC)",
				subjects: [MBAP, CADV, AMDT, APPSEC],
			},
			{
				name: "Semester 2 (FWEB, DEVOPS, MLDP & ITAD)",
				subjects: [FWEB, DEVOPS, MLDP, ITAD],
			},
		],
	},
	{
		name: "Dip IGD/GDD Year 2",
		course: "IGD",
		description:
			"Immersive Media & Game Development students takes these subjects in Year 2!",
		image: "/Year-Icons/DipIT_Year2.svg", // Change icon
		updated: "October 2025",
		creator: "ITSIG", // Change name
		creatorLink: "https://www.instagram.com/tp.itsig", // Change instagram
		creatorHelp: undefined,
		semesters: [
			{
				name: "Semester 1 (GADV, GADS, TMOD & CPGP)",
				subjects: [GADV, GADS, TMOD, CPGP],
			},
			{
				name: "Semester 2 (PGGE, ARAD, IMUX & MPPR)",
				subjects: [PGGE, ARAD, IMUX, MPPR],
			},
		],
	},
]

export default Resources
