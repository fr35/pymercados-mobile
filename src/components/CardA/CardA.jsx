import './index.css'
export default function CardA({text, url}) {
    return (
        <div className="space32">
            <div className="azul cardA center">
                <div className='w-50'>
                    <p className="h1TextCardA">{text}</p>
                </div>
                <div className='w-50'>
                    <img src={url} alt={url} className='imgCardA'/>
                </div>
            </div>
        </div>
    )
}