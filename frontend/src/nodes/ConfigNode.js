import { useStore } from '../store';
import { BaseNode } from './BaseNode';

// Config-only nodes use this renderer so adding a simple node only requires
// a nodeConfigs entry instead of a new React component file.
export const createConfigNode = (config) => {
  const ConfigNode = ({ id, data }) => {
    const updateNodeField = useStore((state) => state.updateNodeField);

    return (
      <BaseNode
        id={id}
        title={config.title}
        description={config.description}
        fields={config.fields}
        handles={config.handles}
        data={data}
        onFieldChange={(fieldName, fieldValue) => updateNodeField(id, fieldName, fieldValue)}
      />
    );
  };

  return ConfigNode;
};
