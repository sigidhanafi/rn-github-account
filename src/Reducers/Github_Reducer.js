export function github (state = [], action) {
  switch (action.type) {
    case 'REQUEST':
      return {
        fetching: true,
        data: action.data
      }
      break
    case 'FAILURE':
      return {
        fetching: false,
        data: action.data
      }
      break
    case 'SUCCESS':
      return {
        fetching: false,
        data: action.data
      }
      break
    default:
      return state
  }
}