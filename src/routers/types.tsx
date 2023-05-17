import { ComponentType } from "react"

export interface LocationStates {
  "/"?: {}
  "/#"?: {}
  "/:id?"?: {}
}

export type PathName = keyof LocationStates

export interface Page {
  path: PathName
  exact?: boolean
  private?: boolean
  component: ComponentType<Object>
}
