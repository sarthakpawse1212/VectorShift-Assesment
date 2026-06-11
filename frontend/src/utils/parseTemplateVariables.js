const TEMPLATE_VARIABLE_REGEX = /\{\{\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*\}\}/g;

export const parseTemplateVariables = (text = '') => {
  const variables = [];
  const seenVariables = new Set();

  for (const match of text.matchAll(TEMPLATE_VARIABLE_REGEX)) {
    const variableName = match[1];

    if (!seenVariables.has(variableName)) {
      seenVariables.add(variableName);
      variables.push(variableName);
    }
  }

  return variables;
};
