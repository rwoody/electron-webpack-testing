import {branch, renderComponent} from 'recompose'

export const renderWhileLoading = (component, propName = 'data') =>
  branch(
    props => props.loading,
    renderComponent(component)
  )
