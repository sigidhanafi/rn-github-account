import { Observable } from 'rxjs'
import axios from 'axios'

// ACTION CREATOR
export function request () {
  return {
    type: 'REQUEST',
    data: null
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
        .map(response => success(response.data))
        .catch((error, response) =>
          Observable.of({ type: 'FAILURE', data: null })
        )
    )
)