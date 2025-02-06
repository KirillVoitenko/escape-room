import store from '../store';

declare namespace ReduxStore {
  type ReduxRootState = ReturnType<typeof store.getState>
  type ReduxAppDispatch = typeof store.dispatch
}
