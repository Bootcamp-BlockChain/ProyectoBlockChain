/* PalmaBlock Store — capa de datos mock (testnet simulada).
 * Responsable Mitad A: LuisDavid999
 * En semana 4 el backend + Soroban reemplazan mockHash() por llamada real.
 */
const PalmaStore = (() => {
  const KEY = "palmablock_entregas_v1";
  const PRECIO_BASE_KG = 850; // COP ejemplo visible en liquidación

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch { return []; }
  }
  function save(all) { localStorage.setItem(KEY, JSON.stringify(all)); }

  // Hash demo determinístico (no criptográfico). En prod: SHA-256 + Soroban.
  function mockHash(str) {
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0; i < str.length; i++) {
      const ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return ("0000000" + (h2 >>> 0).toString(16)).slice(-8) + ("0000000" + (h1 >>> 0).toString(16)).slice(-8);
  }

  function nextId(all) {
    const n = String(all.length + 1).padStart(4, "0");
    return `PB-2026-${n}`;
  }

  function sellarPeso({ proveedor, placa, bruto, tara }) {
    const all = load();
    const neto = +(bruto - tara).toFixed(2);
    if (neto <= 0) throw new Error("El peso neto debe ser mayor a 0.");
    const id = nextId(all);
    const timestamp = new Date().toISOString();
    const hash = mockHash(`${id}|${proveedor}|${placa}|${bruto}|${tara}|${timestamp}`);
    const entrega = { id, proveedor, placa, bruto:+bruto, tara:+tara, neto, hashPeso: hash, timestampPeso: timestamp, calidad: null, conformidad: null };
    all.push(entrega);
    save(all);
    return entrega;
  }

  function sellarCalidad(entregaId, { acidez, impurezas, obs }) {
    const all = load();
    const e = all.find(x => x.id === entregaId);
    if (!e) throw new Error("Entrega no encontrada.");
    if (e.calidad) throw new Error("Ya tiene calidad sellada: cree una corrección visible (no se permite editar).");
    const timestamp = new Date().toISOString();
    const hash = mockHash(`${e.id}|${acidez}|${impurezas}|${timestamp}|${e.hashPeso}`);
    e.calidad = { acidez:+acidez, impurezas:+impurezas, obs: obs || "", hashCalidad: hash, timestampCalidad: timestamp };
    save(all);
    return e;
  }

  function castigos(e) {
    if (!e.calidad) return 0;
    // Regla visible y simple: acidez >4% descuenta 5%, impurezas >3% descuenta 3%.
    let d = 0;
    if (e.calidad.acidez > 4) d += 0.05;
    if (e.calidad.impurezas > 3) d += 0.03;
    return d;
  }

  function pagoEstimado(e) {
    const bruto = e.neto * PRECIO_BASE_KG;
    return Math.round(bruto * (1 - castigos(e)));
  }

  function seed() {
    if (load().length) return;
    const demo = sellarPeso({ proveedor: "Demo — Finca El Palmar", placa: "XKL-123", bruto: 5200, tara: 1800 });
    sellarCalidad(demo.id, { acidez: 3.2, impurezas: 2.1, obs: "Muestra OK" });
  }

  return { load, sellarPeso, sellarCalidad, pagoEstimado, castigos, PRECIO_BASE_KG, seed };
})();
