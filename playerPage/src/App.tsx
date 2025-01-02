import "./app.css";
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
        <CurrentPlayer />
        <NextVideos />
      </main>
    </BrowserRouter>
  );
};

export default App;
