import { ResourceType } from "./ResourceType"
import { ResourceLinkType } from "./ResourceLinkType"
export interface Resource {
	title: string
	content: string
	thumbnail: string
	type: ResourceType
	imageUrl?: string
	resourceLinks?: ResourceLinkType[]
}
