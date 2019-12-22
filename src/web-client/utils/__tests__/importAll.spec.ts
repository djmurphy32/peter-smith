import importAll from '../importAll'

describe('importAll', () => {
  it('THEN should import all files in directory', () => {
    const expected = { foo: 'bar' }
    const context: any = (id: string) => expected
    context.keys = () => {
      return ['image1.jpeg', './image2.png']
    }

    const result = importAll(context as any)
    expect(result).toStrictEqual({ 'image1.jpeg': expected, 'image2.png': expected })
  })
})
