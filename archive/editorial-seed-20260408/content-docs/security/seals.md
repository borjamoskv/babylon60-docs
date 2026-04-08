---
title: "The 21 Seals (Security Architecture)"
description: "CORTEX's production-grade quality and security gates."
---

To merge any code into the `cortex-swarm-100` core, the environment enforces rigorous checks categorized as the "21 Seals".

## Critical Remediations (URLGuard)

A critical focus is placed on eliminating SSRF (Server-Side Request Forgery). The `URLGuard` layer intercepts all outbound HTTP connections originating from:

1. `ResilientGateway`
2. `ScraperEngine`
3. Any autonomous Swarm fetching node.

```python
# Correct HTTP Request Path for Swarm extensions
from cortex.guards.seals import URLGuard

clean_url = URLGuard.sanitize(target_url="http://borjamoskv.com/")
request = CortexHTTP.get(clean_url)
```

> [!WARNING]  
> Any attempt to ingest data from `file://` or loopback `localhost` interfaces without the proper `SafeToAutoRun` seal attached to a verified token will instantly terminate the execution tensor.
