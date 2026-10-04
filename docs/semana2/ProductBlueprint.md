# Product Blueprint

**Nombre del proyecto:** PalmaBlock — Trazabilidad y Transparencia Agrícola

**Repositorio (enlace obligatorio):** [ProyectoBlockChain](https://github.com/Bootcamp-BlockChain/ProyectoBlockChain)

---

## Contenido

1. Priorización de historias
2. Propuesta de valor
3. Flujo de usuario
4. Alcance del MVP
5. Lean Canvas
6. Backlog priorizado (Kanban)
7. Arquitectura inicial
8. Uso de Stellar y justificación

---

## 1. Priorización de historias

**Criterio de priorización:** MoSCoW adaptado al riesgo del Problem Brief. Pasa al backlog lo imprescindible para demostrar la "fuente única de verdad" (registro sellado + consulta del productor + liquidación auditable). Queda fuera lo deseable de segunda fase (transporte detallado, créditos bancarios, nodo propio del gremio, certificaciones). Se priorizó por: (a) impacto directo en la disputa de liquidación, (b) incentivo para que la extractora adopte, y (c) viabilidad en un MVP sin hardware costoso.

| Prioridad | Historia | Propuesta por | Por qué entra al backlog |
| :---: | --- | :---: | --- |
| 1 | Como palmicultor quiero consultar en mi celular el tiquete digital de cada entrega para verificar que coincide con lo que vi en báscula. | Luis David | Es el valor central: consulta independiente que rompe la asimetría de información. Sin esto no hay producto. |
| 2 | Como analista de laboratorio quiero cargar los resultados de acidez e impurezas asociados a una entrega para que no puedan ser modificados después. | Luis David | Los castigos de calidad definen el pago y son lo más manipulable; sellarlos ataca la fricción de mayor impacto económico. |
| 3 | Como operario de báscula quiero registrar el peso bruto y tara con un formulario simple ligado a la placa para que el dato quede sellado en el momento de la medición. | Luis David | Captura en origen con marca de tiempo; evita que el dato nazca corrupto ("basura entra, basura sale"). |
| 4 | Como palmicultor quiero ver el detalle de cada entrega con el cálculo de mi pago estimado para saber cuánto voy a recibir antes del cierre de mes. | Anderson | Convierte transparencia abstracta en dinero concreto y da al productor una razón diaria para usar la app. |
| 5 | Como palmicultor quiero radicar una reclamación desde la app adjuntando el tiquete digital como prueba para no tener que ir presencialmente a la planta. | Anderson | Cierra el ciclo de confianza: de "no puedo refutar" a "reclamo con evidencia", fricción 3 del flujo actual. |
| 6 | Como administrador TI quiero gestionar usuarios y permisos por rol para que cada actor solo escriba lo que le corresponde. | Gustavo | Evita que un solo administrador concentre la confianza; condición del criterio de pertinencia blockchain. |
| 7 | Como responsable financiero quiero que la liquidación mensual se calcule automáticamente con reglas visibles para cerrar el mes en horas y no en semanas. | Rubén | Es el incentivo de adopción de la extractora: ahorro operativo que compensa el costo de integración (riesgo principal). |
| 8 | Como proveedor quiero firmar digitalmente cada entrega para dejar constancia de conformidad u observar inconformidad. | Cesar | Convierte el tiquete en acuerdo bilateral y da sustento a la liquidación frente a disputas. |

---

## 2. Propuesta de valor

**Usuario (del Problem Brief):** Pequeños y medianos palmicultores que entregan fruto a plantas extractoras y dependen del tiquete y del ERP unilateral de la planta, sin forma independiente de auditar peso ni calidad.

**Resultado que obtiene:** Un tiquete digital inmutable por cada entrega —peso bruto, tara, neto, acidez e impurezas— consultable desde un celular básico, con pago estimado visible y marca de tiempo sellada en red distribuida. Sabe el mismo día cuánto entregó, qué calidad le asignaron y cuánto le pagarán, y puede reclamar con prueba.

**Por qué elegiría esta solución:** Porque hoy su única defensa es reclamar de palabra semanas después contra una base de datos que controla su contraparte. PalmaBlock le devuelve poder de negociación: la certeza matemática de que su registro no será editado antes del pago, sin trámites presenciales ni costos de auditoría. Para la extractora, el motivo es simétrico: demuestra honestidad, reduce reclamos, acelera cierres y asegura proveeduría de fruta en un mercado de desconfianza.

**En qué se diferencia de cómo lo resuelve hoy:** Hoy el dato vive en papel y en un ERP privado donde un administrador puede reescribir historia; la reclamación es un correo o una visita sin evidencia. Con PalmaBlock el dato se sella en el instante de la medición ante ambas partes, con reglas de liquidación visibles y auditoría abierta al gremio. No es "otro software de la planta": es una fuente única de verdad compartida que ninguna parte controla sola. (203 palabras)

---

## 3. Flujo de usuario

El recorrido cubre una entrega completa, de patio a pago, con tres roles y dos puntos de contacto con la red Stellar. El productor es protagonista en la consulta y la conformidad; la planta opera la captura; el gremio audita como tercero neutral.

| Paso | Rol | Qué hace | Punto de interacción |
| :---: | :--- | --- | --- |
| 1 | Transportador / operario de patio | Ingresa el vehículo, selecciona proveedor y placa, registra peso bruto en báscula | App web de planta (formulario báscula) |
| 2 | Sistema | Sella peso bruto + hora + operador con hash en Stellar y devuelve ID de entrega | Contrato inteligente Soroban vía backend |
| 3 | Analista de laboratorio | Toma la muestra del camión, analiza acidez/impurezas y carga el resultado ligado al ID de entrega | App web de planta (formulario laboratorio) |
| 4 | Sistema | Sella resultado de calidad en Stellar, calcula peso neto tras la tara y genera el tiquete digital | Contrato inteligente + backend |
| 5 | Palmicultor | Recibe notificación, consulta su tiquete, ve pago estimado y firma conformidad u observa inconformidad | App móvil de consulta + billetera Freighter |
| 6 | Personal administrativo | Al cierre de mes genera la liquidación automática con reglas visibles desde los registros sellados | Panel de administración |
| 7 | Palmicultor | Recibe el pago y, si hay diferencia, radica reclamación adjuntando el tiquete como prueba | App móvil (módulo reclamos) |
| 8 | Gremio / auditor | Verifica hashes y marcas de tiempo de cualquier tiquete en disputa | Explorador + panel de auditoría |

El punto crítico es el sellado en los pasos 2 y 4: el dato queda congelado antes de que exista incentivo para alterarlo, que es exactamente donde falla el flujo actual. (208 palabras)

---

## 4. Alcance del MVP

| Dentro del MVP (funcionalidad central) | Fuera del MVP (deseable, para después) |
| --- | --- |
| Registro de entregas (proveedor, placa, peso bruto/tara/neto) con sellado en Stellar | Captura automática IoT directa desde el indicador de báscula |
| Carga de calidad (acidez, impurezas) con una sola escritura + correcciones visibles | Módulo de transporte detallado (GPS, guías, mezcla de cargas) |
| Consulta móvil del tiquete + pago estimado + notificación de registro | Historial crediticio exportable para bancos y certificaciones RSPO |
| Conformidad del productor (firma/aprobación) y reclamación con prueba adjunta | Nodo validador propio del gremio y analítica agregada de la asociación |
| Liquidación mensual automática con reglas visibles y roles/permisos básicos | Pagos automáticos en stablecoins y modo offline completo |
| Panel de auditoría del gremio (verificación de hash y tiempo) | Integración total con el ERP legacy de la planta |

**Por qué el recorte sigue entregando valor:** El MVP blinda el momento exacto donde nace la disputa —la medición y su almacenamiento previo al pago— sin exigir hardware costoso ni cambiar la operación de patio, que es la barrera de adopción de la extractora. Con formularios simples, sellado en red y consulta móvil ya se entrega la "certeza matemática" que el ERP no puede dar: ningún registro puede reescribirse antes de la liquidación y ambas partes lo ven igual. Todo lo recortado (IoT, pagos automáticos, offline total, RSPO) multiplica el valor, pero exige inversión, conectividad rural robusta y madurez de datos que no existen aún. El recorte deja un producto instalable en semanas que ya elimina las tres fricciones del Problem Brief y genera el historial sobre el que se construirá todo lo demás. (196 palabras)

---

## 5. Lean Canvas

**Enlace al Lean Canvas (obligatorio):** [Carpeta semana2 en el repositorio](https://github.com/Bootcamp-BlockChain/ProyectoBlockChain/tree/main/docs/semana2) — el lienzo válido es la tabla siguiente; exportarla como `assets/lean-canvas.png` y enlazar la imagen aquí antes de la entrega en Apex.

| Bloque | Contenido |
| --- | --- |
| Problema | 1) Registros unilaterales de peso/calidad manipulables. 2) Castigos de calidad no verificables. 3) Reclamaciones presenciales que tardan semanas. |
| Segmento de usuarios | Pequeños y medianos palmicultores (usuario principal); planta extractora (comprador/operador); gremio/asociación (veedor). Early adopters: proveedores asociados inconformes con liquidaciones. |
| Propuesta de valor única | Tiquete digital inmutable de cada entrega: lo que se midió es lo que se paga. Sin disputas de palabra contra una base privada. |
| Solución | App planta (báscula + laboratorio) → sellado Soroban/Stellar → app móvil productor (consulta, pago estimado, conformidad, reclamo) → liquidación automática auditable. |
| Canales | Gremio y asociación de palmicultores; piloto con 1 extractora aliada; visitas a planta y WhatsApp rural; demo en asambleas de proveedores. |
| Métricas clave | % entregas selladas < 5 min; % tiquetes consultados por productor; # reclamos con prueba vs. sin prueba; días de cierre de liquidación; disputas de pago/mes. |
| Ventaja diferencial | Fuente única de verdad compartida que ninguna parte controla: sellado criptográfico + veeduría del gremio. Un ERP privado no puede replicarlo. |
| Estructura de costos | Desarrollo y auditoría de contratos; hosting backend + Horizon; comisiones de red Stellar; capacitación en planta; soporte rural. |
| Flujo de ingresos | Suscripción mensual por planta (SaaS) + tarifa por tiquete sellado; módulo premium auditoría/certificación; futura comisión sobre pagos. |

