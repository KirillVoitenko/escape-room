import { useCallback, useLayoutEffect, useState } from 'react';

export type MatchMediaResult<TConfig extends Record<string, string>> = Record<keyof TConfig, boolean>;

export function useMatchMedia<TConfig extends Record<string, string>>(queries: TConfig): MatchMediaResult<TConfig> {
  const mediaQueries = Object.keys(queries).reduce((accum, current) => ({
    ...accum,
    [current]: window.matchMedia(queries[current])
  }), {});

  const getMatches = useCallback(
    (): MatchMediaResult<TConfig> => {
      const actualMatches: Record<string, boolean> = {};

      Object.entries(mediaQueries).forEach(([key, matchMediaQuery]) => {
        actualMatches[key] = (matchMediaQuery as MediaQueryList).matches;
      });

      return actualMatches as MatchMediaResult<TConfig>;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [queries]
  );

  const [matches, setMatches] = useState(getMatches);

  useLayoutEffect(() => {
    const handler = (): void => setMatches(getMatches);
    const queriesLists = Object.entries(mediaQueries).map(([, query]) => query as MediaQueryList);
    queriesLists.map((query) => query.addEventListener('change', handler));

    return (): void => queriesLists.forEach((query) => query.removeEventListener('change', handler));
  }, [getMatches, mediaQueries]);

  return matches;
}
