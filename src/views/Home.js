import React from "react";
import "../css/plugins.css";
import "../css/style.css";
import Model from "../Threejs/Aframe";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
export default function Home() {
  var c = <Environment />;
  console.log(c);
  return (
    <div className="body-inner">
      <header
        id="header"
        data-transparent="true"
        data-fullwidth="true"
        className="dark submenu-light"
      >
        <div className="header-inner">
          <div className="container">
            <div id="logo">
              <a href="/">
                <span className="logo-default">La Casa</span>
                <span className="logo-dark">La Casa</span>
              </a>
            </div>
            <div id="mainMenu-trigger">
              <a className="lines-button x">
                <span className="lines"></span>
              </a>
            </div>
            <div id="mainMenu">
              <div className="container">
                <nav>
                  <ul>
                    <li className="dropdown">
                      <a href="/nosotros">Sobre nosotros</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="slider" className="inspiro-slider slider-fullscreen">
        <div
          className="slide"
          data-bg-video="https://youtu.be/5-IRImDXjjc"
          id="cont"
        >
          <div className="App" id="three">
            <Canvas>
              <pointLight position={[10, 10, 10]} />
              <Suspense fallback={null}>
                <Model />
              </Suspense>
            </Canvas>
          </div>
          <div className="bg-overlay"></div>
          <div className="container">
            <div className="slide-captions text-start text-light">
              <h2 className="text-uppercase text-lg">¿Somos familiares?</h2>
              <p className="text-small">Con solo dos imágenes, esta aplicación analiza el parentesco entre dos personas, brindando el procentaje
              de similitud y la posible relación entre ellas. ¡Descúbrelo ahora!</p>
              <div>
                <div>
                  <a href="/prueba" className="btn scroll-to">
                    Hacer la prueba
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="widget">
                  <div className="widget-title">¿Somos familiares?</div>
                  <p className="mb-5">
                    Guatemala, Guatemala.
                    <br /> Todos los derechos reservados.
                    <br /> Derechos de autor © 2021. La Casa.
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="widget">
                      <div className="widget-title">L. Chutá</div>
                      <ul className="list">
                        <li>Product Owner</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="widget">
                      <div className="widget-title">S. Lara</div>
                      <ul className="list">
                        <li>Scrum Master</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="widget">
                      <div className="widget-title">A. Gálvez</div>
                      <ul className="list">
                        <li>Desarrollador</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="widget">
                      <div className="widget-title">A. Villatoro</div>
                      <ul className="list">
                        <li>Control de calidad</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-content">
          <div className="container">
            <div className="copyright-text text-center">
              &copy; 2021 La Casa. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
