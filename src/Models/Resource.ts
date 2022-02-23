import { ResourceType } from './ResourceType'
export interface Resource {
    title: string,
    content: string,
    thumbnail: string,
    type: ResourceType
}