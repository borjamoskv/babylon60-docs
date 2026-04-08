---
title: "Getting Started"
description: "How to initialize the CORTEX engine locally."
---

The CORTEX engine is the core framework for managing deep AI swarms seamlessly on top of macOS environments. 

## Requirements

* macOS (M-series Silicon recommended)
* Node.js v24.x or bun 1.2+
* Python 3.12+ (For the Causal Engine bridges)

## Quick Start (CLI)

1. Clone the core distribution:

   ```bash
   git clone https://github.com/borjamoskv/Cortex-Persist.git
   cd Cortex-Persist
   ```

2. Activate your workspace:

   ```bash
   cortex activate --workspace=dev
   ```

3. Boot the swarm:

   ```bash
   cortex run --mode=swarm-100 --parallel
   ```

> [!NOTE]  
> The Swarm will automatically mount `<appDataDir>/knowledge` as its primary reference bank and will not perform destructive execution on unauthorized files.
