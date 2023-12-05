import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function ProductsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <>
        <main>
            <Header/>
            {children}
            <Footer/>
        </main>
        </>
    );
}
