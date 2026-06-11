import { useEffect, useMemo, useRef } from 'react';
import { useStore } from '../store';
import { parseTemplateVariables } from '../utils/parseTemplateVariables';
import { BaseNode } from './BaseNode';
import { nodeConfigs } from './nodeConfigs';

const MIN_NODE_WIDTH = 240;
const MAX_NODE_WIDTH = 460;
const CHARACTER_WIDTH = 8;

const getHandleTop = (index, total) => `${((index + 1) / (total + 1)) * 100}%`;

const getTextNodeWidth = (text) => {
  const longestLineLength = Math.max(...text.split('\n').map((line) => line.length), 0);
  const contentWidth = longestLineLength * CHARACTER_WIDTH + 96;

  return Math.min(Math.max(contentWidth, MIN_NODE_WIDTH), MAX_NODE_WIDTH);
};

export const TextNode = ({ id, data }) => {
  const textareaRef = useRef(null);
  const updateNodeData = useStore((state) => state.updateNodeData);
  const config = nodeConfigs.text;
  const text = data?.text ?? config.defaultData().text;
  const variables = useMemo(() => parseTemplateVariables(text), [text]);
  const nodeWidth = useMemo(() => getTextNodeWidth(text), [text]);

  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) {
      return;
    }

    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [text]);

  useEffect(() => {
    if (JSON.stringify(data?.variables || []) !== JSON.stringify(variables)) {
      updateNodeData(id, { variables });
    }
  }, [data?.variables, id, updateNodeData, variables]);

  const handles = [
    ...variables.map((variable, index) => ({
      id: `var-${variable}`,
      type: 'target',
      position: 'left',
      style: { top: getHandleTop(index, variables.length) },
    })),
    { id: 'output', type: 'source', position: 'right' },
  ];

  const handleTextChange = (event) => {
    const nextText = event.target.value;
    updateNodeData(id, {
      text: nextText,
      variables: parseTemplateVariables(nextText),
    });
  };

  return (
    <BaseNode
      id={id}
      title={config.title}
      handles={handles}
      data={data}
      className="text-node"
      style={{ width: nodeWidth }}
    >
      <label className="node-field text-node__field">
        <span className="node-field__label">Text</span>
        <textarea
          ref={textareaRef}
          className="node-field__control node-field__control--textarea text-node__textarea"
          value={text}
          onChange={handleTextChange}
        />
      </label>
      {variables.length > 0 && (
        <div className="text-node__variables" aria-label="Template variables">
          {variables.map((variable) => (
            <span key={variable} className="text-node__variable">
              {variable}
            </span>
          ))}
        </div>
      )}
    </BaseNode>
  );
}
