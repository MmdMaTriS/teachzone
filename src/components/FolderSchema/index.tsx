"use client";

interface FolderSchemaProps {
  isSingleItem: boolean;
  title: string;
  link: string;
  itemsInFolderCount: number;
  mode: "free" | "premium";
}
export default function FolderSchema(props: FolderSchemaProps): JSX.Element {
  return <div></div>;
}
