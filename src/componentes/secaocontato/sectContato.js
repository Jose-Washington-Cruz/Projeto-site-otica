
function secaoContato(){
    return(
        <div className="secao-contato">
            <h1 className="subtitulos">Fale conosco</h1>
            <p>não perca tempo, venha conhecer uma de nossas lojas ou entre em contato atravês de nossas redes socias ou de central de atendimento</p>

            <section className="container-conatato">
                <div className="contato">
                    <h3>contato</h3>
                    <p>
                        <img src="../assets/local.png"></img>Nova Iguaçu,RJ
                    </p>

                    <p>
                        <img src="../assets/telefone.png"></img>(21)999-9999
                    </p>

                    <p>
                        <img src="../assets/email.png"></img>Contato@oticavida.com
                    </p>
                </div>

                <div className="rede-sociais">
                    <h3>Nossas Redes</h3>
                    <p>
                        <img src="../assets/fb.png"></img>/OticaVida
                    </p>

                    <p>
                        <img src="../assets/ig.png"></img>@oticavidarj
                    </p>

                    <p>
                        <img src="../assets/tt.png"></img>@oticavidarj
                    </p>
                </div>
            </section>
        </div>
    )
}

export default secaoContato;