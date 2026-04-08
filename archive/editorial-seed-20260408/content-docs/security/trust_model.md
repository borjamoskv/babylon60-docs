---
title: Trust Model & Core Axioms
description: Cryptographic guarantees for AI Generative Output.
---

CORTEX is governed by a strict zero-trust philosophy regarding generative AI output.

## Generative Output is Conjecture

We treat all LLM output as thermodynamically unstable (`Void-State`). It only becomes durable memory *after* crossing the deterministic verification membrane.

## SQL Sandboxing

Agents cannot run arbitrary queries; mutations must pass through rigid schema validation and formal AST checkpoints.

## Tamper Evidence over Access Control

Instead of just hoping administrators don't edit rows, we hash-chain the ledger so any manual modification invalidates the mathematical proof of the memory thread.

> Logs tell you what happened. CORTEX proves exactly what the agent knew, when it knew it, and mathematically guarantees the record hasn't been altered since.

## Why not just logs?

| Feature | Logs & Observability | CORTEX Persist (Trust Layer) |
| :--- | :--- | :--- |
| **Trust Model** | "Trust the process" | **"Verify the evidence"** |
| **Tamper Detection** | Weak (DB mutation is silent) | **Cryptographic** (SHA-256 + Merkle) |
| **Compliance Proof** | Requires manual reconstruction | **O(1) Portable JSON Audit Packs** |
| **Agent Liability** | Ambiguous context reconstruction | **Mathematically defensible lineage** |
