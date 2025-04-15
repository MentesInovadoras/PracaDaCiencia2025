import './institucional.css';
import Header from '../../../components/Header.jsx';
import Footer from '../../../components/Footer.jsx';

export default function Institucional() {
  return (
    <>
      <Header />
      <div className="form-content-institucional">
        <h1 id="form-title-institucional">Formulário de Agendamento</h1>
        <hr id="hr_form"/>
          <form className="Form_institucional">
          <h2 className="E-mail">E-mail do Responsável:</h2>
          <input className="caixa_E-mail" type="email" placeholder="visitante@email.com" required />
          <h2 className="Nome">Nome Completo do Responsável:</h2>
          <input className="caixa_Nome" type="text" placeholder="digite seu nome completo..." required />
          <h2 className="CPF">CPF do Responsável:</h2>
          <input className="caixa_CPF" type="text" placeholder="digite seu CPF..." required />
          <h2 className="Telefone">Telefone do Responsável:</h2>
          <input className="caixa_Telefone" type="text" placeholder="(27) 90000-0000" required />
          <h2 className="Nome_da_Instituicao">Instituição:</h2>
          <input className="caixa_Nome_da_Instituicao" type="text" placeholder="digite o nome da instituição" required />
          <h2 className="Municipio_da_Instituicao">Município da Instituição:</h2>
          <input className="caixa_Municipio_da_Instituicao" type="text" placeholder="digite o município da instituição" required />
          <h2 className="num_Visitantes">Número de Visitantes: </h2>
          <input className="caixa_num_Visitantes" type="text" placeholder="até 40 pessoas" required />

          <div className="instituicao-radio">
            <label className='titulo-radio'>Tipo:</label>
            <label>
              <input type="radio" name="instituicao" value="publica"/> Pública
            </label>
            <label>
              <input type="radio" name="instituicao" value="privada"/> Privada
            </label>
            <label>
              <input type="radio" name="instituicao" value="ong"/> ONG
            </label>
            <label>
              <input type="radio" name="instituicao" value="outro"/> Outro
            </label>
            <input type="text" placeholder='' className='campo-outro' name="instituicaoOutro"/>
          </div>

          <button type="submit" className="botao_continuar_institucional">Continuar</button>
        </form>
        </div>
      <Footer />
    </>         
  );
}
