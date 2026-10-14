import { motion } from "framer-motion";

export default function Encabezado({ etiqueta, titulo, children }) {
  return (
    <motion.div
      initial={{ opacity: 0.4, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10 max-w-3xl space-y-3"
    >
      <p className="etiqueta">{etiqueta}</p>
      <h2 className="text-4xl sm:text-5xl">{titulo}</h2>
      {children && <p className="text-lg text-menta-900/70">{children}</p>}
    </motion.div>
  );
}
