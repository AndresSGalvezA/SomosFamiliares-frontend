import React from "react";
import "../css/plugins.css";
import "../css/style.css";

export default function NotFound() {
    return (
        <div className="body-inner">
            <header id="header" data-fullwidth="true">
                <div className="header-inner">
                    <div className="container">
                        <div id="logo">
                            <a href="index.html">
                                <span class="logo-default">La Casa</span>
                                <span class="logo-dark">La Casa</span>
                            </a>
                        </div>
                        <div id="mainMenu-trigger">
                            <a className="lines-button x"><span className="lines"></span></a>
                        </div>
                        <div id="mainMenu">
                            <div className="container">
                                <nav>
                                    <ul>
                                        <li><a href="/">Inicio</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="p-b-150 p-t-150" data-bg-parallax="https://cognitive-services.s3.amazonaws.com/obj/dna404v2.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="page-error-404">404</div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-start">
                                <h1 className="text-medium text-light">¡Página no encontrada!</h1>
                                <p className="lead text-light">La página que intentas ver puede que no esté disponible, no se encuentra o fue removida permanentemente.</p>
                                <div className="seperator m-t-20 m-b-20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="footer">
                <div className="footer-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="widget">
                                    <div className="widget-title">¿Somos familiares?</div>
                                    <p className="mb-5">Guatemala, Guatemala.<br/> Todos los derechos reservados.<br/> Derechos de autor © 2021. La Casa.</p>
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
                <div class="copyright-content">
                    <div className="container">
                        <div className="copyright-text text-center">&copy; 2021 La Casa. Todos los derechos reservados.</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}