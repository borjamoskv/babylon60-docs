---
title: Quickstart
description: Guía de inicio rápido para CORTEX Persist
---

Start logging tamper-evident memories locally in under a minute.

## 1. Install & Initialize

```bash
pip install cortex-persist
cortex init
```

## 2. Store a Fact

Store a memory. This is cryptographically SHA-256 hashed and chained to prior facts in the ledger:

```bash
cortex memory store --agent "risk-bot" --content "Transaction flagged: IP mismatch"
```
*Output esperado:*

```text
[+] Fact stored. Ledger hash: 8f4a2b9e...
```

## 3. Verify Integrity

The `verify` command checks the Merkle root and hash lineage, detecting any manual database tampering.

```bash
cortex verify ledger
```
*Output esperado:*

```text
[✔] VERIFIED: Hash chain intact. Merkle root sealed.
```

## Integation Via SDK

CORTEX wraps your existing state management. It does not replace your embeddings or vector search.

```python
import asyncio
from cortex import CortexEngine

async def main() -> None:
    engine = CortexEngine()

    receipt = await engine.store_fact(
        content="User approved transaction $5,000",
        fact_type="decision",
        project="fin-fraud-bot",
        tenant_id="customer-123",
    )

    assert await engine.verify(receipt.hash) is True

asyncio.run(main())
```
