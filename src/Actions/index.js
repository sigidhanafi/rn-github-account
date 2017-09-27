import { combineEpics } from 'redux-observable'
import { fetchUserEpic } from './Github'

export const rootEpic = combineEpics(
  fetchUserEpic
)
