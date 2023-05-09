//importe conteudo
import SectionCapa from '../secaoCapa/secaocapa';
import SecaoProdutos from '../secaoprodutos/secaoprodutos';
import SecaoSobre from '../secaosobre/secaosobre';
import SecaoContato from '../secaocontato/sectContato';
import Rodape from '../rodape/secRodape'
//função conteudo
export default function conteudo(){
    return(
      <div className="conteudo">
        <SectionCapa />
        <SecaoProdutos />
        <SecaoSobre />
        <SecaoContato />
        <Rodape />
      </div>
    );
}
