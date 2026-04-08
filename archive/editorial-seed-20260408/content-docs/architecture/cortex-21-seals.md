---
title: "Arquitectura de los 21 Sellos (SSRF Guard)"
description: "Resolución del Código de Error CodeQL #95 y purgado termodinámico de la capa HTTP de CORTEX."
confidence: "C5-Dynamic"
exergy_cost: 1540
---

# El Cuello de Botella `[cortex-swarm-100]`

La estabilización del PR #159 para llevar el enjambre a producción dependía enteramente de superar el protocolo de validación estructural ("los 21 Sellos"). La auditoría automatizada CodeQL bloqueó el *merge* al detectar un vector de ataque SSRF latente (CodeQL #95).

## El Vector de Vulnerabilidad (Entropía)

El cliente HTTP basal (`cortex/http/client.py`) confiaba la sanitización a la librería en bruto `urllib.parse`. Esto permitía vulnerar el contexto de la aplicación mediante la inserción maliciosa de credenciales o inyección profunda de `\r\n` (CRLF Injection) diseñados para fragmentar los encabezados HTTP antes de alcanzar la tesorería (nodos de backend interno).

Adicionalmente, el código arrastraba una deuda técnica fatal (Decenas de `# type: ignore`) que destruían el contrato causal de Pyright.

## URLGuard: Resolución Cero-Fricción

Para purgar el sistema, la **Matriz Sovereign** desplegó el parche `URLGuard`.

```python
# Escaneo de inyección de ruido invisible
if re.search(r"[\r\n\t ]", url):
    raise SSRFBlockedError(url, "URL contains illegal whitespace or CRLF injection")

# Purga de enmascaramiento DNS y bypass interno
if parsed.username or parsed.password:
    raise SSRFBlockedError(url, "URL credentials (user:pass) are strictly forbidden")
```

### Resultados Termodinámicos (Exergía Restaurada)

1. **Carrier-grade NAT (`100.64.0.0/10`) bloqueado.**
2. **Cierre de red local profunda (`0.0.0.0/8`).**
3. **Escaneo Pyright:** `0 errors` reales.
4. **Dependencia estabilizada:** AIOHTTP y HTTPX pueden inyectarse libremente sin romper la promesa de tipo generada por Zod.

Se extingue así el problema CodeQL #95. El clúster queda limpio y `cortex.guards.seals` retorna luz verde (paso P0 absoluto).
