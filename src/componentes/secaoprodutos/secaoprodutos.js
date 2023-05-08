function secaoProdutos(){
    return (
        <div className="container-produtos">

            <div className="section-produto">
                
                <h2>Nossos Produtos</h2>
                <p>
                    Trabalhamos com oculos de Grau, Oculos de sol,lentes transition nos modelos masculino,feminino e infantil
                </p>

                <p>
                    Todos os nossos preços são acessiveis e contam com a melhor qualidade do mercado
                </p>

                <section className="container-card">
                    <div className="card">
                        <h3>Óculos de grau</h3>
                        <img src="../assets/oculos01.png"></img>
                        <p>R$ 500,00</p>
                    </div>

                    <div className="card">
                        <h3>Óculos transition</h3>
                        <img src="../assets/oculos02.png"></img>
                        <p>R$ 750,00</p>
                    </div>

                    <div className="card">
                        <h3>Óculos de sol</h3>
                        <img src="../assets/oculos03.png"></img>
                        <p>R$ 700,00</p>
                    </div>

                    <div className="card">
                        <h3>Óculos de infantil</h3>
                        <img src="../assets/oculos04.png"></img>
                        <p>R$ 500,00</p>
                    </div>

                </section>

                <section className="descrition">
                    <p>
                        Todos os nossos produtos incluem:
                    </p>

                    <ul>
                        <li>Garantia de 1 ano</li>
                        <li>Manutenção preventiva</li>
                        <li>Descontos especiais na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default secaoProdutos;