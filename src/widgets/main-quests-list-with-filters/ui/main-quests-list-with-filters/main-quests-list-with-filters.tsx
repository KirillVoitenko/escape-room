import { JSX, useState } from 'react';
import { useAppSelector } from '@shared/lib/redux';
import { mainQuestsListSelector, QuestLevel, QuestType } from '@entities/quest';
import { MainQuestsList } from '@features/main-quests-list';
import { Nullable } from '@shared/model';
import { FilterPanel } from '@shared/ui/filter-panel';
import { EmptyQuestsMessage, GENRE_FILTER_ITEMS_CONFIG, LEVEL_FILTER_ITEMS_CONFIG } from '@widgets/main-quests-list-with-filters/config';
import { GenreFilterItem } from '../genre-filter-item';
import { LevelFilterItem } from '../level-filter-item';
import { MessageBlock } from '@shared/ui/message-block';

export function MainQuestsListWithFilters(): JSX.Element {
  const quests = useAppSelector(mainQuestsListSelector);
  const [genreFilter, setGenreFilter] = useState<Nullable<QuestType>>(null);
  const [levelFilter, setLevelFilter] = useState<Nullable<QuestLevel>>(null);

  const filteredQuests = quests.filter((current) => {
    const isNeededGenre = genreFilter === null || current.type === genreFilter;
    const isNeededLevel = levelFilter === null || current.level === levelFilter;

    return isNeededGenre && isNeededLevel;
  });

  return quests.length
    ? (
      <>
        <div className='page-content__item'>
          <form className='filter' action='#' method='get'>
            <fieldset className='filter__section'>
              <legend className='visually-hidden'>Тематика</legend>
              <FilterPanel
                activeFilter={genreFilter}
                items={GENRE_FILTER_ITEMS_CONFIG}
                onFilterChange={setGenreFilter}
                renderItem={(config, filterChangeHandler, isActive) => (
                  <GenreFilterItem key={config.id} config={config} onFilterChange={filterChangeHandler} isActive={isActive} />
                )}
              />
            </fieldset>
            <fieldset className='filter__section'>
              <legend className='visually-hidden'>Сложность</legend>
              <FilterPanel
                activeFilter={levelFilter}
                items={LEVEL_FILTER_ITEMS_CONFIG}
                onFilterChange={setLevelFilter}
                renderItem={(config, filterChangeHandler, isActive) => (
                  <LevelFilterItem key={config.id} config={config} onFilterChange={filterChangeHandler} isActive={isActive} />
                )}
              />
            </fieldset>
          </form>
        </div>
        {
          filteredQuests.length
            ? <MainQuestsList quests={filteredQuests} />
            : <MessageBlock message={EmptyQuestsMessage.EmptyQuestsByFilter} />
        }
      </>
    )
    : <MessageBlock message={EmptyQuestsMessage.EmptyQuests} />;
}
