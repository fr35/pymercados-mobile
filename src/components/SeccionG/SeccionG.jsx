import Avatar from "./Avatar";
import matias from '../../img/matias.png'
import josefina from '../../img/Josefina.png'
import faka from "../../img/faka.png"
import jose from "../../img/jose.png"
import davo from "../../img/davo.png"
import caro from '../../img/caro.png'
export default function SectionG() {
    return (
        <section id="Nosotros">
            <div className="space64 contenedor">
                <h2 className="h2">Sobre nosotros</h2>
                <p className="p space32">Aspiramos a conectar a toda la cadena industrial de Argentina para potenciarla y ayudarla a ser más competitiva reduciendo intermediarios y bajando costos.</p>
            </div>
            <div className="space64">
                <h2 className="contenedor bottom32 h2">Nosotros</h2>
            </div>
            <Avatar url={matias} text1='Matías Larroulet' text2='CEO & Founder' linkedin='https://www.linkedin.com/in/matias-larroulet-93a0481a/'></Avatar>
            <div className="fila space32">
            <Avatar url={faka} text1='Facundo Rodriguez' text2='Developer' linkedin='https://www.linkedin.com/in/facundo-rodriguez-13a497227/'></Avatar>
            <Avatar url={jose} text1='José Storani ' text2='Developer' linkedin='https://www.linkedin.com/in/jose-storani/'></Avatar>
            </div>
            <div className="fila space32">
            <Avatar url={davo} text1='David Sueldo' text2='Design UX/UI' linkedin='https://www.linkedin.com/in/davidezequielsueldo/'></Avatar>
            <Avatar url={josefina} text1='Josefina Fagundez' text2='Design UX/UI' linkedin='https://www.linkedin.com/in/josefina-fagundez/'></Avatar>
            </div>
            <Avatar url={caro} text1='Carolina Nogueira' text2='Marketing' linkedin='https://www.linkedin.com/in/carolinabelennogueira/'></Avatar>
        </section>
    )
}