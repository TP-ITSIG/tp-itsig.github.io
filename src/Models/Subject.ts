import { Resource } from './Resource'

export interface Subject {
    name: string,
    tagline: string,
    abbreviation: string,
    description: string,
    color: string,
	bgColor: string,
    image: string,
    resources: Resource[],
    advanced: string[],
    software: string[]
}