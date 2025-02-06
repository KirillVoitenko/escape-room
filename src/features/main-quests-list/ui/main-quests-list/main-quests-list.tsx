import type { Quest } from '@entities/quest';
import { QuestCard } from '@entities/quest';
import { Classed } from '@shared/model';
import classNames from 'classnames';
import { JSX } from 'react';

type MainQuestsListProps = Classed<{
  quests: Quest[];
}>;

export function MainQuestsList({ quests, className }: MainQuestsListProps): JSX.Element {
  const gridClassName = classNames('cards-grid', className);
  return (
    <>
      <h2 className='title visually-hidden'>Выберите квест</h2>
      <div className={gridClassName}>
        {quests.map((current) => <QuestCard key={current.id} quest={current} />)}
      </div>
    </>
  );
}
