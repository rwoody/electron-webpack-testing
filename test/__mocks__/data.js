
export const home_no_items = {
  __typename: 'Home',
  path: '/',
  title: 'Electron App - Test page',
  counter: 3,
}

export const home_full = {
  ...home_no_items,
  items: ['Test Item 1', 'Test Item 2'],
}
