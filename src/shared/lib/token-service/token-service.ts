import type { IToken } from './token-interface';
import { LocalStorageToken } from './token';

const AUTHORIZATION_TOKEN_NAME = 'ESCAPE_ROOM/AUTHORIZATION_TOKEN';

export class TokenService {
  private authorizationTokenInstance: IToken<string>;

  constructor() {
    this.authorizationTokenInstance = new LocalStorageToken(AUTHORIZATION_TOKEN_NAME);
  }

  public get authorizationToken(): IToken<string> {
    return this.authorizationTokenInstance;
  }
}

const tokenServiceInstance = new TokenService();

export { tokenServiceInstance };
