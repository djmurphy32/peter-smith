window.gtag = () => {}

jest.mock('@/utils/webpackContexts/portfolio', () => {
  const context = (id) => id
  context.keys = () => {
    return ['image1.jpg', 'image2.jpg', 'images/test/image3.jpg']
  }
  return context
})

jest.mock('@/utils/webpackContexts/home', () => {
  const context = (id) => id
  context.keys = () => {
    return ['image1.jpg', 'image2.jpg', 'images/test/image3.jpg']
  }
  return context
})

jest.mock('@/utils/webpackContexts/littleHills', () => {
  const context = (id) => id
  context.keys = () => {
    return ['image1.jpg', 'image2.jpg', 'images/test/image3.jpg']
  }
  return context
})

jest.mock('@/utils/webpackContexts/brightAndYoung', () => {
  const context = (id) => id
  context.keys = () => {
    return ['image1.jpg', 'image2.jpg', 'images/test/image3.jpg']
  }
  return context
})
