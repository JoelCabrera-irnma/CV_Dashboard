
import {useDroppable} from '@dnd-kit/core';
import './styles/dropable.css'

export function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });

  const style = {
    opacity: isOver ? 1 : 0.5
  };

  return (
    <div ref={setNodeRef} style={style} className='boxTierList'>
      {props.children}
    </div>
  );
}
  