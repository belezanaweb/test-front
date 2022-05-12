import React from 'react'
import { render, screen } from '../../util/test-utils'
import MediaMatch from '../../components/MediaMatch'

describe('MediaMatch Component', () => {
  let desktopHeading: Element
  let mobileHeading: Element

  beforeEach(() => {
    render(
      <>
        <MediaMatch greaterThan="medium">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </>
    )
    desktopHeading = screen.getByTestId('desktop')
    mobileHeading = screen.getByTestId('mobile')
  })

  it('should be hidden if no media query is passed', () => {
    expect(desktopHeading.parentElement).toHaveStyle({ display: 'none' })
    expect(mobileHeading.parentElement).toHaveStyle({ display: 'none' })
  })

  it('should show or hide based on the media passed', () => {
    const style = document.createElement('style')
    style.innerHTML = `
      @media {
        min-width: 768px
      }
    `

    const styleSecondary = document.createElement('style')
    style.innerHTML = `
      @media {
        max-width: 768px
      }
    `

    desktopHeading = desktopHeading.appendChild(style)

    mobileHeading = mobileHeading.appendChild(styleSecondary)

    expect(desktopHeading.parentElement).toHaveStyle({ display: 'block' })

    expect(mobileHeading.parentElement).toHaveStyle({ display: 'block' })
  })
})
