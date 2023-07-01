import { Droppable } from 'react-beautiful-dnd';
import * as S from './styles';
import IndicatorDrag from '../../atomos/IndicatorDrag';

type DraggableElementProps = {
  prefix: string;
  elements: Array<any>;
};

const DraggableElement = ({ prefix, elements }: DraggableElementProps) => {
  return (
    <S.DroppableStyles>
      <S.ColumnHeader>{prefix}</S.ColumnHeader>
      <Droppable droppableId={`${prefix}`}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {elements.map((item: any, index: number) => (
              <IndicatorDrag
                id={String(item.id)}
                key={item.id}
                group={item.groud}
                indicator={item.indicator}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </S.DroppableStyles>
  );
};

export default DraggableElement;
