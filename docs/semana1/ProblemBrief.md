# Problem Brief

## Decisión del problema

### Problema elegido

> El problema ganador en una frase, sin mencionar blockchain, y quién lo propuso.

El problema elegido es la incertidumbre y las disputas frecuentes en el proceso de liquidación económica del fruto de palma debido a la falta de transparencia en los registros de pesaje y clasificación de calidad. (Propuesta por Cesar Cadena / cecadena2020cloe)

### Por qué elegimos este

> Qué inclinó al equipo por este problema frente a los demás, según los criterios de la Sesión 1.

El equipo se inclinó por este problema porque representa el escenario de menor complejidad técnica para construir un Producto Mínimo Viable (MVP). Utiliza el caso de uso más directo y probado de blockchain (la notarización de datos como fuente única de verdad) y solo requiere contratos inteligentes básicos para un registro inmutable. A diferencia de las otras propuestas, no exige criptografía avanzada, tokenización de activos físicos complejos, ni interoperabilidad entre múltiples sistemas heredados.

### Propuestas descartadas

> Cada propuesta considerada, quién la propuso y el motivo del descarte.

Licitación pública en contratación estatal (propuesta por Luis David Martínez Galindo / LuisDavid999): Descartada por su alta complejidad técnica. Requeriría arquitecturas robustas de permisos y criptografía avanzada (como esquemas commit-reveal) para mantener las ofertas ocultas hasta la adjudicación.

RetailPass - Trazabilidad de garantías (propuesta por Anderson Rave Jimenez / Anderson0412): Descartada por complejidad media-alta. Exigiría la emisión de tokens intransferibles (SBTs) o NFTs, además de requerir la integración y adopción simultánea de sistemas desconectados (fabricantes, retail, servicio técnico) para que el flujo tenga sentido.

Incremento de precios en propiedad raíz (propuesta por Gustavo Adolfo Gil Rivera / gagr308-droide): Descartada por extrema complejidad (técnica y regulatoria). Implicaba tokenizar activos del mundo real (RWA), integrar hardware físico (etiquetas NFC) y lidiar con los estrictos marcos legales de los títulos de propiedad.

### Cómo tomamos la decisión

> Cómo llegó el equipo al acuerdo: votación, consenso tras debate u otro.

Llegamos a un consenso tras un debate evaluando la relación entre el impacto del problema y la viabilidad técnica para desarrollar el MVP en el tiempo estipulado. Se priorizó el proyecto con menores fricciones técnicas de entrada.

---

## Problem Brief

### Encabezado

> Nombre del proyecto y una frase que describa el problema. Extensión: breve.

PalmaBlock: Trazabilidad y Transparencia Agrícola
Asegurar la confianza en la liquidación del fruto de palma mediante un registro inmutable de peso y calidad entre productores y extractoras.

### Equipo y roles

> Integrantes con su usuario de GitHub, rol asumido por cada persona, responsable de las entregas y canal de coordinación interna. Extensión: breve.

Luis David Martínez Galindo (@LuisDavid999), Anderson Rave Jimenez (@Anderson0412), Gustavo Adolfo Gil Rivera (@gagr308-droide), Ruben Betancur (@RubenDBS): Desarrollador Smart Contracts / Backend.

Anderson Rave Jimenez (@Anderson0412): Product Manager / Frontend.

Gustavo Adolfo Gil Rivera (@gagr308-droide): Arquitecto de Soluciones / QA.

Responsable de entregas: Luis David Martínez Galindo.

Canal de coordinación: Discord y GitHub Projects.

### Problema y evidencia

> Enunciado del problema en una frase, sin mencionar blockchain. Contexto, frecuencia y alcance. Evidencia mínima de que el problema existe: observación directa, experiencia propia, conversaciones o fuentes consultadas, con enlace o cita cuando aplique. Extensión: 150–300 palabras.

Existe una falta de transparencia e inconsistencia en los registros de peso, calidad y volumen del fruto de palma entregado por los palmicultores a las plantas procesadoras, lo que genera constantes disputas sobre la liquidación y el pago final del producto. Este es un problema estructural en la agroindustria que ocurre diariamente durante los ciclos de cosecha.

La evidencia del problema se materializa en las recurrentes reclamaciones administrativas que deben radicar los productores tras recibir sus pagos. Es común que los palmicultores documenten discrepancias entre sus propias estimaciones de cosecha y los tiquetes de báscula o los reportes de acidez/impurezas que la extractora emite de manera unilateral, generando fricciones comerciales continuas y dificultando el acceso de los agricultores a créditos bancarios basados en proyecciones de cosecha.

### Usuario y actores

> Quién sufre el problema y qué necesita resolver. Cómo lo resuelve hoy y qué le cuesta en dinero, tiempo o esfuerzo. Demás actores que intervienen en el flujo, con el papel que cumple cada uno. Extensión: 150–300 palabras.

El usuario que sufre el problema: Los pequeños y medianos palmicultores. Al entregar su producción, dependen exclusivamente de los sistemas internos de la extractora y no cuentan con mecanismos independientes para auditar el peso o la calidad asignada a su fruta.
Qué necesita resolver: Garantizar que los datos recolectados al momento de la entrega no sean alterados retroactivamente para disminuir su pago.
Cómo lo resuelve hoy: Mediante reclamaciones manuales, correos o visitas presenciales al área administrativa de la planta extractora. Esto les cuesta dinero (descuentos o castigos no verificables en el precio final), tiempo (semanas en trámites de auditoría) y un desgaste profundo en la confianza comercial.

