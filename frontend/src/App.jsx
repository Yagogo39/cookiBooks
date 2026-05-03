import TopBar from "./components/TopBar";
import Header from "./components/Header";
import HeroBanner from "./components/Banner";
import CategoryNav from "./components/Category";
import BookSection from "./components/BookSection";
import { trendingBooks, mostReadBooks } from "./data/mockData";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <TopBar />
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <CategoryNav />
        <div className="flex flex-col gap-2 pb-10">
          <BookSection title="De lo que todos están hablando" books={trendingBooks} />
          <BookSection title="Los más leídos" books={mostReadBooks} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
