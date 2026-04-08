---
title: "The Anamnesis Engine"
description: "Causal state reconstruction and memory architecture."
---

The **Anamnesis Engine** is CORTEX's implementation for true causal continuity. It provides autonomous nocturnal execution capabilities and semantic context fetching for multi-agent workflows.

## Features

- **Semantic Memory Maps**: Uses IndexedDB / vector embeddings to freeze state snapshots.
- **Aging Protocols**: Irrelevant conversational details "decay" automatically, maximizing token efficiency via the `Token-Reducer-Ω` protocol.
- **Causal Reconstruction**: When resuming a workflow, Anamnesis rebuilds the `Fact` objects needed for Pyright type-safety verification.

## The Rehydration Path

Unlike traditional LangChain pipelines, Anamnesis relies on an explicit read-path returning boundedly typed `Fact` items.

```python
# Reconstruct timeline for 'project-alpha'
timeline = anamnesis.fetch_causal_path(topic="project-alpha", depth=50)

if timeline.is_broken():
    anamnesis.repair_from_ledger()
```

> [!CAUTION]  
> Never directly manipulate the `ledger.db` file. All structural metadata extraction must run through the Anamnesis deterministic bindings.
