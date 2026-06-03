import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Card from "./components/Card";
import image from "./assets/images.jpg";
import image1 from "./assets/images (1).jpg";
import image2 from "./assets/images (2).jpg";
import image3 from "./assets/images (3).jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="cards-container">
        <Card
          cardno="1"
          cardname="Captain America"
          cardpara="Hello, Iam Captain America iam a winter soldier"
          imgsrc={image}
        />

        <Card
          cardno="2"
          cardname="Soldierboy"
          cardpara="Hello,Iam soldier Boy, FUCk the world knows who iam"
          imgsrc={image1}
        />

        <Card
          cardno="3"
          cardname="Homelander"
          cardpara="iam stronger,iam better, you should be thanking god for that"
          imgsrc={image2}
        />

        <Card
          cardno="4"
          cardname="Butcher"
          cardpara="OI OI OI CUNt!! Daddys's Home!"
          imgsrc={image3}
        />
      </div>
    </>
  );
}

export default App;
