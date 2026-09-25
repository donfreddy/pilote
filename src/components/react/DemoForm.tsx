import { useId, useState } from "react";
import { buildWhatsAppLink } from "../../data/config";

interface FormState {
	name: string;
	hotelName: string;
	cityRooms: string;
	whatsapp: string;
}

const emptyForm: FormState = {
	name: "",
	hotelName: "",
	cityRooms: "",
	whatsapp: "",
};

function buildMessage(form: FormState): string {
	return [
		"Bonjour, je souhaite une démo de Pilote.",
		`Nom : ${form.name}`,
		`Hôtel : ${form.hotelName}`,
		`Ville / nombre de chambres : ${form.cityRooms}`,
		`WhatsApp : ${form.whatsapp}`,
	].join("\n");
}

export default function DemoForm() {
	const [form, setForm] = useState<FormState>(emptyForm);
	const [sent, setSent] = useState(false);
	const idPrefix = useId();

	function update(field: keyof FormState) {
		return (e: React.ChangeEvent<HTMLInputElement>) => {
			setForm((prev) => ({ ...prev, [field]: e.target.value }));
		};
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		const link = buildWhatsAppLink(buildMessage(form));
		window.open(link, "_blank", "noopener,noreferrer");
		setSent(true);
	}

	if (sent) {
		return (
			<div
				role="status"
				className="rounded-lg border border-solid border-emerald bg-surface-2 p-5 text-sm text-text-primary"
			>
				WhatsApp s'ouvre avec votre message pré-rempli. Envoyez-le pour qu'on vous
				recontacte dans la journée.
			</div>
		);
	}

	return (
		<form
			onSubmit={handleSubmit}
			aria-label="Formulaire de demande de démo"
			className="flex flex-col gap-3"
		>
			<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
				<Field
					id={`${idPrefix}-name`}
					label="Nom"
					value={form.name}
					onChange={update("name")}
					autoComplete="name"
				/>
				<Field
					id={`${idPrefix}-hotel`}
					label="Nom de l'hôtel"
					value={form.hotelName}
					onChange={update("hotelName")}
					autoComplete="organization"
				/>
				<Field
					id={`${idPrefix}-city`}
					label="Ville et nombre de chambres"
					value={form.cityRooms}
					onChange={update("cityRooms")}
					placeholder="Ex. Douala, 42 chambres"
				/>
				<Field
					id={`${idPrefix}-whatsapp`}
					label="Numéro WhatsApp"
					value={form.whatsapp}
					onChange={update("whatsapp")}
					type="tel"
					autoComplete="tel"
					placeholder="+237 6XX XX XX XX"
				/>
			</div>
			<button
				type="submit"
				className="mt-1 inline-flex items-center justify-center rounded-md border border-solid border-gold bg-gold px-5 py-3 font-sans text-sm font-semibold text-gold-ink transition-colors hover:bg-gold-bright"
			>
				Recevoir la démo sur WhatsApp
			</button>
		</form>
	);
}

interface FieldProps {
	id: string;
	label: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
	autoComplete?: string;
	placeholder?: string;
}

function Field({ id, label, value, onChange, type = "text", autoComplete, placeholder }: FieldProps) {
	return (
		<div className="flex flex-col gap-1.5 text-left">
			<label htmlFor={id} className="text-xs text-text-secondary">
				{label}
			</label>
			<input
				id={id}
				name={id}
				type={type}
				required
				value={value}
				onChange={onChange}
				autoComplete={autoComplete}
				placeholder={placeholder}
				className="rounded-md border border-solid border-surface-border bg-surface px-3 py-2.5 text-sm text-text-primary outline-none placeholder:text-text-muted focus:border-gold"
			/>
		</div>
	);
}
