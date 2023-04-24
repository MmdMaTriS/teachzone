import _defaultSEO from "@/utilities/defaultSEO";
import { Metadata } from "next";

export const metadata: Metadata = {
  ..._defaultSEO,
  title: "Story Video's",
};

export default async function Story() {
  return <main>Shor Video Page</main>;
}
