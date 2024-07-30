document.getElementById("btn-postar").addEventListener("click", () => {
    
    let textoPost = document.getElementsByClassName("textopostar")[0].value;
    let imagemAnexada = document.getElementById("btn-imagem")[0];

    let novaDiv = document.createElement('div');
    novaDiv.classList.add("post")

    novaDiv.innerHTML = `
                <div class="postagem">
                    <div id="imagemdopost"></div>
                        <div class="linksdopost">
                            <div class="iconeusuario">
                                <img src="../imagens/Rectangle 64.png" alt="iconedousuario">
                                <a href="usuariopage">@usuario</a>
                            </div>
                            <div class="botoesdopost">
                                <a><img src="../imagens/MessageOutlined.png" alt="fazercomentario"></a>
                                <a><img src="../imagens/Vector2.png" alt="curtir"></a>
                                <a><img src="../imagens/Vector3.png" alt="favoritar"></a>
                            </div>
                        </div>
                        <p>${textoPost}</p>
                </div>
                `

    let feedpostimagem = novaDiv.querySelector("#imagemdopost");
    if (textoPost === '' && imagemAnexada === undefined) {
        return alert("Post vazio!")
    }

    if (imagemAnexada !== undefined) {
        let novaImg = document.createElement('img');
        novaImg.scr = URL.createObjectURL(imagemAnexada);
        novaImg.alt = "";

        novaDiv.appendChild(novaImg)
    } else {
        novaDiv.removeChild(feedpostimagem)
    }

    document.getElementsByClassName("feed")[0].appendChild(novaDiv);
    document.getElementsByClassName("textopostar")[0].value = "";
})
