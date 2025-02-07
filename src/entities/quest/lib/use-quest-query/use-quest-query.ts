import { useAppDispatch } from '@shared/lib/redux';
import { Nullable, RoutesEnum } from '@shared/model';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setLoadingAction } from '@shared/model';
import { AxiosError } from 'axios';
import { StatusCodes } from 'http-status-codes';

type UseQuestQueryReturn<TDataType> = {
  data: Nullable<TDataType>;
}

export function useQuestQuery<TDataType>(questQuery: () => Promise<TDataType>): UseQuestQueryReturn<TDataType> {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState<Nullable<TDataType>>(null);

  useEffect(
    () => {
      let hookIsRendered = false;

      const fetchQuery = async () => {
        if (!hookIsRendered) {
          try {
            dispatch(setLoadingAction(true));
            const queryResult = await questQuery();
            setData(queryResult);
          } catch (err) {
            const hasNotFoundError = err instanceof AxiosError && err?.response?.status === StatusCodes.NOT_FOUND;
            navigate(
              hasNotFoundError ? RoutesEnum.NotFound : RoutesEnum.Error,
              { replace: true }
            );
          } finally {
            dispatch(setLoadingAction(false));
          }
        }

      };

      fetchQuery();

      return () => {
        hookIsRendered = true;
      };
    },
    [dispatch, navigate, questQuery]
  );

  return {
    data
  };
}
