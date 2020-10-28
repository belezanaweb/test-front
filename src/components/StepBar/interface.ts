interface ISteps {
  name: string
  isActive?: boolean
}

export interface IStepBar {
  steps: ISteps[]
}

export interface IStyledStep {
  isActive?: boolean
}
