const spacingMultiplier = 8

export const spacing = (x = 1, basis) =>
  basis ? `${basis - x * spacingMultiplier}px` : `${x * spacingMultiplier}px`
