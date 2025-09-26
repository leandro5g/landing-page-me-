const mensage = "Olá! Quero participar do beta do Me+. Como faço para entrar?";
const PHONE = "5516993983255";


export function openWhatsApp() {
  if (typeof window === "undefined") return;

  const sanitizedPhone = PHONE.replace(/\D/g, "");
  const href = `https://wa.me/${sanitizedPhone}?text=${encodeURIComponent(mensage)}`;

  window.open(href, "_blank", "noopener,noreferrer");
}