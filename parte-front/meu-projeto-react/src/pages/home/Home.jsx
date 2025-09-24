import "./home.css"
import imageBoy from "../../images/boy.png"
import { useEffect, useState } from "react"

import RingScreen from "../../components/RingScreen";


export default function Home() {
    const [character, setCharacter] = useState({});
    const [selection, setSelection] = useState("info");




    useEffect(() => {
        const getCharacterInfo = async () => {


            const request = await fetch('http://localhost:3307/character/1', {

                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify()
            });

            const response = await request.json()

            console.log(response.data)




            setCharacter(response.data)

        }

        getCharacterInfo()


    }, [])


    return (
        <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="home_page">
                {/* MENU BAR */}
                <nav className="menu_bar">
                    <div className="brand">Mount<span>Fondle</span></div>
                    <ul className="menu_items">
                        <li className={`${selection === "info" ? "active" : ""}`} onClick={( ) => setSelection("info")}>Estatísticas</li>
                        <li  onClick={() => setSelection("rings")}>Rings</li>
                        
                        <li onClick={() => setSelection("exe")} >Executavel</li>
                    </ul>
                    <div className="right_box">
                        
                        <div className="avatar">PL</div>
                    </div>
                </nav>

                {/* CONTEÚDO */}


                {selection && selection === "info"  && <InfoByCharacter character={character} />}
                {selection && selection === "exe"  && <LocalExe/>}

                <div style={{padding: 30, width: "100%"}}>
                     {selection && selection === "rings"  && <RingScreen/>}
                </div>
               
                

            </div>
        </div>

    )
}


function LocalExe() {
    return (
        <div className="home_exe">
            <h1>Faça download do nosso Executavel </h1>
            <p>Jogo não está completo, porém já possui algumas integrações como statisticas de quantas vezes morremos matamos e pegamos os aneis</p>
            <ul>
                <li>Você precisa ter o jdk instalado</li>
                <li>Conexão com o nosso banco de dados e API</li>
                <li>Paciencia</li>
                <li>Você pode configurar o nome, vida e ataque do seu personagem <br /> Posteriormente pretendo fazer com os bosses também</li>
            </ul>

            <a href="/public/downloads/my2d.zip" download> Baixar MountFondle</a>
        </div>
    )
}


function InfoByCharacter({character}) {



    return (
        <div className="content_wrap">
            {/* RINGS */}
            <section className="rings_wrap">

                <img src={imageBoy} alt="" />




            </section>

            {/* ESTATÍSTICAS */}

            
            <section className="stats_grid">
                <div className="stat_card">
                    <small>HP</small>
                    <h3>{character.health ?? ""}</h3>
                </div>
                <div className="stat_card">
                    <small>ATK</small>
                    <h3>{character.attack ?? ""}</h3>
                </div>
                <div className="stat_card">
                    <small>Deaths</small>
                    <h3>{character.deaths}</h3>
                </div>
                <div className="stat_card">
                    <small>Bosses derrotados</small>
                    <h3>{character.defeatedBosses}</h3>
                </div>
            </section>
        </div>
    )
}