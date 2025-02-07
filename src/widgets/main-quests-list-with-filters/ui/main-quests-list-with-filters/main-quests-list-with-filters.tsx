import { JSX, useState } from 'react';
import { useAppSelector } from '@shared/lib/redux';
import { mainQuestsListSelector } from '@entities/quest';
import { MainQuestsList } from '@features/main-quests-list';
import { Nullable, QuestLevel, QuestType } from '@shared/model';
import { FilterPanel } from '@shared/ui/filter-panel';
import { EmptyQuestsMessage, GENRE_FILTER_ITEMS_CONFIG, LEVEL_FILTER_ITEMS_CONFIG } from '@widgets/main-quests-list-with-filters/config';
import { FilterItem } from '../filter-item';
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
                renderItem={(config, isActive) => (
                  <FilterItem
                    key={config.id}
                    config={config}
                    onFilterChange={setGenreFilter}
                    isActive={isActive}
                    icon={(
                      <svg className='filter__icon' width={config.iconSize.width} height={config.iconSize.height}>
                        <use xlinkHref={config.iconId} />
                      </svg>
                    )}
                  />
                )}
              />
            </fieldset>
            <fieldset className='filter__section'>
              <legend className='visually-hidden'>Сложность</legend>
              <FilterPanel
                activeFilter={levelFilter}
                items={LEVEL_FILTER_ITEMS_CONFIG}
                renderItem={(config, isActive) => (
                  <FilterItem key={config.id} config={config} onFilterChange={setLevelFilter} isActive={isActive} />
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
