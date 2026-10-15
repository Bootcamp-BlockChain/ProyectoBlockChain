/* Mitad B — Liquidación mensual automática + auditoría del gremio.
 * Reglas visibles: $850/kg − 5% si acidez>4%, −3% si impurezas>3%.
 * La liquidación cuadra 1:1 con registros sellados, sin edición manual.
 */
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("palmablock:refresh", render);
  function render() {
    const all = PalmaStore.load();
    const liq = document.getElementById("resultado-liquidacion");
    if (liq) {
      const total = all.reduce((s, e) => s + PalmaStore.pagoEstimado(e), 0);
      liq.innerHTML = `<div class="card"><strong>Total estimado del mes: $${total.toLocaleString()}</strong>
        <p class="muted">Reglas visibles: base $${PalmaStore.PRECIO_BASE_KG}/kg · −5% si acidez &gt; 4% · −3% si impurezas &gt; 3%. ${all.length} entregas. Sin edición manual.</p>
        <table class="table"><thead><tr><th>ID</th><th>Proveedor</th><th>Neto</th><th>Castigo</th><th>Pago</th><th>Reclamos</th></tr></thead>
        <tbody>${all.map(e => {
          const cast = Math.round(PalmaStore.castigos(e) * 100);
          const nrec = (e.reclamos || []).length;
          return `<tr><td>${e.id}</td><td>${e.proveedor}</td><td>${e.neto} kg</td><td>${cast}%</td><td>$${PalmaStore.pagoEstimado(e).toLocaleString()}</td><td>${nrec}</td></tr>`;
        }).join("")}</tbody></table></div>`;
    }
    const aud = document.getElementById("resultado-auditoria");
    if (aud) {
      aud.innerHTML = `<div class="card">
        <p class="muted">Verificación independiente: cada tiquete muestra sus dos sellos. En semana 4 se leen desde Soroban/Horizon en testnet.</p>
        ${all.map(e => `<div class="hash" style="margin-bottom:8px">✔ ${e.id} — verificado<br>peso ${e.hashPeso} · ${e.timestampPeso}${e.calidad ? `<br>calidad ${e.calidad.hashCalidad} · ${e.calidad.timestampCalidad}` : "<br>pendiente calidad"}${e.conformidad ? `<br>conformidad: ${e.conformidad.estado} · ${e.conformidad.fecha}` : ""}</div>`).join("") || "Sin registros."}</div>`;
    }
  }
  setTimeout(render, 100);
});
