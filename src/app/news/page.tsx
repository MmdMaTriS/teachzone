import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
};

export default async function News() {
  return <main>News Page</main>;
}
