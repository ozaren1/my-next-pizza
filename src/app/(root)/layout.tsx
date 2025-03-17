import { Header } from "@@/shared/components/shared";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;

}>) {
  return (
        <main className="min-h-screen">
          <Header />
          {children}
          {modal}
        </main>
  );
}
