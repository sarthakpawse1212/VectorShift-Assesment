import { NodeField } from './NodeField';
import { NodeHandle } from './NodeHandle';

// Config-driven nodes and custom nodes share this shell so layout, fields,
// and handle rendering stay consistent as the node list grows.
export const BaseNode = ({
  id,
  title,
  description,
  fields = [],
  handles = [],
  data = {},
  onFieldChange,
  children,
  className = '',
  style,
}) => {
  return (
    <div className={`pipeline-node ${className}`.trim()} style={style}>
      {handles.map((handle) => (
        <NodeHandle key={`${id}-${handle.id}`} nodeId={id} handle={handle} />
      ))}
      <div className="pipeline-node__header">
        <span className="pipeline-node__title">{title}</span>
      </div>
      {description && (
        <div className="pipeline-node__description">
          <span>{description}</span>
        </div>
      )}
      {fields.length > 0 && (
        <div className="pipeline-node__fields">
          {fields.map((field) => (
            <NodeField
              key={field.name}
              field={field}
              value={data[field.name]}
              onChange={onFieldChange}
            />
          ))}
        </div>
      )}
      {children}
    </div>
  );
};
