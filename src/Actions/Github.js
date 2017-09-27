// ACTION CREATOR
export function request () {
  return {
    type: 'REQUEST',
    data: []
  }
}

export function failure () {
  return {
    type: 'FAILURE',
    data: []
  }
}

export function success (data) {
  return {
    type: 'SUCCESS',
    data
  }
}

// ACTION
export function fetchUser () {
  return (dispatch) => {
    dispatch(request())
    setTimeout(() => {
      const response = {
        'name': 'Sigit Hanafi'
      }
      dispatch(success(response))
    }, 5000)
  }
}

// EPIC
export const fetchUserEpic = actions$ => (
  actions$
    .ofType('REQUEST')
    .do((action) => console.log('do ajax request to get data github user', action))
    .mapTo({type: 'SUCCESS'})
)