import Header from "@/layouts/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="fa">
      <body>
        {/* @ts-expect-error SSR-Component */}
        <Header />
        {children}
      </body>
    </html>
  );
}
