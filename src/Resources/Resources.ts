import { Subject } from "../Interfaces/Subject"
import { ResourceType } from "../Interfaces/ResourceType"
import { Year } from "../Interfaces/Year"
import { COMT, CYFUN, DAVA, LOMA, Others, UXID } from "./IITY1Resources"

const Resources: Year[] = [
	{
		name: "IIT Year 1",
		course: "Common",
		description: "What every IIT student will take in Year 1!",
		image: "../../assets/Year-Icons/IIT_Year1.svg",
		updated: "April 2023",
		creator: "ITSIG",
		semester1: {
			name: "Semester 1 (COMT, UXID, DAVA, LOMA, CYFUN & Others)",
			subjects: [COMT, UXID, DAVA, LOMA, CYFUN, Others],
		},
		semester2: {
			name: "Semester 2 (ADEV, DBAV, DSAG & NECT)",
			subjects: undefined,
		},
	},
	{
		name: "Dip IT Year 2",
		course: "IT",
		description:
			"Information Technology students takes these subjects in Year 2!",
		image: "../../assets/Year-Icons/DipIT_Year2.svg",
		updated: "April 2023",
		creator: "ITSIG",
		semester1: {
			name: "Semester 1 (MBAP, CADV & AMDT)",
			subjects: undefined,
		},
		semester2: {
			name: "Semester 2 (FWEB, DEVOPS, MLDP & ITAD)",
			subjects: undefined,
		},
	},
]
