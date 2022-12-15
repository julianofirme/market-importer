import { describe, it, expect } from 'vitest'
import { CodeBar } from './code_bar'

describe('CodeBar', () => {
  it('should be able to create a product code bar', () => {
    const code_bar = new CodeBar('1234ABC')

    expect(code_bar).toBeTruthy();
  })

  it('should not be able to create a product code bar with 0 characters', () => {
    expect(() => new CodeBar('')).toThrow();
  })

  it('should not be able to create a product code bar with more then 16 characters', () => {
    expect(() => new CodeBar('A'.repeat(17))).toThrow();
  })

  it('should be able to create a product code bar with exactly 1 characters', () => {
    const code_bar = new CodeBar('A')
    expect(code_bar).toBeTruthy();
  })

  it('should be able to create a product code bar with exactly 16 characters', () => {
    const code_bar = new CodeBar('A'.repeat(16))
    expect(code_bar).toBeTruthy();
  })

  it('should be able to retrieve the value of the product code bar', () => {
    const code_bar = new CodeBar('1234ABC')
    expect(code_bar.value).toBe('1234ABC');
  })
})
