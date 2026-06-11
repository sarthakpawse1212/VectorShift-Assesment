import { Handle, Position } from 'reactflow';

const POSITION_BY_SIDE = {
  left: Position.Left,
  right: Position.Right,
  top: Position.Top,
  bottom: Position.Bottom,
};

export const NodeHandle = ({ nodeId, handle }) => {
  const position = POSITION_BY_SIDE[handle.position] || handle.position;
  const handleId = handle.id.includes(nodeId) ? handle.id : `${nodeId}-${handle.id}`;

  return (
    <Handle
      className={`pipeline-node__handle pipeline-node__handle--${handle.type}`}
      type={handle.type}
      position={position}
      id={handleId}
      style={handle.style}
    />
  );
};
