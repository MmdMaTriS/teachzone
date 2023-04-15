import { Inter } from "next/font/google";
import { Metadata } from "next";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {};
async function getData() {
  const res = await fetch("https://admin.aminnaimi.ir/categories?id=5", {
    next: { revalidate: 10 },
  });
  metadata["title"] = "Salam";
  return res.json();
}

export default async function Courses() {
  const data = await getData();
  return (
    <main>
      Courses Page
      <Link href="/">Home Page</Link>
    </main>
  );
}
