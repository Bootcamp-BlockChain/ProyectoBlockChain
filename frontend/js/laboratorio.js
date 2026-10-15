/* Mitad A — LuisDavid999: carga de laboratorio (una sola escritura) */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-lab");
  if (!form) return;
  const refreshSelect = () => {
    const sel = document.getElementById("select-entregas");
    const pendientes = PalmaStore.load().filter(e => !e.calidad);
    sel.innerHTML = pendientes.length
      ? pendientes.map(e => `<option value="${e.id}">${e.id} · ${e.proveedor} · ${e.neto} kg</option>`).join("")
      : `<option value="">Sin pendientes — registre en Báscula</option>`;
  };
  refreshSelect();
  window.addEventListener("palmablock:refresh", refreshSelect);

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const fd = new FormData(form);
    try {
      const e = PalmaStore.sellarCalidad(fd.get("entregaId"), {
        acidez: parseFloat(fd.get("acidez")),
        impurezas: parseFloat(fd.get("impurezas")),
        obs: (fd.get("obs") || "").trim(),
      });
      const box = document.getElementById("resultado-lab");
      box.classList.remove("hidden");
      box.innerHTML = `<strong>✔ Calidad sellada para ${e.id}</strong>
        <p>Acidez ${e.calidad.acidez}% · Impurezas ${e.calidad.impurezas}% · Pago estimado: <strong>$${PalmaStore.pagoEstimado(e).toLocaleString()}</strong></p>
        <div class="hash">hashCalidad: ${e.calidad.hashCalidad}<br>${e.calidad.timestampCalidad}</div>`;
      form.reset(); refreshSelect();
      if (window.PalmaApp) window.PalmaApp.refresh();
    } catch (err) { alert(err.message); }
  });
});
