import './index.css'
export default function CardB({text1, text2, url}) {
    return (
        <div class="azul cardB">
            <img src={url} class="imgCardB" alt={url}/>
            <div class="">
                <p class="h1TextCardB">{text1}</p>
                <p class="h2TextCardB">{text2}</p>
            </div>
        </div>
    )
}