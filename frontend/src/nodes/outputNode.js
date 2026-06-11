import { useStore } from '../store';
import { BaseNode } from './BaseNode';
import { nodeConfigs } from './nodeConfigs';

export const OutputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const config = nodeConfigs.customOutput;

  return (
    <BaseNode
      id={id}
      title={config.title}
      fields={config.fields}
      handles={config.handles}
      data={data}
      onFieldChange={(fieldName, fieldValue) => updateNodeField(id, fieldName, fieldValue)}
    />
  );
}
