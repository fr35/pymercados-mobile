import './seccionG.css'
export default function Avatar({url, text1, text2, linkedin}) {
    return (
        <div className="avatarContainer textCenter bottom32">
            <img src={url} alt={url} className="fotoTeam"/>
            <h2 className="h2Avatar">{text1}</h2>
            <p className="pAvatar">{text2}</p>
            <a href={linkedin}><i class="bi bi-linkedin logoLinkedin"></i></a>
    </div>
    )
}