from typing import Any


UNVISITED = "unvisited"
VISITING = "visiting"
VISITED = "visited"


def is_directed_acyclic_graph(
    nodes: list[Any],
    edges: list[Any],
) -> bool:
    """Detect cycles in the directed pipeline graph with DFS color states."""
    node_ids = {node.id for node in nodes}
    adjacency = {node_id: [] for node_id in node_ids}

    for edge in edges:
        # React Flow edges are directed: source node output flows into target node input.
        # Unknown node IDs are included defensively so cycle detection still reflects
        # the submitted graph shape instead of failing with a KeyError.
        adjacency.setdefault(edge.source, []).append(edge.target)
        adjacency.setdefault(edge.target, [])

    visit_state = {node_id: UNVISITED for node_id in adjacency}

    def has_cycle(node_id: str) -> bool:
        if visit_state[node_id] == VISITING:
            return True

        if visit_state[node_id] == VISITED:
            return False

        # Mark the node as in the active recursion stack. Seeing it again before
        # it becomes VISITED means a directed cycle exists.
        visit_state[node_id] = VISITING

        for next_node_id in adjacency[node_id]:
            if has_cycle(next_node_id):
                return True

        visit_state[node_id] = VISITED
        return False

    return not any(has_cycle(node_id) for node_id in adjacency)