Demás actores:

Planta extractora: Actúa como el comprador, opera las básculas y el laboratorio de calidad, y centraliza el registro de datos en su ERP para liquidar el pago.

Asociación o gremio palmicultor: Entidad que podría actuar como veedor u operador de un nodo neutral en la red.

### Flujo actual de valor

> Recorrido paso a paso de cómo se mueve hoy el dinero, la información o el activo, desde el origen hasta el destino. Diagrama o secuencia numerada, con los intermediarios explícitos. Señalar si algún paso responde a una obligación normativa. Extensión: 150–300 palabras.

1. El palmicultor cosecha el fruto y contrata el transporte hacia la planta extractora.

2. El vehículo ingresa a la planta y pasa por la báscula inicial para registrar el peso bruto. (Dato ingresado al ERP de la planta).

3. El personal de la planta toma una muestra del camión y la lleva al laboratorio para determinar el porcentaje de acidez, impurezas y extracción. (Dato ingresado al ERP de la planta).

4. El vehículo descarga el fruto en las tolvas y pasa nuevamente por la báscula para registrar el peso tara, calculando así el peso neto.

5. El sistema centralizado de la planta consolida los datos de pesaje y laboratorio y emite un tiquete (físico o local).

6. Al finalizar el mes, el área financiera de la planta extrae los reportes del ERP, aplica los descuentos por calidad y transfiere el pago al palmicultor.

### Fricciones identificadas

> Puntos concretos donde el flujo falla, se encarece o se demora. Cada fricción indica en qué paso ocurre, qué la causa y a quién afecta. Extensión: 150–300 palabras.

Fricción 1 (Pasos 2 y 4 - Pesaje): El productor depende del registro manual o automatizado que va exclusivamente a la base de datos de la planta. No hay garantía en tiempo real de que el peso registrado coincida inalterablemente con el que llega a liquidación.

Fricción 2 (Paso 3 - Laboratorio): La medición de calidad es un proceso interno y cerrado. Si la planta altera los índices de acidez o impurezas en su sistema horas después de la prueba para aplicar "castigos" económicos, el palmicultor no tiene cómo refutarlo. Afecta directamente los ingresos del productor.

Fricción 3 (Paso 5 y 6 - Almacenamiento y Liquidación): Como el ERP es un entorno 100% controlado por el comprador (la planta), cualquier administrador de base de datos puede realizar modificaciones (updates o deletes) a los registros históricos antes del cierre contable, causando disputas insalvables en los pagos.

### Oportunidad e hipótesis

> Oportunidad priorizada entre las fricciones identificadas, con el motivo de la elección. Hipótesis inicial de por qué blockchain podría mejorar ese punto, expresada en términos de qué cambiaría para el usuario. Extensión: 150–300 palabras.

Oportunidad priorizada: Intervenir en la fricción del Paso 5 (consolidación y almacenamiento de los datos de entrega). Elegimos esta porque, independientemente de cómo se tome la medida física, blindar el dato exacto en el instante en que se genera elimina el riesgo de alteración maliciosa en el periodo previo al pago.

Hipótesis: Si integramos los resultados de pesaje y laboratorio directamente en un contrato inteligente que escriba la información en una red distribuida en el instante de la medición, el palmicultor tendrá un "tiquete digital inmutable". Esto cambiaría la dinámica de poder: el productor tendría certeza matemática de que las métricas que definen su liquidación no pueden ser modificadas unilateralmente, eliminando las disputas administrativas y reconstruyendo la confianza.

### Criterio de pertinencia

> Justificación de por qué el caso requiere un registro distribuido y no una base de datos tradicional o una integración entre sistemas existentes. Debe apoyarse en al menos uno de los criterios de la Sesión 1: varias partes que no confían entre sí necesitan compartir un mismo registro, el histórico no puede alterarse, o se elimina un intermediario que hoy concentra la confianza. Extensión: 150–300 palabras.

Este caso exige un registro distribuido por el criterio de que partes que no confían totalmente entre sí necesitan compartir un registro histórico inalterable.

La extractora y el palmicultor tienen incentivos económicos contrapuestos: la planta podría beneficiarse al reportar menor peso o peor calidad, mientras que el agricultor busca maximizar su registro. Si se usa una base de datos tradicional (SQL o nube convencional), la planta actúa como el intermediario que concentra la confianza; ella posee las credenciales de administrador y puede alterar el registro a su favor sin dejar rastros auditables. Blockchain elimina este monopolio de los datos, creando una única fuente de la verdad compartida (un ledger común) donde cada registro de entrega es inmutable, transparente para ambas partes y sellado criptográficamente con tiempo.

### Supuestos y riesgos

> Dos o tres supuestos que tendrían que ser ciertos para que la hipótesis funcione, y qué podría invalidarla. Extensión: 150–300 palabras.

Supuesto 1: Es posible integrar, mediante interfaces de programación (APIs) u oráculos, los sensores físicos de las básculas y equipos de laboratorio para que el dato viaje a la blockchain sin intervención de digitación humana (mitigando el problema de "basura entra, basura sale").

Supuesto 2: Los pequeños productores tienen acceso a un dispositivo móvil (smartphone) con conexión a internet básica para consultar su bóveda de tiquetes y verificar las entregas en tiempo real.

Riesgo que invalidaría la hipótesis: Que las plantas extractoras se nieguen a adoptar el sistema, ya sea por aversión a los costos de integración técnica, o como rechazo a perder el "monopolio de la información" frente a sus proveedores. Si el actor procesador no participa, la red carece de utilidad.
