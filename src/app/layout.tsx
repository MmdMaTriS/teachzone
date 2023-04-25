import Header from "@/layouts/Header";
import Provider from "@/providers/Provider";
import Container from "@/components/ClientMUI/Container";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" data-theme="dark">
      <body>
        <Provider>
          <Header />
          <Container maxWidth="xl">{children}</Container>
        </Provider>
      </body>
    </html>
  );
}
