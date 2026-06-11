const PIPELINE_PARSE_URL = 'http://localhost:8000/pipelines/parse';

export const parsePipeline = async ({ nodes, edges }) => {
  const response = await fetch(PIPELINE_PARSE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nodes, edges }),
  });

  if (!response.ok) {
    throw new Error(`Pipeline parse failed with status ${response.status}`);
  }

  return response.json();
};
