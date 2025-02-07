import { JSX, useCallback } from 'react';
import { PAGE_TITLE } from '@pages/quest-booking-page/config';
import { withBrowserTitle } from '@shared/lib/hocs/with-browser-title';
import { Layout } from '@widgets/layout';
import { generatePath, useParams } from 'react-router-dom';
import type { QuestBookingInfo } from '@entities/booking';
import { ServerEndpoints } from '@shared/model';
import { getApiInstance } from '@shared/lib/api-instance';
import { fetchQuestExtendedAction, questExtendedDataSelector, useQuestQuery } from '@entities/quest';
import { BookingDetails } from '../booking-details';
import { useAppDispatch, useAppSelector } from '@shared/lib/redux';

type PageUrlParams = {
  id: string;
}

function QuestBookingPage(): JSX.Element {
  const { id } = useParams<PageUrlParams>();
  const questData = useAppSelector(questExtendedDataSelector);
  const dispatch = useAppDispatch();

  const bookingsQuery = useCallback(
    async (): Promise<QuestBookingInfo[]> => {
      if (id) {
        if (id !== questData?.id) {
          await dispatch(fetchQuestExtendedAction(id));
        }

        const queryUrl = generatePath(ServerEndpoints.QuestBookings, {questId: id});
        const { data } = await getApiInstance().get<QuestBookingInfo[]>(queryUrl);

        return data;
      }

      throw new Error('Url parameter \'id\' not found!');
    },
    [dispatch, id, questData?.id]
  );

  const { data } = useQuestQuery(bookingsQuery);

  return (
    <Layout.Content className='page-content decorated-page'>
      {(!!data?.length && questData) && <BookingDetails details={data} quest={questData} />}
    </Layout.Content>
  );
}

export const QuestBookingPageWithTitle = withBrowserTitle(QuestBookingPage, PAGE_TITLE);
