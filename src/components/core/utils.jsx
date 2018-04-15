export function c(...classNames) {
  return classNames.filter(x => !!x).join(' ')
}
