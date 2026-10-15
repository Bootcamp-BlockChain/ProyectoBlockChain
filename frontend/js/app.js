/* Navegación + panel. Compartido; ambos pueden commitear mejoras. */
window.PalmaApp = {
  refresh() {
    window.dispatchEvent(new Event("palmablock:refresh"));
    this.renderTabla();
  },
  renderTabla() {
    PalmaStore.seed();
    const all = PalmaStore.load();
    const tb = document.querySelector("#tabla-entregas tbody");
    tb.innerHTML = all.map(e => `<tr>
      <td>${e.id}</td><td>${e.proveedor}</td><td>${e.placa}</td><td>${e.neto}</td>
      <td>${e.calidad ? `${e.calidad.acidez}% / ${e.calidad.impurezas}%` : "pendiente"}</td>
      <td>$${PalmaStore.pagoEstimado(e).toLocaleString()}</td>
      <td>${e.calidad ? "sellada" : "en báscula"}</td></tr>`).join("");
    document.getElementById("stats").innerHTML =
      `<div class="card"><strong>${all.length}</strong><br><small>entregas</small></div>
       <div class="card"><strong>${all.filter(e => e.calidad).length}</strong><br><small>selladas</small></div>
       <div class="card"><strong>$${all.reduce((s, e) => s + PalmaStore.pagoEstimado(e), 0).toLocaleString()}</strong><br><small>pago total est.</small></div>`;
  }
};
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav button").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll(".nav button").forEach(x => x.classList.remove("active"));
    document.querySelectorAll(".view").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    document.getElementById("view-" + b.dataset.view).classList.add("active");
  }));
  window.PalmaApp.renderTabla();
});
