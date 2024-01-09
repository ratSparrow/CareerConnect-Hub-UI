import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/Routes";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
