import * as types from '../../types.js'
import { test, expect } from 'vitest'

test('types.getBoolean returns a boolean', function () {
  const expected = 'boolean'
  const actual = typeof types.getBoolean()
  expect(actual).toBe(expected)
})
