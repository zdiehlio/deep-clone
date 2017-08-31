'use strict'

const expect = require('expect')
const deepClone = require('../deep-clone.js')

describe('should confirm obj was deep cloned', () => {
  //Testing to ensure object is cloned
  it('should equal return identical objects', () => {
    let customerInformation = {name: 'Paddy', address: {town: 'Lerum', country: 'Sweden'}}
    let result = deepClone(customerInformation)
    expect(customerInformation.name).toBe('Paddy')
    expect(customerInformation.address.town).toBe('Lerum')
    expect(customerInformation.address.country).toBe('Sweden')
    expect(result.name).toBe('Paddy')
    expect(result.address.town).toBe('Lerum')
    expect(result.address.country).toBe('Sweden')
  })
  //Testing to ensure when changes are made to new object it does not affect the original
  it('should return a change in the new object while old object remains the same', () => {
    let customerInformation = {name: 'Paddy', address: {town: 'Lerum', country: 'Sweden'}}
    let result = deepClone(customerInformation)
    result.name = 'Susan'
    result.address.town = 'Berlin'
    result.address.country = 'Germany'
    expect(customerInformation.name).toBe('Paddy')
    expect(customerInformation.address.town).toBe('Lerum')
    expect(customerInformation.address.country).toBe('Sweden')
    expect(result.name).toBe('Susan')
    expect(result.address.town).toBe('Berlin')
    expect(result.address.country).toBe('Germany')
  })
})
