interface ISteps {
  name: string
  isActive?: boolean
}

export interface IStep {
  steps: ISteps[]
}

export interface IStyledStep {
  isActive?: boolean
}
