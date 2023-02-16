import CardA from '../CardA/CardA'
export default function SectionD() {
    return (
        <section className="contenedor">
            <div className="space64">
                <h2 className='h2'>¿Qué puedo hacer?</h2>
                <CardA text='ABRE TU TIENDA ONLINE' url='https://i0.wp.com/pymercados.com/wp-content/uploads/2022/06/5.-Fabricas-1.jpg?fit=1000%2C667&ssl=1'></CardA>
                <p className='space32 p'>Abrí tu tienda en Pymercados y expandi tu negocio conectando con nuevos clientes, empresas y fábricas de toda la Patagonia.</p>
                <CardA text='COMPRA PRODUCTOS' url='https://www.edding.com/fileadmin/_processed_/9/f/csm_full-face-mask_793481b06a.jpg'></CardA>
                <p className='space32 p'>Podés comprar, vender y contactarte con otras empresas que estén buscando los artículos industriales que provees.</p>
                <CardA text='CONTRATA SERVICIOS' url='https://i0.wp.com/pymercados.com/wp-content/uploads/2022/07/Obra-civil-6-e1591927729162.jpeg?fit=620%2C515&ssl=1'></CardA>
                <p className='space32 p'>Descubrí proveedores del rubro de manera simple, rápida y segura. Podes encontrar desde maquinarias hasta herramientas de trabajo, todo en un mismo lugar.</p>
            </div>
        </section>
    )
}