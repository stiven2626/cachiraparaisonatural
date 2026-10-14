import { municipio } from "../data/municipio.js";

// Botón flotante para escribir por WhatsApp desde cualquier página.
export default function BotonWhatsApp() {
  const { whatsapp, mensajeWhatsapp } = municipio.contacto;
  if (!whatsapp) return null;
  const enlace = `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensajeWhatsapp)}`;

  return (
    <a
      href={enlace}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex items-center gap-2 sm:bottom-6 sm:right-6"
    >
      <span className="pointer-events-none hidden rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-menta-800 opacity-0 shadow-suave transition group-hover:opacity-100 sm:block">
        ¿Tienes una historia? Escríbenos
      </span>
      <span className="grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lg ring-4 ring-white/70 transition group-hover:scale-105 group-hover:bg-[#1ebe5a]">
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M16.004 3C8.832 3 3 8.83 3 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75A12.95 12.95 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16.004 3Zm0 23.6c-1.98 0-3.92-.53-5.62-1.54l-.4-.24-3.97 1.04 1.06-3.87-.26-.4A10.56 10.56 0 0 1 5.4 16c0-5.85 4.76-10.6 10.6-10.6 5.85 0 10.6 4.75 10.6 10.6 0 5.85-4.75 10.6-10.6 10.6Zm5.81-7.94c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.5-2.55-1.58-.94-.84-1.58-1.88-1.77-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </span>
    </a>
  );
}
