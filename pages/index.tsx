import { BuchCanvas } from "@/components/BuchCanvas"

export default function HomePage() {
	return (
		<main className="min-h-screen bg-white dark:bg-background-dark">
			<BuchCanvas />
		</main>
	)
}

export const dynamic = "force-dynamic"
