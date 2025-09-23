import React, { useRef, useState } from "react";
import "./cadastro.css";
import { useNavigate } from "react-router";
import { getToken } from "../utils/tokenActions";

export default function CreateCharacter() {
    const navigate = useNavigate();



    const [name, setName] = useState('')
    const [health, setHealt] = useState(100)
    const [attack, setAttack] = useState(5)


    const auth =  getToken()

    async function handleSubmit(e) {
        e.preventDefault()  // Evita que a página recarregue ao enviar o formulário

        const createCharacter = await fetch("http://localhost:3307/character/", {
            method: 'POST',
            headers: {
                Authorization: auth, // Certifique-se que "auth" contém algo como "Bearer token"
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({ name, health, attack }) // Envia os dados como JSON
        });


        const response = await createCharacter.json()
        console.log(response)



    }

    return (
        <div className="container">
            <section className="auth-section">
                <h2>Criação do personagem</h2>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <label htmlFor="nome">Name:</label>
                    <input type="text" id="nome" name="nome" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} required />
                    <label htmlFor="text">:</label>

                    <input type="number" id="health" name="health" placeholder="Digite a vida do seu Player" value={health} onChange={(e) => setHealt(e.target.value)} disabled />
                    <label htmlFor="senha">Health:</label>

                    <input type="number" id="attack" name="attack" placeholder="Digite o ataque do seu player" value={attack} onChange={(e) => setAttack(e.target.value)} disabled />

                    <button type="submit" className="btn"> Cadastrar</button>


                </form>
                <p id="mensagem"></p>
            </section>
        </div>

    );
}