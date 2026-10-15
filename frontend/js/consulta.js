/* Mitad B — Consulta del tiquete + conformidad + reclamo.
 * Flujo: buscar por ID -> ver detalle y pago -> firmar conforme / observar -> reclamar con prueba.
 * La firma Freighter real se integra en semana 4; aquí se guarda firma simulada con fecha.
 */
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-buscar");
  if (!btn) return;

  function getAll() { return PalmaStore.load(); }
  function persist(all) { localStorage.setItem("palmablock_entregas_v1", JSON.stringify(all)); }

  btn.addEventListener("click", () => mostrar(false));

  function mostrar(soloId) {
    const id = (soloId || document.getElementById("buscar-tiquete").value).trim().toUpperCase();
    const e = getAll().find(x => x.id.toUpperCase() === id);
    const box = document.getElementById("resultado-consulta");
    box.classList.remove("hidden");
    if (!e) { box.innerHTML = "No se encontró la entrega " + (id || ""); return; }
    const pago = PalmaStore.pagoEstimado(e);
    const conf = e.conformidad ? `<p>Conformidad: <strong>${e.conformidad.estado}</strong> · ${e.conformidad.fecha}${e.conformidad.nota ? " · " + e.conformidad.nota : ""}</p>` : "<p class='muted'>Sin conformidad firmada.</p>";
    const recl = (e.reclamos && e.reclamos.length)
      ? "<ul>" + e.reclamos.map(r => `<li>${r.fecha} — ${r.motivo} [${r.estado}] (prueba: ${r.prueba})</li>`).join("") + "</ul>"
      : "<p class='muted'>Sin reclamos.</p>";
    box.innerHTML = `<strong>Tiquete ${e.id}</strong>
      <p>${e.proveedor} · Placa ${e.placa} · Bruto ${e.bruto} − Tara ${e.tara} = Neto <strong>${e.neto} kg</strong></p>
      <p>Calidad: ${e.calidad ? `${e.calidad.acidez}% acidez, ${e.calidad.impurezas}% impurezas` : "pendiente de laboratorio"}</p>
      <p>Pago estimado: <strong>$${pago.toLocaleString()}</strong> (base $${PalmaStore.PRECIO_BASE_KG}/kg − castigos visibles)</p>
      <div class="hash">prueba hash peso: ${e.hashPeso} · ${e.timestampPeso}<br>${e.calidad ? "prueba hash calidad: " + e.calidad.hashCalidad + " · " + e.calidad.timestampCalidad : "sin sello de calidad"}</div>
      ${conf}${recl}
      <div class="row">
        <button id="btn-conforme">Firmar conforme</button>
        <button id="btn-observar">Observar inconformidad</button>
      </div>
      <div class="card form">
        <label>Radicar reclamo (adjunta el tiquete como prueba)
          <input id="motivo-reclamo" placeholder="Ej. peso no coincide con báscula" />
        </label>
        <button id="btn-reclamar">Radicar reclamo</button>
      </div>
      <p class="muted">Semana 4: estos botones firmarán con Freighter en Stellar Testnet.</p>`;

    document.getElementById("btn-conforme").onclick = () => firmar(e.id, "conforme", "");
    document.getElementById("btn-observar").onclick = () => {
      const nota = prompt("Describa la inconformidad:") || "";
      firmar(e.id, "observada", nota);
    };
    document.getElementById("btn-reclamar").onclick = () => {
      const motivo = document.getElementById("motivo-reclamo").value.trim();
      if (!motivo) { alert("Escriba el motivo del reclamo."); return; }
      const all = getAll();
      const t = all.find(x => x.id === e.id);
      t.reclamos = t.reclamos || [];
      t.reclamos.push({ motivo, estado: "abierta", fecha: new Date().toISOString(), prueba: t.hashPeso + (t.calidad ? "/" + t.calidad.hashCalidad : "") });
      persist(all);
      if (window.PalmaApp) window.PalmaApp.refresh();
      mostrar(t.id);
    };
  }

  function firmar(id, estado, nota) {
    const all = getAll();
    const t = all.find(x => x.id === id);
    t.conformidad = { estado, nota, fecha: new Date().toISOString(), firma: "simulada-local" };
    persist(all);
    if (window.PalmaApp) window.PalmaApp.refresh();
    mostrar(id);
  }
});
