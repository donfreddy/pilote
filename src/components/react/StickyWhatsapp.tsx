import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, WHATSAPP_DEFAULT_MESSAGE } from "../../data/config";

export default function StickyWhatsapp() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const hero = document.querySelector("#hero");
		if (!hero) return;

		const observer = new IntersectionObserver(
			([entry]) => setVisible(!entry.isIntersecting),
			{ rootMargin: "-10% 0px 0px 0px" },
		);
		observer.observe(hero);
		return () => observer.disconnect();
	}, []);

	return (
		<a
			href={buildWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Discuter sur WhatsApp"
			className={`fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-solid border-gold bg-gold px-4 py-3 font-sans text-sm font-semibold text-gold-ink shadow-lg transition-all duration-300 hover:bg-gold-bright ${
				visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
			}`}
		>
			<MessageCircle className="h-4 w-4" strokeWidth={2.25} />
			Parler sur WhatsApp
		</a>
	);
}
