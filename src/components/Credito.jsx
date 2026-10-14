// Crédito de una foto de terceros (autor, licencia y enlace a la fuente).
export default function Credito({ credito, className = "" }) {
  return (
    <a
      href={credito.fuente}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-full bg-white/85 px-2.5 py-1 font-mono text-[0.6rem] text-menta-800 backdrop-blur hover:bg-white ${className}`}
    >
      © {credito.autor} · {credito.licencia}
    </a>
  );
}
