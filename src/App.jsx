import { useState } from "react";
import "./App.css";
import { RenderComponent, Title, replaceClassInMain } from './scripts/utils.jsx';
import Head from "./comp/Head.jsx"
import Sidebar from './comp/SideBar.jsx';


 
function App() {
  const [count, setCount] = useState(0);

  // Función para actualizar el componente activo
  const handleButtonClick = (component) => {
    setCount(component);
    replaceClassInMain(component);
  };
 
  return (
    <>
      <div className="contenedor">
        <Head/>
        <Sidebar handleButtonClick={handleButtonClick}/>
        <div className="main">
          <div className="port">
            <Title value={count}/>
            <div id="main__content">
              <RenderComponent count={count}/>
            </div>
          </div>
          <div className="anuncios">
            <h3 className="titleAnuncio">Anuncios</h3>
            <div className="squareNews">
              <div className="anuncio">
                <h5>Fake News</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div></div>
              <div className="anuncio">
                <h5>Update</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <div></div>
              <div className="anuncio">
                <h5>Best Tools</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="trending">
            <h3 className="titleTrend">Trending</h3>
            <div className="contenTrend">
              <a className="red" href="https://github.com/">
                <img
                  src="/assets/icons/Reds/2890581_ai_artificial intelligence_electronics_light bulb_robotics_icon.svg"
                  alt=""
                />
                <div className="textRed">
                  <p>@User</p>
                  <p>TechPower</p>
                </div>
              </a>
              <a className="red">
                <img
                  src="/assets/icons/Reds/3838998_bitcoin_cryptocurrency_currency_money_finance_icon.svg"
                  alt=""
                />
                <div className="textRed">
                  <p>@User</p>
                  <p>Crypto</p>
                </div>
              </a>
              <a className="red">
                <img
                  src="/assets/icons/Reds/416398_exploration_fuel_nasa_rocket_space_icon.svg"
                  alt=""
                />
                <div className="textRed">
                  <p>@User</p>
                  <p>SpaceX</p>
                </div>
              </a>
              <a className="red">
                <img
                  src="/assets/icons/Reds/6971159_green_ecology_environment_icon.svg"
                  alt=""
                />
                <div className="textRed">
                  <p>@User</p>
                  <p>SaveWorld</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* <Tier/> */}
      </div>
    </>
  );
}

export default App;
