

async function getData() {
  const res = await fetch("https://admin.aminnaimi.ir/categories?id=5", {
    next: { revalidate: 10 },
  });
  return res.json();
}

export default async function Header(): Promise<JSX.Element> {
  // const data = await getData();

  return (
    <div>
      <p>Salam</p>
    </div>
  );
}
