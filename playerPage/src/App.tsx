import "./app.css";
import Channel from "./components/Channel/Channel";
import CurrentPlayer from "./components/CurrentPlayer/CurrentPlayer";
import Header from "./components/Header/Header";
import NextVideos from "./components/NextVideos/NextVideos";
import { BrowserRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Footer from "./components/Footer/Footer";
import { MobileContext } from "./main";

const App = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 520px)",
  });

  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <MobileContext.Provider value={isMobile}>
        <h1 className="visually-hidden">YouTube</h1>
        <Header />
        <main className="main container">
          <section className="current-player">
            <CurrentPlayer />
            <Channel />
          </section>
          <NextVideos />
        </main>
        {isMobile && <Footer />}
      </MobileContext.Provider>
    </BrowserRouter>
  );
};

export default App;
