import './index.css'
import CardB from "../CardB/CardB";
export default function SectionE() {
    return (
        <section className="contenedor" id='Categorias'>
            <div className="space64">
                <h2 className='h2'>Categorias</h2>
                <div className='space32'></div>
                <div className="fila bottom32">
                    <CardB url='https://www.energiaestrategica.com/wp-content/uploads/2020/01/fabrica-torres-eolicas-argentina.jpg' text1='FÁBRICAS' text2='Fabricantes de todo el país'></CardB>
                    <div className='espacioCardB'></div>
                    <CardB url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Tt1MINVfpl-vpkMExy0Yi6pn_eehILGFiQ&usqp=CAU' text1='EQUIPOS PETROLEROS' text2='Rental y venta'></CardB>
                </div>
                <div className="fila bottom32">
                    <CardB url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSskDZRJ-OfiFtrSULzk-UZS7jp-BSqGnjCA&usqp=CAU' text1='MAQUINARIA' text2='Equipos de construcción'></CardB>
                    <div className='espacioCardB'></div>
                    <CardB url='https://gowireline.com.ec/wp-content/uploads/2019/03/herramientas-de-limpieza.jpg' text1='HERRAMIENTAS' text2='Para la construcción y petroleras'></CardB>
                </div>
                <div className="fila bottom32">
                    <CardB url='https://static.tokkobroker.com/water_pics/38990259919649770796532240558111791226457152058189610403218404780443841843558.jpg' text1='INMUEBLES' text2='Terrenos, Lotes, Departamentos'></CardB>
                    <div className='espacioCardB'></div>
                    <CardB url='https://static.tokkobroker.com/water_pics/38990259919649770796532240558111791226457152058189610403218404780443841843558.jpg' text1='SEGURIDAD' text2='Elementos de protección personal'></CardB>
                </div>
                <div className='space 32 center'>
                    <button className='btnVerMas'>
                        <a href="https://pymercados.com/" className='aVerMas'>VER MÁS</a>
                    </button>
                </div>
            </div>
        </section>
    )
}