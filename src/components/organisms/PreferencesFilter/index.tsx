import * as S from './styles';
import { PoppingsSemiBold } from '../../../styles/fonts';
import { indicators } from './mocks.ts';
import ArrayCurved from '../../../assets/icons/curved_arrow_up.svg';
import { useForm } from '@mantine/form';
import {
  FormDragbleProps,
  IndicatorProps,
} from '../../../interfaces/indicators.ts';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import IndicatorDrag from '../../atomos/IndicatorDrag/index.tsx';
import ButtonGenarete from '../../atomos/ButtonGenarete/index.tsx';
import DraggableElement from '../../molecules/DragbleDiv/index.tsx';

type PreferencesFilterProps = {
  onClickGenarete: () => void;
};

const PreferencesFilter = ({ onClickGenarete }: PreferencesFilterProps) => {
  const form = useForm<FormDragbleProps>({
    initialValues: {
      characteristicsArray: [
        {
          name: 'Must-Have',
          isBorder: true,
          indicators: [],
          id: 1,
        },
        {
          name: 'Important',
          isBorder: false,
          indicators: [],
          id: 2,
        },
        {
          name: 'Nice-To-Have',
          isBorder: true,
          indicators: [],
          id: 4,
        },
      ],
      allIndicators: [...indicators],
    },
  });

  const onDragEnd = (result: any) => {
    const filteredIndicatorSource = indicators.filter(
      (indicator) => indicator.id === result.source.index,
    );

    const deleteAllArrays = form.values.allIndicators.filter(
      (indicator) => indicator.id !== result.source.index,
    );

    if (result.destination.droppableId === 'all-indicators') {
      const filteredFromUp = indicators.filter(
        (indicator) => String(indicator.id) === result.draggableId,
      );
      form.insertListItem('allIndicators', filteredFromUp[0]);
    }

    if (result.destination.droppableId === 'Must-Have') {
      form.insertListItem(
        'characteristicsArray.0.indicators',
        filteredIndicatorSource[0],
      );
      form.setFieldValue('allIndicators', deleteAllArrays);
    }

    if (result.destination.droppableId === 'Important') {
      form.insertListItem(
        'characteristicsArray.1.indicators',
        filteredIndicatorSource[0],
      );
      form.setFieldValue('allIndicators', deleteAllArrays);
    }
    if (result.destination.droppableId === 'Nice-To-Have') {
      form.insertListItem(
        'characteristicsArray.2.indicators',
        filteredIndicatorSource[0],
      );
      form.setFieldValue('allIndicators', deleteAllArrays);
    }
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <S.PreferencesFilterWrapper>
          {form.values.characteristicsArray.map((item, index) => (
            <DraggableElement
              elements={item.indicators}
              prefix={item.name ?? ''}
              key={index}
            />
          ))}
        </S.PreferencesFilterWrapper>

        <S.DragInformationMessage>
          <img src={ArrayCurved} alt="Drag down to up" />
          <PoppingsSemiBold>
            Drag characteristics to the areas above And set their order of
            importance
          </PoppingsSemiBold>
          <ButtonGenarete
            onClickNext={() => onClickGenarete()}
            text="Generate Your Heat map"
          />
        </S.DragInformationMessage>

        <S.CarrouselDragField>
          <Droppable droppableId="all-indicators">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`todos  ${
                  snapshot.isDraggingOver ? 'dragcomplete' : 'remove'
                }`}
              >
                {form.values.allIndicators.map((indicator: IndicatorProps) => (
                  <IndicatorDrag
                    id={String(indicator.id)}
                    indicator={indicator.indicator}
                    group={indicator.group}
                    index={indicator.index}
                    key={indicator.index}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </S.CarrouselDragField>
      </DragDropContext>
    </>
  );
};

export default PreferencesFilter;
