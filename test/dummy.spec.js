import assert from 'node:assert'
import { describe, test } from 'node:test'

import { identity } from '../src/dummy.js'

describe('dummy test', () => {
  test('identity test', () => {
    assert.equal(identity(1111), 1111)
  })
})
