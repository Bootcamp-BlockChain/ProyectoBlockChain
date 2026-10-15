/* Mitad B — COMPAÑERO: liquidación + auditoría (vista mínima).
 * El compañero completa reglas visibles y verificación en sus commits.
 */
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("palmablock:refresh", renderLiquidacion);
  function renderLiquidacion() {
    const all = PalmaStore.load();
    const liq = document.getElementById("resultado-liquidacion");
    if (liq) {
      const total = all.reduce((s, e) => s + PalmaStore.pagoEstimado(e), 0);
      liq.innerHTML = `<div class="card"><strong>Total estimado del mes: $${total.toLocaleString()}</strong>
        <p class="muted">Regla visible: $850/kg − 5% si acidez&gt;4%, −3% si impurezas&gt;3%. ${all.length} entregas.</p>
        <table class="table"><thead><tr><th>ID</th><th>Neto</th><th>Pago</th></tr></thead>
        <tbody>${all.map(e => `<tr><td>${e.id}</td><td>${e.neto} kg</td><td>$${PalmaStore.pagoEstimado(e).toLocaleString()}</td></tr>`).join("")}</tbody></table></div>`;
    }
    const aud = document.getElementById("resultado-auditoria");
    if (aud) {
      aud.innerHTML = `<div class="card">${all.map(e => `<div class="hash" style="margin-bottom:8px">${e.id} · peso ${e.hashPeso} · ${e.timestampPeso}${e.calidad ? `<br>calidad ${e.calidad.hashCalidad} · ${e.calidad.timestampCalidad}` : ""}</div>`).join("") || "Sin registros."}<p class="muted">Verificación: cada hash + timestamp es el ancla que en semana 4 vivirá en Soroban/Stellar Testnet.</p></div>`;
    }
  }
  setTimeout(renderLiquidacion, 100);
});
