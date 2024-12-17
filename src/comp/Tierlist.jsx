import { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./Draggable.jsx";
import { Droppable } from "./Dropable.jsx";
import "./styles/TierList.css";

const ICON_SIZE = 40;

const DragDropContainer = () => {
  const [droppedItems, setDroppedItems] = useState(new Set());
  const [droppedItems2, setDroppedItems2] = useState(new Set());
  const [droppedItems3, setDroppedItems3] = useState(new Set());

  const [icons, setIcons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadIcons = async () => {
      try {
        const response = await fetch("/iconList.json");
        if (!response.ok) {
          throw new Error("Error al cargar los iconos");
        }
        const data = await response.json();
        setIcons(data);
      } catch (err) {
        setError(err.message);
        console.error("Error al cargar iconList.json:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadIcons();
  }, []);

  //console.log(icons);
  //console.log(droppedItems);

  const handleDragEnd = ({ over, active }) => {
    if (!over) return;
    console.log(over.id);
    console.log(active.id);
    if (over.id == "droppable") {
      setDroppedItems((prev) => {
        const newItems = new Set(prev);
        newItems.add(active.id);
        return newItems;
      });
    }
    if (over.id == "dropable2") {
      setDroppedItems2((prev) => {
        const newItems = new Set(prev);
        newItems.add(active.id);
        return newItems;
      });
    }
    if (over.id == "dropable3") {
      setDroppedItems3((prev) => {
        const newItems = new Set(prev);
        newItems.add(active.id);
        return newItems;
      });
    }
    let newIcons = [...icons];
    const i = newIcons.indexOf(active.id);
    newIcons.splice(i, 1);
    setIcons(newIcons);
  };

  const renderDraggableItem = (iconName, index) => (
    <Draggable key={`draggable-${iconName}`} id={iconName}>
      <img
        src={`/assets/skills/${iconName}`}
        alt={`Skill icon ${index + 1}`}
        style={{ width: `${ICON_SIZE}px`, height: `${ICON_SIZE}px` }}
        loading="lazy"
      />
    </Draggable>
  );

  if (isLoading) return <div>Cargando iconos...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="tierList">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="source-container">
          {icons.map((iconName, index) => renderDraggableItem(iconName, index))}
        </div>

        <Droppable id="droppable">
          <div className="text-tier">S</div>
          {droppedItems.size === 0 ? (
            <p>Arrastra elementos aquí</p>
          ) : (
            Array.from(droppedItems).map((itemId, index) => {
              return renderDraggableItem(itemId, index);
            })
          )}
        </Droppable>
        <Droppable id="dropable2">
          <div className="text-tier">A</div>
          {droppedItems2.size === 0 ? (
            <p>Aqui suelta</p>
          ) : (
            Array.from(droppedItems2).map((itemId, index) => {
              return renderDraggableItem(itemId, index);
            })
          )}
        </Droppable>
        <Droppable id="dropable3">
          <div className="text-tier">B</div>
          {droppedItems3.size === 0 ? (
            <p>Pull here!!!</p>
          ) : (
            Array.from(droppedItems3).map((itemId, index) => {
              return renderDraggableItem(itemId, index);
            })
          )}
        </Droppable>
      </DndContext>
    </div>
  );
};

export default DragDropContainer;
