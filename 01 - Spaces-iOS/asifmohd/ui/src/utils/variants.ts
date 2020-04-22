export interface Variants {
  [key: string]: Object
}

export const tabBarVariants: Variants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export const navBarVariants: Variants = {
  hidden: {
    y: -100,
  },
  visible: { y: 0 },
}

export const closeBtnVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: { y: 0, opacity: 1, transition: { delay: 0.4, duration: 0.3 } },
}

export const infoVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.5 } },
}

export const flicktyVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.4 } },
}

export const ImageVariants: Variants = {
  hidden: {
    height: 400,
  },
  visible: { height: 304 },
}
