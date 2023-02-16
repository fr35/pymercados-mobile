import "./header.css"
import BotonSuscripcion from "./BotonSuscripcion"
export default function Header() {
    return (
        <>
        <div></div>
        <nav class="navbar navbar-dark sticky-top menuBurgerBackground">
            <div class="container-fluid">
                {/* Boton icono */}
                <button className="botonBurger" 
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasDarkNavbar"
                    aria-controls="offcanvasDarkNavbar">
                    <span>
                        <i class="bi bi-list text-white botonBurgerIcon"></i>
                    </span>
                </button>
                <BotonSuscripcion></BotonSuscripcion>
                {/* Boton Js */}
                <div
                    class="offcanvas offcanvas-start text-bg-dark"
                    tabindex="-1"
                    id="offcanvasDarkNavbar"
                    aria-labelledby="offcanvasDarkNavbarLabel"
                >
                    {/* Adentro del boton */}
                    <div class="offcanvas-header menuBurgerBackground">
                        {/* Header del navbar */}
                        {/* Boton Close */}
                        <button
                            className="botonX"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close">
                                <span>
                                    <i class="bi bi-x-lg botonXIcon"></i>
                                </span>
                        </button>
                    </div>
                    <div class="offcanvas-body menuBurgerBackground">
                        {/* Body */}
                        <h2 class="offcanvas-title blancoTexto center" id="offcanvasDarkNavbarLabel">
                            Pymercados
                        </h2>
                        <ul class="navbar-nav justify-content-end flex-grow-1 center space32">
                            <li class="nav-item" >
                                <a class="nav-link active mt-3" aria-current="page" href="#Home">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item" >
                                <a class="nav-link mt-3 active" aria-current="page" href="#Categorias">
                                    Categorias
                                </a>
                            </li>
                            <li class="nav-item" >
                                <a class="nav-link mt-3 active" aria-current="page" href="#Nosotros">
                                    Nosotros
                                </a>
                            </li>
                            <li class="nav-item" >
                                <a class="nav-link mt-3 active" aria-current="page" href="#Contacto">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                        <div className="center">
                            <img src="https://pymercados.com/wp-content/uploads/2022/06/Picture2.png" alt="" className="logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}