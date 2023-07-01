import { DraggableProvided } from "react-beautiful-dnd";

export interface IndicatorProps {    
    indicator: string,
    group: string,
    provided?:  DraggableProvided
    ref?: (element: HTMLElement | null) => void;
    index: number;
    id: number
}

export type CharacteristicsProps = {
    name: string,
    isBorder: boolean,
    indicators: Array<IndicatorProps>,
    id: number;
}

export type FormDragbleProps = { 
    characteristicsArray: Array<CharacteristicsProps>;
    allIndicators: Array<IndicatorProps>
}