// TODO: remplacer par le vrai numéro WhatsApp business avant mise en ligne.
export const WHATSAPP_NUMBER = "000000000000";
export const WHATSAPP_DISPLAY = "+XXX XX XXX XX XX";

export const WHATSAPP_DEFAULT_MESSAGE =
	"Bonjour, je souhaite une démo de Pilote pour mon hôtel.";

export function buildWhatsAppLink(message: string): string {
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
