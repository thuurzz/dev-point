import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <Header />
      </header>
      <main className="flex-1">
        
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
