function importAll(context: __WebpackModuleApi.RequireContext) {
  const images: { [index: string]: any } = {}
  context
    .keys()
    .sort()
    .map((item) => {
      images[item.replace('./', '')] = context(item)
    })
  return images
}

export default importAll
