import { Observable } from 'rxjs'
import axios from 'axios'

// ACTION CREATOR
export function request (username) {
  return {
    type: 'REQUEST',
    data: null,
    username
  }
}

export function failure () {
  return {
    type: 'FAILURE',
    data: null
  }
}

export function success (data) {
  return {
    type: 'SUCCESS',
    data
  }
}

// EPIC
export const fetchUserEpic = actions$ => (
  actions$
    .ofType('REQUEST')
    .mergeMap(action => 
      Observable.fromPromise(axios.get(`https://api.github.com/users/${action.username}`))
        .map(response => {
          const { data } = response
          return success(data)
        })
        .catch(({response}) => {
            const { status } = response
            return Observable.of({ type: 'FAILURE', data: null })
          }
        )
    )
)