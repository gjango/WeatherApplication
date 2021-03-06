import { FETCH_WEATHER, FETCH_MULTIPLE_WEATHER } from "../actions/index"

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data]
  }

  switch (action.type) {
    case FETCH_MULTIPLE_WEATHER:
      return [action.payload.data.list]
  }

  return state
}
