import { Quest } from '@entities/quest/model';
import { Classed, RoutesEnum } from '@shared/model';
import { QuestPreviewImage } from '@shared/ui/quest-preview-image';
import classNames from 'classnames';
import { JSX, ReactNode } from 'react';
import { DEFAULT_PREVIEW_SIZE } from '@entities/quest/config';
import { generatePath, Link } from 'react-router-dom';
import { createLevelTagInfo, createPersonTagInfo } from '@entities/quest/lib/create-tag-info';
import { QuestTag } from '../quest-tag';

type QuestCardProps = Classed<{
  extraInfo?: ReactNode;
  questAction?: ReactNode;
  quest: Quest;
}>


export function QuestCard({ quest, className, extraInfo, questAction }: QuestCardProps): JSX.Element {
  const cardClassName = classNames('quest-card', className);
  const questUrl = generatePath(RoutesEnum.Quest, { id: quest.id });
  const questTags = [createPersonTagInfo(quest.peopleMinMax), createLevelTagInfo(quest.level)];
  return (
    <div className={cardClassName}>
      <div className='quest-card__img'>
        <QuestPreviewImage
          alt={quest.title}
          src={quest.previewImg}
          webpSrc={quest.previewImgWebp}
          size={DEFAULT_PREVIEW_SIZE}
        />
      </div>
      <div className='quest-card__content'>
        <div className='quest-card__info-wrapper'>
          <Link to={questUrl} className='quest-card__link'>
            {quest.title}
          </Link>
          {extraInfo}
        </div>
        <ul className='tags quest-card__tags'>
          {questTags.map((currentTag) => (
            <QuestTag
              key={`${quest.id}-${currentTag.iconId}`}
              description={currentTag.description}
              iconId={currentTag.iconId}
            />
          ))}
        </ul>
        {questAction}
      </div>
    </div>
  );
}
