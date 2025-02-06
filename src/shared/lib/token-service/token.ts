import { Nullable } from '@shared/model';
import { IToken } from './token-interface';

export class LocalStorageToken implements IToken<string> {
  private tokenName: string;

  constructor(tokenKeyName: string) {
    this.tokenName = tokenKeyName;
  }

  public get = (): Nullable<string> => localStorage.getItem(this.tokenName);

  public set = (value: string): void => {
    localStorage.setItem(this.tokenName, value);
  };

  public clear = (): void => {
    localStorage.removeItem(this.tokenName);
  };
}
