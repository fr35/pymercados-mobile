import { useState } from "react"
import "./index.css"
import axios from "axios"

export default function Formulario() {
    const [contactoData, setContactoData] = useState({ nombre: '', email: '', motivo: '', descripcion: '', page: 'testB'})
    const submitContacto = async (e) => {
        e.preventDefault()
        const response = await axios.post("https://pymercados-back-production.up.railway.app/gmail",
            {
                nombre: contactoData.nombre,
                email: contactoData.email,
                motivo: contactoData.motivo,
                descripcion: contactoData.descripcion,
                page: contactoData.page
            })
        if (response.status === 200) {
            alert('Regristro completado con exito')
            return;
        }
    }
    return (
        <div className="containerForm contenedor">
            <form onSubmit={submitContacto}>
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" required
                    onChange={(e) =>
                        setContactoData((prevState) => ({
                            ...prevState,
                            nombre: e.target.value,
                        }))
                    } value={contactoData.nombre} />

                <div className="space32"></div>

                <label for="email">Email</label>
                <input type="email" id="email" name="email" required
                    onChange={(e) =>
                        setContactoData((prevState) => ({
                            ...prevState,
                            email: e.target.value,
                        }))
                    } value={contactoData.email} />

                <div className="space32"></div>

                <label for="motivo">Motivo</label>
                <select id="motivo" name="motivo" required
                    onChange={(e) =>
                        setContactoData((prevState) => ({
                            ...prevState,
                            motivo: e.target.value,
                        }))
                    } value={contactoData.motivo}>
                    <option disabled selected value="">-- Elige una opción --</option>
                    <option value="reunion">Agendar una reunion para subscribirme</option>
                    <option value="newsletter">Recibir Newsletter</option>
                    <option value="fábrica">Quiero tener mi Fábrica Online</option>
                    <option value="otro/s">Otro/s</option>
                </select>

                <div className="space32"></div>

                <label for="descripcion">Descripción</label>
                <input type="text" id="descripcion" name="descripcion" className="descripcion"
                    onChange={(e) =>
                        setContactoData((prevState) => ({
                            ...prevState,
                            descripcion: e.target.value,
                        }))
                    } value={contactoData.descripcion} />

                <div className="space32"></div>

                <input type="submit" value="Enviar" className="submitBtn"/>
            </form>
        </div>
    )
}

