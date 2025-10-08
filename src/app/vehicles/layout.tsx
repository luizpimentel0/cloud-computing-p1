import Layout from "@/components/Layout";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>{children}</Layout>
  );
}
