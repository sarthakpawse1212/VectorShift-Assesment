export const nodeConfigs = {
  customInput: {
    type: 'customInput',
    label: 'Input',
    title: 'Input',
    defaultData: ({ id }) => ({
      inputName: id.replace('customInput-', 'input_'),
      inputType: 'Text',
    }),
    fields: [
      { name: 'inputName', label: 'Name', type: 'text' },
      { name: 'inputType', label: 'Type', type: 'select', options: ['Text', 'File'] },
    ],
    handles: [
      { id: 'value', type: 'source', position: 'right' },
    ],
  },
  llm: {
    type: 'llm',
    label: 'LLM',
    title: 'LLM',
    description: 'This is a LLM.',
    handles: [
      { id: 'system', type: 'target', position: 'left', style: { top: `${100 / 3}%` } },
      { id: 'prompt', type: 'target', position: 'left', style: { top: `${200 / 3}%` } },
      { id: 'response', type: 'source', position: 'right' },
    ],
  },
  customOutput: {
    type: 'customOutput',
    label: 'Output',
    title: 'Output',
    defaultData: ({ id }) => ({
      outputName: id.replace('customOutput-', 'output_'),
      outputType: 'Text',
    }),
    fields: [
      { name: 'outputName', label: 'Name', type: 'text' },
      { name: 'outputType', label: 'Type', type: 'select', options: ['Text', 'Image'] },
    ],
    handles: [
      { id: 'value', type: 'target', position: 'left' },
    ],
  },
  text: {
    type: 'text',
    label: 'Text',
    title: 'Text',
    defaultData: () => ({
      text: '{{input}}',
      variables: ['input'],
    }),
    fields: [
      { name: 'text', label: 'Text', type: 'textarea' },
    ],
    handles: [
      { id: 'output', type: 'source', position: 'right' },
    ],
  },
  transform: {
    type: 'transform',
    label: 'Transform',
    title: 'Transform',
    defaultData: ({ id }) => ({
      transformName: id.replace('transform-', 'transform_'),
      operation: 'Map',
    }),
    fields: [
      { name: 'transformName', label: 'Name', type: 'text' },
      { name: 'operation', label: 'Operation', type: 'select', options: ['Map', 'Normalize', 'Extract'] },
    ],
    handles: [
      { id: 'input', type: 'target', position: 'left' },
      { id: 'output', type: 'source', position: 'right' },
    ],
  },
  filter: {
    type: 'filter',
    label: 'Filter',
    title: 'Filter',
    defaultData: ({ id }) => ({
      filterName: id.replace('filter-', 'filter_'),
      condition: '',
    }),
    fields: [
      { name: 'filterName', label: 'Name', type: 'text' },
      { name: 'condition', label: 'Condition', type: 'text' },
    ],
    handles: [
      { id: 'input', type: 'target', position: 'left' },
      { id: 'matched', type: 'source', position: 'right' },
    ],
  },
  merge: {
    type: 'merge',
    label: 'Merge',
    title: 'Merge',
    defaultData: ({ id }) => ({
      mergeName: id.replace('merge-', 'merge_'),
      strategy: 'Concat',
    }),
    fields: [
      { name: 'mergeName', label: 'Name', type: 'text' },
      { name: 'strategy', label: 'Strategy', type: 'select', options: ['Concat', 'Join', 'Union'] },
    ],
    handles: [
      { id: 'left', type: 'target', position: 'left', style: { top: `${100 / 3}%` } },
      { id: 'right', type: 'target', position: 'left', style: { top: `${200 / 3}%` } },
      { id: 'output', type: 'source', position: 'right' },
    ],
  },
  api: {
    type: 'api',
    label: 'API',
    title: 'API',
    defaultData: ({ id }) => ({
      apiName: id.replace('api-', 'api_'),
      method: 'GET',
      url: '',
    }),
    fields: [
      { name: 'apiName', label: 'Name', type: 'text' },
      { name: 'method', label: 'Method', type: 'select', options: ['GET', 'POST', 'PUT', 'DELETE'] },
      { name: 'url', label: 'URL', type: 'text' },
    ],
    handles: [
      { id: 'input', type: 'target', position: 'left' },
      { id: 'response', type: 'source', position: 'right' },
    ],
  },
  condition: {
    type: 'condition',
    label: 'Condition',
    title: 'Condition',
    defaultData: ({ id }) => ({
      conditionName: id.replace('condition-', 'condition_'),
      expression: '',
    }),
    fields: [
      { name: 'conditionName', label: 'Name', type: 'text' },
      { name: 'expression', label: 'Expression', type: 'text' },
    ],
    handles: [
      { id: 'input', type: 'target', position: 'left' },
      { id: 'true', type: 'source', position: 'right', style: { top: `${100 / 3}%` } },
      { id: 'false', type: 'source', position: 'right', style: { top: `${200 / 3}%` } },
    ],
  },
};
