import './sectionA.css'
import bannerjpg from '../../img/bannerjpg.jpeg'
export default function SectionA() {
    return (    
        <>
            <div className='divSectionA' id="Home">
                <div className='fondoAzulBanner'></div>
                <img src={bannerjpg} alt="banner" className='imgSectionA'></img>
                <img src="https://pymercados.com/wp-content/uploads/2022/06/Picture2.png" className='logoBanner' alt="" />
                <h1 className='h1SectionA textCenter'>Compra y vende productos y servicios para<br></br> Vaca Muerta</h1>
            </div>
        </>
    )
}