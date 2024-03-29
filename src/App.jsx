import { useState, useEffect, Suspense } from "react";
import { BarLoader } from "react-spinners";

import Home from "./pages/Home";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center w-full h-screen">
          <BarLoader color="#f6c400" height={4} />
        </div>
      }
    >
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <BarLoader color="#f6c400" height={4} />
        </div>
      ) : (
        <Home />
      )}
    </Suspense>
  );
};

export default App;
