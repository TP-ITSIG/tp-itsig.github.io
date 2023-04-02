import { Semester } from "./Semester"

export interface Year {
	name: string
	course: "Common" | "IT" | "AAI" | "BDA" | "CDF" | "IGD"
	description: string
	image: string
	updated: string
	creator: string
	creatorLink: string
	semester1: Semester
	semester2: Semester
}
