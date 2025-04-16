import '../agendamento.css';
import Header from '../../../components/Header.jsx';
import Footer from '../../../components/Footer.jsx';

export default function Institucional() {
  return (
    <>
      <Header />
        <div className="form-card">
          <h1 id="form-title">Formulário de Agendamento</h1>
          <hr id="hr_form"/>
          <form className="Formulario">
          <h2 id="E-mail">E-mail do Responsável:</h2>
          <input id="caixa_E-mail" type="email" placeholder="visitante@email.com" required/>
          <h2 id="Nome">Nome Completo do Responsável:</h2>
          <input id="caixa_Nome" type="text" placeholder="digite seu nome completo..." required />
          <h2 id="CPF">CPF do Responsável:</h2>
          <input id="caixa_CPF" type="text" placeholder="digite seu CPF..." required />
          <h2 id="Telefone">Telefone do Responsável:</h2>
          <input id="caixa_Telefone" type="text" placeholder="(27) 90000-0000" required />
          <h2 id="Nome_da_Instituicao">Instituição:</h2>
          <input id="caixa_Nome_da_Instituicao" type="text" placeholder="digite o nome da instituição" required />
          <h2 id="Municipio_da_Instituicao">Município da Instituição:</h2>
          <input id="caixa_Municipio_da_Instituicao" type="text" placeholder="digite o município da instituição" required />
          <h2 id="num_Visitantes">Número de Visitantes: </h2>
          <input id="caixa_num_Visitantes" type="text" placeholder="até 40 pessoas" required />

          <div className="-radio">
            <label className='titulo-radio'>Tipo:</label>
            <label> <input type="radio" name="instituicao" value="publica"/> Pública </label>
            <label> <input type="radio" name="instituicao" value="privada"/> Privada </label>
            <label> <input type="radio" name="instituicao" value="ong"/> ONG </label>
            <label> <input type="radio" name="instituicao" value="outro"/> Outro </label>
            <input type="text" placeholder='' className='campo-outro' name="instituicaoOutro"/>
          </div>
          <button type="submit" id="botao_continuar">Continuar</button>
        </form>
        </div>
      <Footer />
    </>         
  );
}
