
import './index.css'
import LogoSlider from "./LogoSlider";
export default function SectionF() {
    return (
        <section className="contenedor">
            <div className="space64">
                <h2 className="bottom32">Empresas que confían en nosotros</h2>
                <div className="containerCarousel">
                    <LogoSlider></LogoSlider>
                </div>
            </div>
        </section>
    )
}