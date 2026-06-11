import { BaseNode } from './BaseNode';
import { nodeConfigs } from './nodeConfigs';

export const LLMNode = ({ id, data }) => {
  const config = nodeConfigs.llm;

  return (
    <BaseNode
      id={id}
      title={config.title}
      description={config.description}
      handles={config.handles}
      data={data}
    />
  );
}
