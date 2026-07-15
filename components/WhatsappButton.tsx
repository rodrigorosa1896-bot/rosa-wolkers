import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/351912828740?text=Olá! Gostaria de pedir um orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-transform hover:scale-110"
      aria-label="Contactar pelo WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}