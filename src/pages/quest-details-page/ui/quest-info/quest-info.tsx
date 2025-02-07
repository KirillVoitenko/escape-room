import type { QuestExtended } from '@entities/quest';
import { AuthorizationStatusEnum, useAuthorization } from '@entities/user';
import { SearchParamsNames } from '@shared/config';
import { RoutesEnum } from '@shared/model';
import { AdaptiveContainer } from '@shared/ui/adaptive-container';
import { QuestPreviewImage } from '@shared/ui/quest-preview-image';
import { JSX } from 'react';
import { createSearchParams, generatePath, Link } from 'react-router-dom';
import {
  questTypeToDescriptionMap,
  createLevelTagInfo,
  createPersonTagInfo,
  QuestTag
} from '@entities/quest';
import { LEVEL_TAG_SIZE, PERSON_TAG_SIZE } from '@pages/quest-details-page/config';

type QuestInfoProps = {
  quest: QuestExtended;
}

export function QuestInfo({ quest }: QuestInfoProps): JSX.Element {
  const { status } = useAuthorization();
  const bookingPageUrl = generatePath(RoutesEnum.Booking, { id: quest.id });

  const bookingLinkUrl = status === AuthorizationStatusEnum.Authorized
    ? bookingPageUrl
    : `${RoutesEnum.Login}?${createSearchParams({ [SearchParamsNames.ReturnUrl]: bookingPageUrl }).toString()}`;

  const personTagInfo = createPersonTagInfo(quest.peopleMinMax);
  const levelTagInfo = createLevelTagInfo(quest.level);

  return (
    <>
      <div className='decorated-page__decor' aria-hidden>
        <QuestPreviewImage
          alt={quest.title}
          src={quest.coverImg}
          webpSrc={quest.coverImgWebp}
        />
      </div>
      <AdaptiveContainer>
        <div className='quest-page__content'>
          <h1 className='title title--size-l title--uppercase quest-page__title'>
            {quest.title}
          </h1>
          <ul className='tags tags--size-l quest-page__tags'>
            <QuestTag
              description={personTagInfo.description}
              iconId={personTagInfo.iconId}
              iconSize={PERSON_TAG_SIZE}
            />
            <QuestTag
              description={levelTagInfo.description}
              iconId={levelTagInfo.iconId}
              iconSize={LEVEL_TAG_SIZE}
            />
          </ul>
          <p className='subtitle quest-page__subtitle'>
            <span className="visually-hidden">Жанр:</span>
            {questTypeToDescriptionMap.get(quest.type)}
          </p>
          <p className='quest-page__description'>
            {quest.description}
          </p>
          <Link
            to={bookingLinkUrl}
            className='btn btn--accent btn--cta quest-page__btn'
          >
            Забронировать
          </Link>
        </div>
      </AdaptiveContainer>
    </>
  );
}
