import { useEffect, useState } from "react";
import Loading from "./components/Loading";

import Tours from "./components/Tours";

function App() {
  const url = "https://course-api.com/react-tours-project";
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const callApi = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <h2>No Tours</h2>
        <button className="btn-ref" onClick={()=> callApi()}>Refresh</button>
      </main>
    );
  }

  return (
    <main className="App">
      <section>
        <Tours tours={tours} removeTour={removeTour} />
      </section>
    </main>
  );
}

export default App;
