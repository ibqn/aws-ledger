import hyperid from 'hyperid'

export const generateId = () => {
  const generateUniqueId = hyperid({ urlSafe: true })
  return generateUniqueId()
}
