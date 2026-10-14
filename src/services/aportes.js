// Servicio de aportes de la comunidad.
//
// Los aportes se envían por correo con Web3Forms (https://web3forms.com): cada envío
// llega como un correo al dueño de la clave. La clave de acceso es pública por diseño
// (solo permite enviar al correo registrado), así que puede vivir en el código.
//
// Flujo de publicación: llega el correo → si lo apruebas, cópialo a src/data/voces.js
// y aparece en la página Voces.
//
// Al migrar a un backend (por ejemplo Supabase), cambia solo este archivo y conserva
// las firmas de las funciones.

import { voces } from "../data/voces.js";

const CLAVE_WEB3FORMS = "3973ddf0-8384-4e8e-95de-dd7faf4dc3b0";

/** Envía un aporte nuevo al correo de revisión. Las fotos se piden por WhatsApp. */
export async function crearAporte({ tipo, lugar, titulo, texto, autor, contacto }) {
  if (!CLAVE_WEB3FORMS) {
    throw new Error("El formulario aún no está conectado. Escríbenos por WhatsApp o correo mientras tanto.");
  }

  const aporte = {
    tipo,
    lugar,
    titulo: titulo.trim(),
    texto: texto.trim(),
    autor: autor.trim(),
    contacto: contacto.trim(), // privado: solo llega al correo de revisión
    fecha: new Date().toISOString(),
  };

  // FormData (sin cabeceras propias) evita la consulta previa CORS que Web3Forms rechaza.
  const cuerpo = new FormData();
  Object.entries({
    access_key: CLAVE_WEB3FORMS,
    subject: `Nuevo aporte: ${aporte.tipo} · ${aporte.lugar}`,
    from_name: aporte.autor || "Visitante de Cáchira",
    "Tipo": aporte.tipo,
    "Lugar": aporte.lugar,
    "Título": aporte.titulo,
    "Relato": aporte.texto,
    "Autor": aporte.autor || "Anónimo",
    "Contacto (privado)": aporte.contacto || "No dejó contacto",
  }).forEach(([campo, valor]) => cuerpo.append(campo, valor));

  let respuesta;
  try {
    respuesta = await fetch("https://api.web3forms.com/submit", { method: "POST", body: cuerpo });
  } catch {
    throw new Error("No hay conexión. Revisa tu internet e inténtalo otra vez.");
  }

  const datos = await respuesta.json().catch(() => ({}));
  if (!respuesta.ok || !datos.success) {
    throw new Error("No pudimos enviar tu aporte. Inténtalo otra vez en unos minutos.");
  }
  return aporte;
}

/** Aportes aprobados (los que copiaste a src/data/voces.js), sin datos de contacto. */
export async function listarPublicados() {
  return voces.map(({ contacto, ...publico }) => publico);
}

/** Con el envío por correo, la revisión se hace desde la bandeja de entrada. */
export async function listarTodos() {
  return [];
}

/** Sin efecto mientras los aportes lleguen por correo. */
export async function cambiarEstado() {}
