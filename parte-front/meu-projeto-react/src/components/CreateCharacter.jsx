import { useState } from "react";
import "./cadastro.css";
import { useNavigate } from "react-router";
import { getToken } from "../utils/tokenActions";

export default function CreateCharacter() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [health, setHealth] = useState(100);
  const [attack, setAttack] = useState(5);

  const auth = getToken();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3307/character/", {
        method: "POST",
        headers: {
          Authorization: auth, // ex: "Bearer <token>"
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          health: Number(health),
          attack: Number(attack),
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data = await response.json();
      console.log("Personagem criado:", data);

      navigate("/home");
    } catch (error) {
      console.error("Erro ao criar personagem:", error);
    }
  }

  return (
    <div className="container">
      <section className="auth-section">
        <h2>Criação do personagem</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="nome">Name:</label>
          <input
            type="text"
            id="nome"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="health">Health:</label>
          <input
            type="number"
            id="health"
            placeholder="Digite a vida do seu Player"
            value={health}
            onChange={(e) => setHealth(e.target.value)}
          />

          <label htmlFor="attack">Attack:</label>
          <input
            type="number"
            id="attack"
            placeholder="Digite o ataque do seu Player"
            value={attack}
            onChange={(e) => setAttack(e.target.value)}
          />

          <button type="submit" className="btn">
            Cadastrar
          </button>
        </form>
        <p id="mensagem"></p>
      </section>
    </div>
  );
}
