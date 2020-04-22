import { Transition, Variants, VariantLabels } from "framer-motion"

export interface Animation {
  variants?: Variants
  initial?: VariantLabels | string
  animate?: VariantLabels | string
  exit?: VariantLabels | string
  transition?: Transition
}

export const openSpring = {
  type: "spring",
  stiffness: 200,
  damping: 30,
}
export const closeSpring = {
  type: "spring",
  stiffness: 300,
  damping: 35,
}
export const closeInertial = {
  type: "spring",
  stiffness: 500,
  damping: 50,
}
