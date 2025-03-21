import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import EventsPage from "./EventsPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/events" element={<EventsPage/>} />
    </Routes>
  );
}

export default App;
