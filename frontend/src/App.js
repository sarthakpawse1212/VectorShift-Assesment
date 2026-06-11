import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="app-shell">
      <PipelineToolbar />
      <main className="app-canvas">
        <PipelineUI />
      </main>
      <SubmitButton />
    </div>
  );
}

export default App;
