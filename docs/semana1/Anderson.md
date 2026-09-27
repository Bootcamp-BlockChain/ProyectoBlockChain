# RetailPass: trazabilidad de garantías para fabricantes y consumidores

**Propuesto por:** Anderson Rave Jimenez  
**Usuario operativo principal:** equipo de garantías o servicio posventa del fabricante  
**Usuario final beneficiario:** consumidor  
**Patrocinador e implementador principal:** fabricante

## El problema

Los fabricantes tienen dificultades para verificar de forma confiable la fecha de inicio, la vigencia y el historial de las garantías de los productos vendidos mediante comercios y centros de servicio externos.

## ¿Quién lo sufre?

El usuario principal es el responsable de garantías o servicio posventa del fabricante. Para decidir si una reclamación procede, necesita confirmar cuándo se entregó el producto al consumidor, si la garantía continúa vigente, si el artículo ya fue reparado o reemplazado y si existen solicitudes anteriores relacionadas con el mismo producto. Cuando esta información se encuentra distribuida entre varios sistemas o documentos, la validación requiere consultas manuales y puede producir demoras, errores o reclamaciones inconsistentes.

El consumidor también sufre el problema. Puede tener dificultades para demostrar la fecha de adquisición o conocer el estado de su garantía, especialmente si no conserva el comprobante de compra. Esto prolonga la atención y puede generar inconformidad con la marca.

El comerciante y los centros de servicio son actores habilitadores: conocen la fecha de entrega, las reparaciones y los cambios, pero no siempre comparten esa información de forma integrada con el fabricante. La [Superintendencia de Industria y Comercio](https://sedeelectronica.sic.gov.co/index.php/temas/proteccion-al-consumidor/derechos-y-deberes/fallas-en-un-producto) señala que productores y proveedores deben responder por la efectividad de la garantía, por lo que el fabricante enfrenta un riesgo operativo y regulatorio cuando no puede reconstruir el historial del producto.

## ¿Cómo se resuelve hoy y qué cuesta?

Actualmente, el consumidor presenta una reclamación ante el comercio o el fabricante y aporta la información disponible, como la factura, el serial o los datos del producto. El comercio consulta sus registros de venta; el fabricante revisa la vigencia y las condiciones de la garantía; y, si hubo una reparación, también puede necesitar información del centro de servicio. Cuando los sistemas no están conectados, las partes intercambian correos, documentos o llamadas para reconstruir el caso.

Este proceso consume tiempo del personal de garantías y servicio al cliente, aumenta el tiempo de respuesta y dificulta detectar solicitudes duplicadas o datos inconsistentes. Para el consumidor implica más trámites y espera. Para el comercio representa búsquedas históricas y atención de casos que finalmente debe resolver el fabricante. Además, una decisión basada en información incompleta puede terminar en una reclamación rechazada incorrectamente, un costo asumido sin suficiente validación o una queja ante una autoridad de protección al consumidor.

## ¿Por qué creo que blockchain podría aportar?

Mi hipótesis es que RetailPass podría ofrecer un pasaporte digital para cada producto, con un historial verificable de su entrega, vigencia de garantía, reparaciones, cambios y reclamaciones. El fabricante lideraría la implementación; los comercios registrarían o confirmarían la entrega al consumidor; los centros de servicio añadirían las intervenciones autorizadas; y el consumidor consultaría la información necesaria para ejercer su garantía.

Blockchain podría aportar porque intervienen organizaciones independientes que necesitan compartir información, pero ninguna debería poder modificar unilateralmente el historial. Un registro distribuido y con eventos inalterables permitiría verificar la procedencia de cada dato, reducir reclamaciones duplicadas o inconsistentes y disminuir las validaciones manuales. Para proteger la privacidad, la información personal y los documentos completos no tendrían que almacenarse directamente en la cadena; podrían conservarse en sistemas autorizados y registrar únicamente identificadores, estados o pruebas verificables.

