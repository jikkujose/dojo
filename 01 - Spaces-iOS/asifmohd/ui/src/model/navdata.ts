export const navData = [
  { title: "spaces", href: "#" },
  { title: "prototypes", href: "#" },
  { title: "boards", href: "#" },
  { title: "favorites", href: "#" },
]

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
