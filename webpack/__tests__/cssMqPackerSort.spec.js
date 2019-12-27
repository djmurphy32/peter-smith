const cssMqPackerSort = require('../cssMqPackerSort')

describe('cssMqPackerSort', () => {
  it('SHOULD sort "min-width" queries in ascending order', () => {
    // Arrange
    const unsorted = [
      'only screen and (min-width: 930px)',
      'only screen and (min-width: 640px)',
      'screen and (min-width: 640px)',
      'only screen and (min-width: 768px)',
    ]

    const expected = [
      'only screen and (min-width: 640px)',
      'screen and (min-width: 640px)',
      'only screen and (min-width: 768px)',
      'only screen and (min-width: 930px)',
    ]

    // Act
    const actual = unsorted.sort(cssMqPackerSort)

    // Assert
    expect(actual).toEqual(expected)
  })

  it('SHOULD sort "max-width" queries in descending order', () => {
    // Arrange
    const unsorted = [
      'only screen and (max-width: 929px)',
      'screen and (max-width: 638px)',
      'only screen and (max-width: 480px)',
      'screen and (max-width: 599px)',
    ]

    const expected = [
      'only screen and (max-width: 929px)',
      'screen and (max-width: 638px)',
      'screen and (max-width: 599px)',
      'only screen and (max-width: 480px)',
    ]

    // Act
    const actual = unsorted.sort(cssMqPackerSort)

    // Assert
    expect(actual).toEqual(expected)
  })

  it('SHOULD sort "max-width" queries before "min-width" queries', () => {
    // Arrange
    const unsorted = [
      'only screen and (max-width: 929px)',
      'screen and (min-width: 640px)',
      'only screen and (min-width: 768px)',
      'screen and (max-width: 599px)',
    ]

    const expected = [
      'only screen and (max-width: 929px)',
      'screen and (max-width: 599px)',
      'screen and (min-width: 640px)',
      'only screen and (min-width: 768px)',
    ]

    // Act
    const actual = unsorted.sort(cssMqPackerSort)

    // Assert
    expect(actual).toEqual(expected)
  })

  it('SHOULD sort spanning queries by "min-width" value in ascending order', () => {
    // Arrange
    const unsorted = [
      'only screen and (max-width: 1123px) and (min-width: 1024px)',
      'screen and (max-width: 1000px) and (min-width: 769px)',
      'only screen and (min-width: 768px) and (max-width: 1023px)',
      'only screen and (min-width: 640px) and (max-width: 1259px)',
    ]

    const expected = [
      'only screen and (min-width: 640px) and (max-width: 1259px)',
      'only screen and (min-width: 768px) and (max-width: 1023px)',
      'screen and (max-width: 1000px) and (min-width: 769px)',
      'only screen and (max-width: 1123px) and (min-width: 1024px)',
    ]

    // Act
    const actual = unsorted.sort(cssMqPackerSort)

    // Assert
    expect(actual).toEqual(expected)
  })

  it('SHOULD sort spanning queries with same "min-width" values by "max-width" values in descending order', () => {
    // Arrange
    const unsorted = [
      'only screen and (max-width: 1123px) and (min-width: 1024px)',
      'screen and (max-width: 1000px) and (min-width: 768px)',
      'only screen and (min-width: 768px) and (max-width: 1023px)',
      'only screen and (min-width: 640px) and (max-width: 1259px)',
    ]

    const expected = [
      'only screen and (min-width: 640px) and (max-width: 1259px)',
      'only screen and (min-width: 768px) and (max-width: 1023px)',
      'screen and (max-width: 1000px) and (min-width: 768px)',
      'only screen and (max-width: 1123px) and (min-width: 1024px)',
    ]

    // Act
    const actual = unsorted.sort(cssMqPackerSort)

    // Assert
    expect(actual).toEqual(expected)
  })

  it('SHOULD sort spanning queries after non-spanning', () => {
    // Arrange
    const unsorted = [
      'only screen and (min-width: 930px)',
      'screen and (max-width: 1000px) and (min-width: 768px)',
      'screen and (max-width: 599px)',
      'only screen and (min-width: 640px) and (max-width: 1259px)',
      'only screen and (max-width: 929px)',
      'only screen and (min-width: 640px)',
      'only screen and (min-width: 768px) and (max-width: 1023px)',
      'only screen and (max-width: 1123px) and (min-width: 1024px)',
    ]

    const expected = [
      'only screen and (max-width: 929px)',
      'screen and (max-width: 599px)',
      'only screen and (min-width: 640px)',
      'only screen and (min-width: 930px)',
      'only screen and (min-width: 640px) and (max-width: 1259px)',
      'only screen and (min-width: 768px) and (max-width: 1023px)',
      'screen and (max-width: 1000px) and (min-width: 768px)',
      'only screen and (max-width: 1123px) and (min-width: 1024px)',
    ]

    // Act
    const actual = unsorted.sort(cssMqPackerSort)

    // Assert
    expect(actual).toEqual(expected)
  })
})
