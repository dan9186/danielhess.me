const radius = 4

export const borderRadius = {
  all: `border-radius: ${radius}px;`,
  top: `border-top-left-radius: ${radius}px; border-top-right-radius: ${radius}px;`,
  right: `border-top-right-radius: ${radius}px; border-bottom-right-radius: ${radius}px;`,
  left: `border-top-left-radius: ${radius}px; border-bottom-left-radius: ${radius}px;`,
  bottom: `border-bottom-left-radius: ${radius}px; border-bottom-right-radius: ${radius}px;`,
  topLeft: `border-top-left-radius: ${radius}px;`,
  topRight: `border-top-right-radius: ${radius}px;`,
  bottomLeft: `border-bottom-left-radius: ${radius}px;`,
  bottomRight: `border-bottom-right-radius: ${radius}px;`,
}
