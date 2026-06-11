// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={`toolbar-node toolbar-node--${type}`}
        onDragStart={(event) => onDragStart(event, type)}
        draggable
      >
          <span className="toolbar-node__marker" />
          <span className="toolbar-node__label">{label}</span>
      </div>
    );
  };
  
