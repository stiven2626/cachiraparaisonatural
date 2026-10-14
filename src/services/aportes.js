// Servicio de aportes de la comunidad.
//
// Hoy guarda todo en localStorage del navegador (sirve para probar en local).
// Para producción, reemplaza estas funciones por llamadas a un backend
// (por ejemplo Supabase: tabla "aportes" + Storage para fotos). La interfaz
// de las funciones no debe cambiar, así las páginas siguen funcionando igual.

const CLAVE = "cachira-aportes";

function leer() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE)) || [];
  } catch {
    return [];
  }
}

function guardar(lista) {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(lista));
  } catch {
    throw new Error("No se pudo guardar el aporte en este navegador.");
  }
}

const leerImagen = (archivo) =>
  new Promise((resolve, reject) => {
    if (!archivo) return resolve(null);
    if (archivo.size > 1.5 * 1024 * 1024) {
      return reject(new Error("La foto pesa más de 1,5 MB. Reduce su tamaño e inténtalo de nuevo."));
    }
    const lector = new FileReader();
    lector.onload = () => resolve(lector.result);
    lector.onerror = () => reject(new Error("No se pudo leer la foto."));
    lector.readAsDataURL(archivo);
  });

/** Crea un aporte nuevo en estado "pendiente". */
export async function crearAporte({ tipo, lugar, titulo, texto, autor, contacto, foto }) {
  const fotoUrl = await leerImagen(foto);
  const aporte = {
    id: crypto.randomUUID(),
    tipo,
    lugar,
    titulo: titulo.trim(),
    texto: texto.trim(),
    autor: autor.trim(),
    contacto: contacto.trim(), // privado: nunca se muestra en la parte pública
    fotoUrl,
    estado: "pendiente",
    fecha: new Date().toISOString(),
  };
  guardar([aporte, ...leer()]);
  return aporte;
}

/** Aportes aprobados, sin datos de contacto. */
export async function listarPublicados() {
  return leer()
    .filter((a) => a.estado === "aprobado")
    .map(({ contacto, ...publico }) => publico);
}

/** Todos los aportes (solo para moderación). */
export async function listarTodos() {
  return leer();
}

/** Cambia el estado: "pendiente" | "aprobado" | "rechazado". */
export async function cambiarEstado(id, estado) {
  guardar(leer().map((a) => (a.id === id ? { ...a, estado } : a)));
}
