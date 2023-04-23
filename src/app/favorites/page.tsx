import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Favorites",
};

export default async function Favorites() {

  return (
    <main>
      Favorites Page
      <Link href="/">Navigate To Home Page</Link>
    </main>
  );
}
