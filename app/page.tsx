import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans">
      <Navbar />
      <main className="flex-1 my-20">{/* Main content goes here */}</main>
      <Footer />
    </div>
  );
}
