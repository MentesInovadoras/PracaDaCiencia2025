import './institucional.css';
import logo_desenho_institucional from '../../images/logo_original.png';
import logo_prefeitura_institucional from '../../images/Logo_PMV_nova.png';


export default function Institucional() {
  return (
    <div className="container">
      <div className="form-card">
      <div className="logo-container">
        <a href="/Home">
          <img src={logo_desenho_institucional} alt="Logo Desenho" className="logo-desenho_institucional" />
        </a>
        <a href="https://www.vitoria.es.gov.br/" target ="_blank">
          <img src={logo_prefeitura_institucional} alt="Logo Prefeitura" className="logo-prefeitura_institucional" />
        </a>
      </div>

      <div className="form-content">
        <h1 className="form-title">Formulário de Agendamento</h1>
        <hr className="linha"/>
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
            <input type="text"
            placeholder=''
            className='campo-outro'
            name="instituicaoOutro"
            />
          </div>

          <button type="submit" className="botao_continuar">Continuar</button>
        </form>
      </div>         
    </div>
  </div>
  );
}
