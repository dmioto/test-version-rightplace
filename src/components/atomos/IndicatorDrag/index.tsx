import * as S from './styles';
import { MdDragIndicator } from 'react-icons/md';
import { FaLeaf } from 'react-icons/fa';
import { Draggable } from 'react-beautiful-dnd';

type IndicatorDragProps = {
  indicator: string;
  group: string;
  index: number;
  id: string;
};

const IndicatorDrag = ({ indicator, index, id }: IndicatorDragProps) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <S.IndicatorContainer>
            <MdDragIndicator className="drag" />
            <FaLeaf className="icon" />
            <p>{indicator}</p>
          </S.IndicatorContainer>
        </div>
      )}
    </Draggable>
  );
};

export default IndicatorDrag;
