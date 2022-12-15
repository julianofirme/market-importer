import { describe, it, expect } from 'vitest'
import { CodeBar } from './code_bar'
import { Description } from './description'
import { Products } from './products'

describe('Products', () => {
  it('should be able to create a product', () => {
    const code_bar = new CodeBar('1234ABC')
    const description = new Description('Peanut Butter')
    const price = 10.99
    const quantity = 5
    const created_at = new Date()

    const product = new Products({
      code_bar,
      description,
      price,
      quantity,
      created_at
    })

    expect(product).toBeTruthy();
  })

  it('should be able to set and get the code bar of a product', () => {
    const code_bar = new CodeBar('1234ABC')
    const description = new Description('Peanut Butter')
    const price = 10.99
    const quantity = 5
    const created_at = new Date()

    const product = new Products({
      code_bar,
      description,
      price,
      quantity,
      created_at
    })

    const newCodeBar = new CodeBar('5678DEF')
    product.code_bar = newCodeBar
    expect(product.code_bar).toEqual(newCodeBar)
  })
})