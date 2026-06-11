// toolbar.js

import { DraggableNode } from './draggableNode';
import { toolbarNodes } from './nodes/nodeRegistry';

export const PipelineToolbar = () => {

    return (
        <aside className="pipeline-toolbar" aria-label="Pipeline nodes">
            <div className="pipeline-toolbar__nodes">
                {toolbarNodes.map((node) => (
                    <DraggableNode key={node.type} type={node.type} label={node.label} />
                ))}
            </div>
        </aside>
    );
};
