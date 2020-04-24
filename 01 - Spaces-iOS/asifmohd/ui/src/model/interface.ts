import { Animations } from "utils/animation"

export interface Description {
  type: string
  count: number
}
export interface FaceThumb {
  name: string
  image: string
}

export interface Slide {
  title: string
  description: Description
  bg_image: string
}

export interface Space {
  id: string
  title: string
  description: Description
  face_thumbs?: FaceThumb[]
  slides?: Slide[]
  bg_image: string
  icon?: string
}

export interface CardType {
  space: Space
  isDetail: boolean
  isSelected: boolean
  translateX: number
  selectedIndex: boolean
  onScroll: Function
  navBarToggle: Function
  close: Function
}

export interface InfoType {
  title: string
  description: Description
  style: any
  isDescTitle?: boolean
  thumbs?: null | FaceThumb[]
  animation?: Animations
}
export interface CardImageType {
  bgImage: string
  imgRef
  isSelected: boolean
  animate: boolean
}
