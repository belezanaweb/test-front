import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe } from 'vitest'
import { Tabs } from './Tabs'

const Section1 = () => <section>Section 1 content</section>
const Section2 = () => <section>Section 2 content</section>
const Section3 = () => <section>Section 3 content</section>

describe('<Tabs>', () => {
  test('should display tabs', () => {
    const onChangeSpy = vi.fn()
    render(
      <Tabs selected='Section 1' onChange={onChangeSpy}>
        <Section1 key='Section 1' />
        <Section2 key='Section 2' />
        <Section3 key='Section 3' />
      </Tabs>
    )

    expect(screen.getByRole('button', { name: /section 1/i})).toBeVisible()
    expect(screen.getByRole('button', { name: /section 2/i})).toBeVisible()
    expect(screen.getByRole('button', { name: /section 3/i})).toBeVisible()
  })

  test('should display some the selected section', () => {
    const onChangeSpy = vi.fn()
    render(
      <Tabs selected='Section 2' onChange={onChangeSpy}>
        <Section1 key='Section 1' />
        <Section2 key='Section 2' />
        <Section3 key='Section 3' />
      </Tabs>
    )

    expect(screen.queryByText('Section 1 content')).toBeFalsy()
    expect(screen.getByText('Section 2 content')).toBeVisible()
    expect(screen.queryByText('Section 3 content')).toBeFalsy()
  })

  test('should call onChange handler with the selected section key', async () => {
    const onChangeSpy = vi.fn()
    render(
      <Tabs selected='Section 2' onChange={onChangeSpy}>
        <Section1 key='Section 1' />
        <Section2 key='Section 2' />
        <Section3 key='Section 3' />
      </Tabs>
    )

    await userEvent.click(screen.getByRole('button', { name: /section 3/i}))

    expect(onChangeSpy).toBeCalledWith('Section 3')
  })
})
