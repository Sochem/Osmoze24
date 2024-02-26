import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/globals.css";
import "./styles/background.scss";

export default function Home() {
  return (
    <body className="flex flex-col m-0 min-h-screen">
      <div className="flex flex-col m-0 min-h-screen">
        <Navbar />
        Home
        <Footer />
      </div>
    </body>
  );
}
