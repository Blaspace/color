import React, { useEffect } from "react";
import Header from "./component/Header";
import FirstSection from "./component/FirstSection";
import SecondSection from "./component/SecondSection";
import Thirdsection from "./component/Thirdsection";
import ForthSection from "./component/ForthSection";
import FiFthSection from "./component/FiFthSection";
import SixSection from "./component/SixSection";
import SeventhSection from "./component/SeventhSection";
import Card from "./component/Card";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Header />
      <Card />
      <FirstSection />
      <SecondSection />
      <Thirdsection />
      <ForthSection />
      <FiFthSection />
      <SixSection />
      <SeventhSection />
    </div>
  );
}

export default App;
