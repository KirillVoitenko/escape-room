import type { Nullable } from '@shared/model';

export interface IToken<TTokenType = string> {
  get: () => Nullable<TTokenType>;
  set: (value: TTokenType) => void;
  clear: () => void;
}
