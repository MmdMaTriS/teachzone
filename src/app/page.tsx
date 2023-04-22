import { Metadata } from "next";
import Link from "next/link";
import Typography from "@/components/Typography";

export const metadata: Metadata = {
  title: "Home Page - TeachZone",
  description: "Learn Programming",
};
export default function Home() {
  return (
    <main>
      Main Root Page
      <Typography component="h1" fontSize={30}>
        Hello
      </Typography>
      <Link href="/courses">Click to Navigate </Link>
    </main>
  );
}
