import { InputNode } from './inputNode';
import { LLMNode } from './llmNode';
import { OutputNode } from './outputNode';
import { TextNode } from './textNode';
import { createConfigNode } from './ConfigNode';
import { nodeConfigs } from './nodeConfigs';

const customNodeComponents = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
};

// Custom nodes can opt into hand-written behavior, while simple nodes are
// generated from config to keep the toolbar and canvas registration scalable.
const nodeComponents = Object.fromEntries(
  Object.entries(nodeConfigs).map(([type, config]) => [
    type,
    customNodeComponents[type] || createConfigNode(config),
  ])
);

// The registry is the single source of truth for both toolbar items and
// React Flow node rendering, preventing the two lists from drifting apart.
export const toolbarNodes = Object.values(nodeConfigs).map(({ type, label }) => ({
  type,
  label,
}));

export const nodeTypes = Object.fromEntries(
  Object.entries(nodeComponents).map(([type, component]) => [type, component])
);

export const getNodeConfig = (type) => nodeConfigs[type];

// New node data starts with shared metadata, then merges node-specific defaults.
export const getInitialNodeData = (id, type) => {
  const config = getNodeConfig(type);
  const defaultData = typeof config?.defaultData === 'function'
    ? config.defaultData({ id, type })
    : config?.defaultData || {};

  return {
    id,
    nodeType: type,
    ...defaultData,
  };
};