---

## 6. Backlog priorizado (Kanban)

**Enlace al tablero (obligatorio):** [Tablero Kanban en GitHub Projects](https://github.com/Bootcamp-BlockChain/ProyectoBlockChain/projects)

> El tablero se construye con las 8 historias de la sección 1, en columnas `Por hacer · En curso · En revisión · Hecho`, con criterios de aceptación por tarjeta. Guía de cargue: Projects → New project → Board → agregar las tarjetas copiando título, historia y la columna "Criterio de aceptación" de la tabla siguiente.

| # | Tarjeta (historia) | Criterio de aceptación |
| --- | --- | --- |
| 1 | Consulta móvil del tiquete digital | Dado un productor autenticado, cuando abre una entrega, entonces ve pesos, calidad, hash, hora y operador en < 3 toques; funciona en celular de gama baja. |
| 2 | Carga de calidad inmutable | Dado un análisis, cuando se guarda, entonces queda un solo registro por muestra sellado en Stellar; una corrección crea un registro nuevo visible, nunca edita el anterior. |
| 3 | Registro de báscula sellado en origen | Dado un camión en báscula, cuando se registra bruto/tara, entonces se crea el ID de entrega con hash y timestamp en red en < 5 min y sin digitación duplicada. |
| 4 | Pago estimado visible | Dada una entrega sellada, cuando el productor la abre, entonces ve precio base, castigos aplicados y neto a pagar calculados con las reglas publicadas. |
| 5 | Reclamación con prueba | Dado un tiquete, cuando el productor reclama, entonces la reclamación adjunta automáticamente hash + ID verificable y cambia de estado (abierta/resuelta). |
| 6 | Roles y permisos | Dado un usuario, cuando intenta escribir, entonces solo ve y edita los formularios de su rol; un intento fuera de rol es rechazado y auditado. |
| 7 | Liquidación automática mensual | Dado el mes cerrado, cuando administración liquida, entonces el reporte cuadra 1:1 con los registros sellados sin edición manual. |
| 8 | Conformidad del productor | Dada una entrega, cuando el productor la revisa, entonces puede firmar conforme u observar inconformidad, y su decisión queda registrada con fecha. |

---

## 7. Arquitectura inicial

PalmaBlock usa una arquitectura de tres capas con la red Stellar como ancla de confianza. La planta opera una app web ligera; el productor usa una app móvil de consulta; entre ambas hay un backend que valida reglas de negocio y habla con un contrato Soroban. Nada se escribe directo a cadena desde el navegador: el backend firma y envía, y la lectura de verificación puede ir directo vía Horizon. Los datos pesados (nombres, placas) viven en base operativa; en Stellar solo viajan hashes y campos críticos de liquidación, lo que mantiene bajo el costo y protege privacidad.

```text
[App planta: báscula+lab] ─┐
                           ├─→ [Backend API + reglas] ──firma──→ [Soroban / Stellar Testnet] ──→ [Horizon API]
[App móvil productor] ─────┘          ↑                                    ↓
[Panel admin + gremio] ─── lectura ───┘                              [Explorador / verificación]
         Base operativa (Postgres): detalle completo ◄── espejo de── hashes + timestamps
```

| Capa | Componente | Qué hace |
| :--- | --- | --- |
| Interfaz | App web planta + app móvil productor + panel gremio | Captura en patio, consulta y conformidad, auditoría; autenticación simple + Freighter |
| Lógica | Backend API (Node) + Postgres | Valida roles, calcula neto y pago estimado, orquesta firma y guarda detalle operativo |
| Stellar | Contrato Soroban + Horizon + Freighter | Sella hash de entrega/calidad con tiempo, expone lectura verificable, firma del productor |

**En qué punto entra la red:** En el instante de la medición: al guardar peso bruto y al guardar calidad, el backend invoca al contrato que registra hash + timestamp; la liquidación y la auditoría solo leen de ese ancla. Así la confianza nace antes del incentivo a alterar. (205 palabras)

---

## 8. Uso de Stellar y justificación

**Criterio de pertinencia (del Problem Brief):** Varias partes que no confían entre sí (extractora vs. palmicultores, con incentivos económicos contrapuestos) necesitan compartir un mismo registro histórico inalterable, sin que un intermediario —la planta con su ERP— concentre la confianza y pueda reescribirlo.

| Componente de Stellar | Para qué lo usamos | Por qué ese y no otra alternativa |
| --- | --- | --- |
| Contratos inteligentes Soroban (Rust) | Registrar hash de entrega + calidad con timestamp y reglas de "una sola escritura"; correcciones como eventos nuevos | Da lógica auditable en cadena sin montar una L1 propia; Ethereum/L2 sería 10–100x más costoso por tiquete para miles de entregas mensuales |
| Red Stellar Testnet (→ Mainnet) | Ledger compartido de bajo costo y cierre en ~5 s entre planta y gremio | Finalidad rápida y comisiones de fracción de centavo, ideales para alto volumen agro; una base SQL privada no elimina al intermediario que concentra la confianza |
| Horizon API + Stellar SDK (js-stellar-sdk) | El backend escribe y las apps verifican tiquetes sin nodo propio | Evita operar infraestructura; leer directo de Horizon da verificación independiente incluso si el backend de la planta cae |
| Billeteras Freighter (firma del productor) | Conformidad / inconformidad firmada por el palmicultor | Convierte el tiquete en acuerdo bilateral no repudiable; un login con contraseña no da esa prueba criptográfica |
| Memo / hash notarizado por entrega | Enlace entre el detalle off-chain (Postgres) y el sello on-chain | Minimiza datos en cadena (costo y privacidad): en red solo lo necesario para probar integridad, el resto queda operativo |

Stellar se elige porque el caso es notarización de alta frecuencia y bajo valor unitario, no DeFi complejo: necesitamos sellos baratos, rápidos y legibles por terceros, exactamente el punto fuerte de la red. (212 palabras)
