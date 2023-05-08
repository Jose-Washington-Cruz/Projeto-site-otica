//importe conteudo
import SectionCapa from '../secaoCapa/secaocapa';
import SecaoProdutos from '../secaoprodutos/secaoprodutos'
//função conteudo
export default function conteudo(){
    return(
      <div className="conteudo">
        <SectionCapa />
        <SecaoProdutos />
      </div>
    );
}
