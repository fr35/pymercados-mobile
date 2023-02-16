import mockupMobile from '../../img/mockupMobile.png'
import './index.css'
export default function SectionC() {
    return (
        <section className="contenedor">
            <div className="space64">
                <h2 className='h2'>¿Qué es una tienda online?</h2>
                <img src={mockupMobile} alt="" className='mockup space32'/>
            </div>
        </section>
    )
}