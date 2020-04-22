import { Animations } from "utils/animation"

export interface Description {
  type: string
  count: number
}
export interface FaceThumb {
  name: string
  image: string
}
export interface spaceList {
  id: string
  title: string
  description: Description
  face_thumbs: FaceThumb[]
  bg_image: string
  icon: string
}

export interface InfoType {
  title: string
  description: Description
  style
  isDescTitle?: boolean
  thumbs?: null | FaceThumb[]
  animation?: Animations
}
