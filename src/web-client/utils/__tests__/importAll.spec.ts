import importAll from '../importAll'

describe('importAll', () => {
  it('THEN should import all files in directory alphabetically', () => {
    const expected = { foo: 'bar' }
    const context: any = (id: string) => expected
    context.keys = () => {
      return ['b_image1.jpeg', './c_image2.png', 'a_images/test/image3.jpg']
    }

    const result = importAll(context as any)
    expect(result).toStrictEqual({
      'a_images/test/image3.jpg': expected,
      'b_image1.jpeg': expected,
      'c_image2.png': expected,
    })
  })
})
