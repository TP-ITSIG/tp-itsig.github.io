import { Resource } from "./Resource"
import { Software } from "./Software"

export interface Subject {
	name: string
	tagline: string
	abbreviation: string
	description: string
	color: string
	bgColor: string
	imageLight: string
	imageDark: string
	resources: Resource[]
	advanced: string[]
	software: Software[]
}
