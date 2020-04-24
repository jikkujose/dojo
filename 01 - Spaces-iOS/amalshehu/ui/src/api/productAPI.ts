import axios from 'axios'

const baseUrl = 'https://virtserver.swaggerhub.com/Storybrain/Spaces-iOS/1.0.0/'
export interface Description {
  type: string
  count: number
}
export interface FaceThumbs {
  name: string
  image: string
}

export interface Product {
  id: number
  title: string
  sub_title: number
  description: Description
  bgImage: string
  icon: string
  state: 'open' | 'closed'
}

export interface ProductDetails {
  id: string
  prototypes: number
  boards: number
  projects: Project[]
}

export interface Project {
  id: string
  title: number
  bgImage: string
  icon: string
  star: boolean
  description: Description
}

export interface Description {
  type: string
  count: number
}

export interface ProductResult {
  spaces: Product[]
}

export async function getProducts(): Promise<ProductResult> {
  const url = `${baseUrl}api/spaces/list`
  try {
    const res = await axios.get<ProductResult>(url)
    return {
      spaces: res.data.spaces,
    }
  } catch (err) {
    throw err
  }
}

export async function getProductDetails(
  id: string = 'd290f1ee-6c54-4b01-90e6-d701748f0851'
) {
  const url = `${baseUrl}api/spaces/list/${id}`
  const { data } = await axios.get<ProductDetails>(url)
  return data
}
