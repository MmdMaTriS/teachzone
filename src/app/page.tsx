import Link from "next/link";

export default function Home() {
  return (
    <main>
      Main Root Page
      <Link href="/courses">Click to Navigate </Link>
    </main>
  );
}
