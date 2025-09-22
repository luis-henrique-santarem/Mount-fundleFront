import React, { useState } from "react";
import Ring from "../images/ring.png";
import RingElfo from "../images/ringelfo.png";
import RingFire from "../images/ringfire.png";
import RingIce from "../images/ringice.png";
import RingShadow from "../images/ringshadow.png";
import RingLight from "../images/ringlight.png";
import "./ringscreen.css";

/**
 * Componente principal que exibe uma galeria de anéis mágicos com nome, imagem e descrição.
 * Usuários podem clicar para expandir/ocultar as descrições dos anéis.
 */
export default function RingScreen() {
  // Estado que define qual anel (por ID) está com a descrição expandida.
  // Se for `null`, nenhum anel está expandido.
  const [expandido, setExpandido] = useState(null);

  // Estes dois estados abaixo não estão sendo utilizados, 
  // mas foram definidos talvez para futuras funcionalidades
  const [name, setName] = useState("Anel não descoberto");
  const [description, setDescription] = useState("Descrição desconhecida");

  /**
   * Lista de anéis lendários, cada um com:
   * - id único
   * - título (nome do anel)
   * - imagem ilustrativa
   * - descrição detalhada
   */
  const aneis = [
    {
      id: 1, titulo: "Anel do Poder", imagem: Ring, descricao: "Forjado nas chamas da Montanha da Perdição, concede força inimaginável ao portador, mas também corrompe sua alma.",
    },
    {
      id: 2, titulo: "Anel dos Elfos", imagem: RingElfo, descricao: "Criado pelos elfos, oferece proteção mística, sabedoria ancestral e conexão com a natureza.",
    },
    {
      id: 3, titulo: "Anel de Fogo", imagem: RingFire, descricao: "Este anel permite controlar o fogo com maestria, mas consome energia vital de quem o usa.",
    },
    {
      id: 4, titulo: "Anel de Gelo",imagem: RingIce, descricao: "Domine o frio absoluto com este artefato. Muito usado por magos do norte para congelar inimigos.",
    },
    {
      id: 5, titulo: "Anel Sombrio",imagem: RingShadow, descricao: "Permite ao usuário mover-se nas sombras e manipular trevas, porém pode causar insanidade.",
    },
    {
      id: 6, titulo: "Anel da Luz",imagem: RingLight, descricao: "Um artefato sagrado que repele o mal e cura ferimentos, usado por paladinos em tempos antigos.",
    },
  ];

  /**
   * Renderiza o componente JSX
   */
  return (
    <div className="ring-screen">
      {/* Título principal da página */}
      <h2 className="ring-title">Artefatos Lendários</h2>

      {/* Grade de cartões para cada anel */}
      <div className="card-grid">
        {aneis.map((anel) => (
          <div key={anel.id} className="card">
            {/* Imagem ilustrativa do anel */}
            <img
              src={anel.imagem}
              alt={anel.titulo}
              className="card-img"
            />

            {/* Título do anel */}
            <h3 className="card-title">{anel.titulo}</h3>

            {/* Descrição do anel:
                - Se expandido, mostra o texto completo
                - Caso contrário, mostra os primeiros 100 caracteres seguidos de "..."
            */}
            <p className="card-desc">
              {expandido === anel.id
                ? anel.descricao
                : anel.descricao.slice(0, 75) + "..."}
            </p>

            {/* Botão para alternar entre ver mais ou ver menos */}
            <button
              className="card-btn"
              onClick={() =>
                // Alterna entre expandir e recolher a descrição do anel
                setExpandido(expandido === anel.id ? null : anel.id)
              }
              // Acessibilidade: informa ao leitor de tela se a descrição está expandida
              aria-expanded={expandido === anel.id}
            >
              {expandido === anel.id ? "Ver menos" : "Ver mais"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
