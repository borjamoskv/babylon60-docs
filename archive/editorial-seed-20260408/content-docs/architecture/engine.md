---
title: System Architecture
description: Tamper-evident memory architecture and deployment matrices.
---

Traditional logging and standard vector stores fail the epistemic containment test. If an agent hallucinates, or if a database is mutated passively, you lose structural trust in the machine. CORTEX makes mutation mathematically defensible.

## Epistemic Containment 

| Feature                    | Standard Logs (Datadog/ELK) | Standard Vector DB (Pinecone/Qdrant) | **CORTEX Persist**                        |
|:---------------------------|:----------------------------|:-------------------------------------|:------------------------------------------|
| **Primary Goal**           | Observability & Debugging   | Semantic Search & RAG                | **Tamper-Evident Cognitive Lineage**      |
| **Write Integrity**        | Overwritable / Editable     | Silent CRUD operations               | **Append-Only + Cryptographic Hash**      |
| **Fact Mutability**        | Easy (API/Admin access)     | Easy (API/Admin access)              | **Impossible** (Breaks hash chain)        |
| **Evidence Export**        | Text dumps                  | JSON extracts                        | **Zero-Trust Sealed Audit Packs**         |

### What CORTEX does NOT replace (Non-Goals)

- **CORTEX is not a Semantic Search primary DB:** Continue using Qdrant, Pinecone, or Milvus for purely ephemeral RAG chunks. CORTEX stores the *decisions* and core *facts*.
- **CORTEX is not an Observability Platform:** Continue using Datadog or ELK for server metrics, APM, and basic string logs. 
- **CORTEX does not stop hallucinations:** A cryptographically logged lie from an LLM is still a lie. It is merely an *auditable* lie, flagged if it contradicts prior sealed facts.

## Deployment Matrix

- **Tamper-evident memory:** append-only ledger for facts, decisions, and state transitions.
- **Hash-linked records:** SHA-256 chaining across stored entries.
- **Batch integrity proofs:** Merkle checkpoints for efficient verification at scale.
- **Deterministic audit exports:** reproducible evidence for internal review and regulated workflows.

| Environment | Status | Storage / Scaling |
| :--- | :--- | :--- |
| **Local-Only** | ✅ **Production-Ready** | SQLite + WAL + built-in Vector Search. Perfect for single daemons. |
| **Self-Hosted** | 🟡 **Beta** | Multi-tenant. API-driven. Redis cache. Pluggable to your infra. |
| **Cloud-Ready** | ⏳ **Roadmap** | AlloyDB/PostgreSQL + Qdrant. For distributed massive swarms. |

## Latency & Performance 

*Typical execution on a standard cloud instance (4 vCPU, 16 GB RAM).*

| Operation | Median | P95 | Notes |
| :--- | :--- | :--- | :--- |
| **Memory Write** | ~18 ms | ~35 ms | Local SQLite + SHA-256 |
| **Verify Record** | ~5 ms | ~12 ms | Single block validation |
| **Merkle Checkpoint** | ~85 ms | ~140 ms | Aggregating 10k records |
| **Report Export** | ~400 ms | ~800 ms | Lineage traversal |
