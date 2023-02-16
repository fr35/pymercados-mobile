import Formulario from "../Formulario/Formulario";
import './index.css'
export default function SectionI () {
    return (
        <section className="backFormulario" id="Contacto">
        <div className="space64">
            <h2 className="blancoTexto contenedor h2Contacto">Contacto</h2>
            <p className="p space32 contenedor blancoTexto">Si sos fabricante y querés que tus productos aparezcan en PYMERCADOS escribinos a contacto@pymercados.com o completa el siguiente formulario</p>
            <Formulario></Formulario>
        </div>
    </section>
    )
}