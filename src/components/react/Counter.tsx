import { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);

	return (
		<button
			onClick={() => setCount((c) => c + 1)}
			className="rounded-md border border-solid border-surface-border bg-surface px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:bg-surface-border"
		>
			React island OK — {count}
		</button>
	);
}
