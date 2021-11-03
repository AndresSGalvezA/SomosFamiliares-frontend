/* eslint-disable */
import React from "react";
import { sendEmail } from "../api/session";
import "../css/plugins.css";
import "../css/style.css";
import "../css/file-input.css";

var img1, img2;

const sendMail = async e => {
    let params = {
        email: document.getElementById("email").value,
        porcentaje: localStorage.getItem("porcentaje"),
        parentesco: localStorage.getItem("parentesco"),
        img1: localStorage.getItem("img1"),
        img2: localStorage.getItem("img2")
    }
    console.log(params);
    const mail_response = await sendEmail(params);
    console.log(mail_response);
    alert("Correo electrónico enviado.");
}

export default function Result() {
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
                            <li><a href="/prueba">Prueba</a> </li>
                            <li className="active"><a href="/resultado">Resultado</a> </li>
                        </ul>
                    </div>
                </div>
                <div id="blog" className="grid-layout post-2-columns m-b-30" data-item="post-item">
                    <div className="post-item border">
                        <div className="post-item-wrap">
                            <div className="post-image">
                                <img alt="Preview" src={localStorage.getItem("img1")} />
                                <span className="post-meta-category">Persona 1</span>
                            </div>
                        </div>
                    </div>
                    <div className="post-item border">
                        <div className="post-item-wrap">
                            <div className="post-image">
                                <img alt="Preview" src={localStorage.getItem("img2")} />
                                <span className="post-meta-category">Persona 2</span>
                            </div>
                        </div>
                    </div>
                </div>
                Porcentaje: {localStorage.getItem("porcentaje")} <br/>
                Parentesco: {localStorage.getItem("parentesco")} <br/><br/>

                
                <input type="email" id="email" /> <br/><br/>
                <button onClick={sendMail} className="submit btn btn-primary">Enviar resultados por correo</button>
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
            <div className="copyright-content">
                <div className="container">
                    <div className="copyright-text text-center">&copy; 2021 La Casa. Todos los derechos reservados.</div>
                </div>
            </div>
        </footer>
    </div>
    );
}