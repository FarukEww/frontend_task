import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { EventProvider } from "./Context/EventContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <EventProvider>
        <App />
      </EventProvider>
    </BrowserRouter>
  </StrictMode>
);
