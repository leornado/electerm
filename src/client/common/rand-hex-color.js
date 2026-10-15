export function getRandomHexColor () {
  let color = '#'
  const hexValues = '0123456789ABCDEF'

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * 16)
    color += hexValues[index]
  }

  return color
}

export const defaultColors = [
  '#78e5ff',
  '#00ff00',
  '#ff0000',
  '#ff8a00',
  '#ffff00',
  '#ae81ff',
  '#ff00d6',
  '#ffffff',
  '#6a737d'
]

export const getRandomDefaultColor = () => {
  const index = Math.floor(Math.random() * defaultColors.length)
  return defaultColors[index]
}
