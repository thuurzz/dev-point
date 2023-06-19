import Header from "./components/header";
import Footer from "./components/footer";
import InProgress from "./components/in-progress";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <Header />
      </header>
      <main className="flex-1">
        <InProgress />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
