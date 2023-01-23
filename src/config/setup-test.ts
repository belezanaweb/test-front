
//@ts-nocheck
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

global.fetch = vi.fn(() => Promise.resolve({
    json: () => Promise.resolve("Testing something!")
}));
