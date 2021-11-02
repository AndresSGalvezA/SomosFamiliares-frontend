/* eslint-disable */
import React, { useState } from "react";
import { test, postImage } from "../api/session";
import "../css/plugins.css";
import "../css/style.css";
import "../css/file-input.css";

var data = new FormData();
var img1, img2;

const uploadImage = async e => {
    const result1 = await postImage(img1);

    if (result1.statusCode === 200) {
        localStorage.setItem("img1", result.body);
    } else {

    }

    //localStorage.getItem("img1");
    const result2 = await postImage(img2);

    if (result2.statusCode === 200) {
        localStorage.setItem("img2", result.body);
    }

    //localStorage.getItem("img1");
}

export default function Test() {
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);

    const onImageChange1 = (e) => {
        if (e.target.files && e.target.files[0]) {
            img1 = e.target.files[0];
            setImage1(URL.createObjectURL(e.target.files[0]));
        }
    }

    const onImageChange2 = (e) => {
        if (e.target.files && e.target.files[0]) {
            img2 = e.target.files[0];
            setImage2(URL.createObjectURL(e.target.files[0]));
        }
    }

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
                            <li className="active"><a href="/prueba">Prueba</a> </li>
                        </ul>
                    </div>
                </div>
                <div id="blog" className="grid-layout post-2-columns m-b-30" data-item="post-item">
                    <div className="post-item border">
                        <div className="post-item-wrap">
                            <div className="post-image">
                                <img alt="Preview" src={image1 ? image1 : require("../assets/img/placeholder.png").default} />
                                <span className="post-meta-category">Persona 1</span>
                            </div>
                            <div className="post-item-description">
                                <label htmlFor="file-upload1" className="custom-file-upload">
                                    Cargar imagen
                                </label>
                                <input id="file-upload1" type="file" accept=".jpeg" onChange={onImageChange1} />
                            </div>
                        </div>
                    </div>
                    <div className="post-item border">
                        <div className="post-item-wrap">
                            <div className="post-image">
                                <img alt="Preview" src={image2 ? image2 : require("../assets/img/placeholder.png").default} />
                                <span className="post-meta-category">Persona 2</span>
                            </div>
                            <div className="post-item-description"> 
                                <label htmlFor="file-upload2" className="custom-file-upload">
                                    Cargar imagen
                                </label>
                                <input id="file-upload2" type="file" accept=".jpeg" onChange={onImageChange2} />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={uploadImage}>Hacer la prueba</button>
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