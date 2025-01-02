import "./app.css";
import Channel from "./components/Channel/Channel";
import CurrentPlayer from "./components/CurrentPlayer/CurrentPlayer";
import Header from "./components/Header/Header";
import NextVideos from "./components/NextVideos/NextVideos";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <h1 className="visually-hidden">YouTube</h1>
      <Header />
      <main className="main container">
        <section className="current-player">
          <CurrentPlayer />
          <Channel />
        </section>
        <NextVideos />
      </main>
    </BrowserRouter>
  );
};

export default App;
