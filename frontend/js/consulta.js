/* Mitad B — COMPAÑERO: consulta del tiquete + conformidad.
 * Implementación mínima para que el flujo se vea de punta a punta.
 * El compañero debe mejorarla (reclamos, firma Freighter) en sus propios commits.
 */
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-buscar");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const id = document.getElementById("buscar-tiquete").value.trim().toUpperCase();
    const e = PalmaStore.load().find(x => x.id.toUpperCase() === id);
    const box = document.getElementById("resultado-consulta");
    box.classList.remove("hidden");
    if (!e) { box.innerHTML = "No se encontró la entrega."; return; }
    const pago = PalmaStore.pagoEstimado(e);
    box.innerHTML = `<strong>Tiquete ${e.id}</strong>
      <p>${e.proveedor} · Placa ${e.placa} · Neto ${e.neto} kg</p>
      <p>Calidad: ${e.calidad ? `${e.calidad.acidez}% acidez, ${e.calidad.impurezas}% impurezas` : "pendiente"}</p>
      <p>Pago estimado: <strong>$${pago.toLocaleString()}</strong> (base $${PalmaStore.PRECIO_BASE_KG}/kg)</p>
      <div class="hash">peso: ${e.hashPeso}<br>${e.calidad ? "calidad: " + e.calidad.hashCalidad : "sin sello de calidad"}</div>
      <p class="muted">TODO compañero: botón de conformidad / reclamo con firma (semana 4: Freighter).</p>`;
  });
});
