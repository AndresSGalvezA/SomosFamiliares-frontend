/* eslint-disable */
import React from "react";

export default function Test() {
    return (
        <div className="body-inner">
        <header id="header" data-fullwidth="true">
            <div className="header-inner">
                <div className="container">
                    <div id="logo">
                        <a href="/">
                            <span className="logo-default">La Casa</span>
                            <span className="logo-dark">La Casa</span>
                        </a>
                    </div>
                    <div id="mainMenu-trigger">
                        <a className="lines-button x"><span className="lines"></span></a>
                    </div>
                    <div id="mainMenu">
                        <div className="container">
                            <nav>
                                <ul>
                                    <li><a href="/">Sobre nosotros</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section id="page-content">
            <div className="container">
                <div className="page-title">
                    <h1>¿Somos familiares?</h1>
                    <div className="breadcrumb float-left">
                        <ul>
                            <li><a href="/">Inicio</a> </li>
                            <li className="active"><a href="/prueba">Prueba</a> </li>
                        </ul>
                    </div>
                </div>
                <div id="blog" className="grid-layout post-2-columns m-b-30" data-item="post-item">
                    <div className="post-item border">
                        <div className="post-item-wrap">
                            <div className="post-image">
                                <img alt="" src="https://i.pinimg.com/originals/ea/79/71/ea797112a7122533d4ae1d81e90af6c8.jpg" />
                                <span className="post-meta-category"><a href="/">Imagen 1</a></span>
                            </div>
                            <div className="post-item-description"> 
                                <span className="post-meta-date"></span>
                                <h2><a href="/">Carga de la imagen 1 </a></h2>
                                <a href="/" className="item-link">Read More <i className="icon-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="post-item border">
                        <div className="post-item-wrap">
                            <div className="post-image">
                                <img alt="" src="https://preview.redd.it/5mxa2ymcb3f11.png?auto=webp&s=9dd3927f07eedce826e4ff3e4b2d3c7a4b702a52" />
                                <span className="post-meta-category"><a href="/">Imagen 1</a></span>
                            </div>
                            <div className="post-item-description"> 
                                <span className="post-meta-date"></span>
                                <h2><a href="/">Carga de la imagen 1 </a></h2>
                                <a href="/" className="item-link">Read More <i className="icon-chevron-right"></i></a>
                            </div>
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
                                <p className="mb-5">Hecho desde Guatemala, Guatemala.<br/> Todos los derechos reservados.<br/> Derechos de autor © 2021. La Casa.</p>
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
                    <div className="copyright-text text-center">&copy; 2021 La Casa. Todos los derechos reservados.</div>
                </div>
            </div>
        </footer>
    </div>
    );
}