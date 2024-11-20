import { useEffect, useState } from "react";
import ActivityCard from "./components/ActivityCard";
import Analytics from "./components/Analytics";
import Announcements from "./components/Announcements";
import Header from "./components/Header";
import Schedules from "./components/Schedules";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [toggle, settoggle] = useState(false);
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);
  return (
    <BrowserRouter>
      <div className="gap-4 max-lg:gap-0 flex h-full w-full">
        <Sidebar toggle={toggle} settoggle={settoggle} />
        <div className="w-full flex flex-col h-full">
          <Header toggle={toggle} settoggle={settoggle} />
          <h1 className="font-semibold text-2xl px-4 py-2 text-[#161E54]">
            Dashboard
          </h1>
          <div className="flex max-lg:flex-col w-full px-4 pb-6 gap-4  h-full">
            <div className=" flex flex-col gap-6  w-[60%] max-lg:w-full">
              <Analytics />
              <Announcements />
            </div>
            <div className="w-[40%] max-lg:w-full flex flex-col max-lg:flex-row max-lg:items-start gap-6 max-lg:gap-4">
              <ActivityCard />
              <Schedules />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
