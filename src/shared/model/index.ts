import { Classed, ClassedAndStyled, Styled } from './style-types';
import { Nullable } from './nullable';
import { ElementSize } from './element-size';
import { RoutesEnum } from './routes';
import { BaseFetchedState } from './base-fetched-state';
import { AppDispatch, RootState } from './store';
import { ServerEndpoints } from './server-endpoints';
import { globalLoaderSelector, globalLoaderReducer, setLoading } from './global-loader-slice';

export type {
  Classed,
  ClassedAndStyled,
  Nullable,
  Styled,
  ElementSize,
  BaseFetchedState,
  AppDispatch,
  RootState
};

export {
  RoutesEnum,
  ServerEndpoints,
  globalLoaderSelector,
  globalLoaderReducer,
  setLoading as setLoadingAction
};
