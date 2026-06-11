// submit.js

import { useState } from 'react';
import { shallow } from 'zustand/shallow';
import { parsePipeline } from './api/pipelineApi';
import { useStore } from './store';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError('');
    setResult(null);

    try {
      // Submit the controlled React Flow state exactly as rendered on the canvas.
      const response = await parsePipeline({ nodes, edges });
      setResult(response);
    } catch (submitError) {
      setError(submitError.message || 'Unable to submit pipeline.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="submit-bar">
      <div className="submit-status" aria-live="polite">
        {result && (
          <span className="submit-status__success">
            Nodes: {result.num_nodes} | Edges: {result.num_edges} | DAG: {result.is_dag ? 'Yes' : 'No'}
          </span>
        )}
        {error && <span className="submit-status__error">{error}</span>}
      </div>
      <button
        className="submit-button"
        type="button"
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  );
};
