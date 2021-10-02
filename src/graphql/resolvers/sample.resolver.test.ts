import { sampleResolver } from './sample.resolver'
describe('Sample resolver', () => {
  it('says \'hi\' back to you when you call hello', () => {
    // FAIL! expect(sampleResolver.Query.hello()).toBe('hi')
    expect(sampleResolver.Query.hello()).toBe('hi!')
  })
})
