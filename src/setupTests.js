// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import '@testing-library/react/cleanup-after-each'
// this adds jest-dom's custom assertions
import 'jest-dom/extend-expect'
// jest-extended
import 'jest-extended'
// jest-axe
import { toHaveNoViolations } from 'jest-axe'
// emotion
import * as emotion from '@emotion/core'
import { createSerializer } from 'jest-emotion'

expect.addSnapshotSerializer(createSerializer(emotion))

// jest-axe
expect.extend(toHaveNoViolations)
