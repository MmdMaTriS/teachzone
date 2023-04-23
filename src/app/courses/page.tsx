import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courses Video's",
};

export default async function Courses() {
  return (
    <>
      Courses Video Page
      <Link href="/courses/3">CoruseId</Link>
    </>
  );
}
