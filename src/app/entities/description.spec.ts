import { describe, it, expect } from 'vitest'
import { Description } from './description'

describe('Description', () => {
  it('should be able to create a product description', () => {
    const description = new Description('Peanut Butter')

    expect(description).toBeTruthy();
  })
})