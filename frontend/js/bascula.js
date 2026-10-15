/* Mitad A — LuisDavid999: registro de báscula */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-bascula");
  if (!form) return;
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const fd = new FormData(form);
    try {
      const entrega = PalmaStore.sellarPeso({
        proveedor: fd.get("proveedor").trim(),
        placa: fd.get("placa").trim().toUpperCase(),
        bruto: parseFloat(fd.get("bruto")),
        tara: parseFloat(fd.get("tara")),
      });
      const box = document.getElementById("resultado-bascula");
      box.classList.remove("hidden");
      box.innerHTML = `<strong>✔ Entrega ${entrega.id} sellada</strong>
        <p>Neto: <strong>${entrega.neto} kg</strong> (${entrega.bruto} − ${entrega.tara})</p>
        <div class="hash">hashPeso: ${entrega.hashPeso}<br>${entrega.timestampPeso} · Stellar Testnet (simulado)</div>
        <p class="muted">Siguiente paso: cargue calidad en la pestaña Laboratorio.</p>`;
      form.reset();
      if (window.PalmaApp) window.PalmaApp.refresh();
    } catch (err) { alert(err.message); }
  });
});
