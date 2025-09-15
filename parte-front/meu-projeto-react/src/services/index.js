export async function registerUser(name, email, password) {
  try{
      const response =  await fetch('http://localhost:3307/auth/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
         body: JSON.stringify({ name,email, password })
      }
    )

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    document.getElementById("mensagem").textContent = "tudo certo"
    document.getElementById("mensagem").style.color = "green";
     return dados = {nome: name, email: email, senha: password}
  }catch(erro){
    document.getElementById("mensagem").textContent = "Erro: " + erro
    document.getElementById("mensagem").style.color = "red";
  }

  }