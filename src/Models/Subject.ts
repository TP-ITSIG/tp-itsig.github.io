import { Resource } from './Resource'

export interface Subject {
    name: String,
    tagline: String,
    abbreviation: String,
    description: String,
    color: String,
    image: String,
    resources: Resource[],
    advanced: String[],
    software: String[]
}