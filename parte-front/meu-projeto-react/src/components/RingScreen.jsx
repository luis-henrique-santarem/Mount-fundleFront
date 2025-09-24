import React, { useState, useEffect } from "react";
import Ring from "../images/ring.png";
import RingElfo from "../images/ringelfo.png";
import RingFire from "../images/ringfire.png";
import RingIce from "../images/ringice.png";
import RingShadow from "../images/ringshadow.png";
import RingLight from "../images/ringlight.png";
import Unknown from "../images/unknown.png"; // imagem de interrogação
import "./ringscreen.css";

export default function RingScreen() {
  const [expandido, setExpandido] = useState(null);
  const [rings, setRings] = useState([]);

  useEffect(() => {
    const getRings = async () => {
      try {
        const request = await fetch("http://localhost:3307/anel/rings/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        const response = await request.json();
        setRings(response.data || []);
      } catch (err) {
        console.error(" Erro ao carregar anéis", err);
      }
    };

    getRings();
  }, []);

  // mapeia imagens fixas para os primeiros 6 anéis
  const imagens = [Ring, RingElfo, RingFire, RingIce, RingShadow, RingLight];

  // quantidade de slots que quero mostrar
  const totalSlots = 4;

  return (
    <div className="ring-screen">
      <h2 className="ring-title">Artefatos Lendários</h2>

      <div className="card-grid">
        {Array.from({ length: totalSlots }).map((_, index) => {
          const ring = rings[index]; // pega anel do backend se existir
          const img = ring ? imagens[index] : Unknown;

          return (
            <div key={index} className="card">
              {/* Imagem */}
              <img
                src={img}
                alt={ring ? ring.name : "Relíquia não descoberta"}
                className="card-img"
              />

              {/* Nome */}
              <h3 className="card-title">
                {ring ? ring.name : "???"}
              </h3>

              {/* Descrição */}
              <p className="card-desc">
                {ring
                  ? expandido === ring.id
                    ? ring.descricao
                    : ring.descricao.slice(0, 75) + "..."
                  : "Uma relíquia misteriosa ainda não descoberta..."}
              </p>

              {/* Botão */}
              {ring && (
                <button
                  className="card-btn"
                  onClick={() =>
                    setExpandido(expandido === ring.id ? null : ring.id)
                  }
                  aria-expanded={expandido === ring?.id}
                >
                  {expandido === ring?.id ? "Ver menos" : "Ver mais"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
