import React, { use, useState } from "react";
import Ring from "../images/ring.png"
import RingElfo from "../images/ringelfo.png"
import RingFire from "../images/ringfire.png"
import RingIce from "../images/ringice.png"
import RingShadow from "../images/ringshadow.png"
import RingLight from "../images/ringlight.png"
import "./ringscreen.css";

export default function RingScreen() {
  const [expandido, setExpandido] = useState(null);
  const [name, setName] = useState("Anel não descoberto")
  const [description, setDescription] = useState("Descrição desconhecida")



  const aneis = [
    {
      id: 1, titulo: "Anel do Poder", imagem: Ring, descricao:  "Forjado nas chamas da Montanha da Perdição, concede força inimaginável ao portador, mas também corrompe sua alma.",
    },
    {
      id: 2, titulo: "Anel dos Elfos", imagem: RingElfo, descricao: "Criado pelos elfos, oferece proteção mística, sabedoria ancestral e conexão com a natureza.",
    },
    {
      id: 3, titulo: "Anel de Fogo", imagem: RingFire, descricao: "Este anel permite controlar o fogo com maestria, mas consome energia vital de quem o usa.",
    },
    {
      id: 4, titulo: "Anel de Gelo", imagem: RingIce, descricao: "Domine o frio absoluto com este artefato. Muito usado por magos do norte para congelar inimigos.",
    },
    {
      id: 5,  titulo: "Anel Sombrio",  imagem: RingShadow, descricao: "Permite ao usuário mover-se nas sombras e manipular trevas, porém pode causar insanidade.",
    },
    {
      id: 6, titulo: "Anel da Luz", imagem: RingLight, descricao: "Um artefato sagrado que repele o mal e cura ferimentos, usado por paladinos em tempos antigos.",
    },
  ];

  return (
    <div className="ring-screen">
      <h2 className="ring-title">Artefatos Lendários</h2>
      <div className="card-grid">
        {aneis.map((anel) => (


          <div key={anel.id} className="card">
            <img src={anel.imagem} alt={anel.titulo} className="card-img" />
            <h3 className="card-title">{anel.titulo}</h3>
            <p className="card-desc">{expandido === anel.id ? anel.descricao : anel.descricao.slice(0, 100) + "..."}</p>
            <button className="card-btn" onClick={() =>
             setExpandido(expandido === anel.id ? null : anel.id)
              } > {expandido === anel.id ? "Ver menos" : "Ver mais"} </button>
          </div>

        ))}
      </div>
    </div>
  );
}
