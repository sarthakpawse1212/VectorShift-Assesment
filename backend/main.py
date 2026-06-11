from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

try:
    from .graph import is_directed_acyclic_graph
    from .models import PipelineRequest, PipelineResponse
except ImportError:
    from graph import is_directed_acyclic_graph
    from models import PipelineRequest, PipelineResponse


app = FastAPI()

# The CRA frontend usually runs on port 3000 while FastAPI runs on 8000.
# CORS keeps that local split explicit without relaxing every origin.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


@app.post("/pipelines/parse", response_model=PipelineResponse)
def parse_pipeline(pipeline: PipelineRequest):
    """Return assessment metrics for the submitted React Flow graph."""
    return PipelineResponse(
        num_nodes=len(pipeline.nodes),
        num_edges=len(pipeline.edges),
        is_dag=is_directed_acyclic_graph(pipeline.nodes, pipeline.edges),
    )
