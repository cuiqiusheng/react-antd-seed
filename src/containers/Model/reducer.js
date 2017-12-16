import * as at from 'Constants/actionTypes'

const initialState = {
  statistics: {},
  sysStatus: {},
  license: {},
  version: {}
}

export default function someReducer(state = initialState, action) {
  switch (action.type) {
    case at.FETCH_DASHBOARD_STATISTICS:
      return state.updateIn([ 'statistics' ], () => action.data)
    case at.FETCH_SYS_STATUS:
      return state.updateIn([ 'sysStatus' ], () => action.data)
    case at.FETCH_SUB_NUM:
      return state.updateIn([ 'license' ], () => action.data)
    case at.FETCH_VERSION:
      return state.updateIn([ 'version' ], () => action.data)
    default:
      return state
  }
}
