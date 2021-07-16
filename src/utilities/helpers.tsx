import { DispatchType, UserAction } from '../store/user/user'

export function simulateHttpRequest(action: UserAction) {
  return (dispatch: DispatchType) => {
    dispatch(action)
  }
}
