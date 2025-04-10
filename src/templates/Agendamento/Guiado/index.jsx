import './guiado.css';
import logo_desenho_guiado from '../../images/logo_original.png';
import logo_prefeitura_guiado from '../../images/Logo_PMV_nova.png';


export default function Guiado() {
  return (
    <div className="container">
      <div className="form-card">
      <div className="logo-container">
        <a href="/Home">
          <img src={logo_desenho_guiado} alt="Logo Desenho" className="logo-desenho_guiado" />
        </a>
        <a href="https://www.vitoria.es.gov.br/" target ="_blank">
          <img src={logo_prefeitura_guiado} alt="Logo Prefeitura" className="logo-prefeitura_guiado" />
        </a>
      </div>

      <div className="form-content">
        <h1 className="form-title">Formulário de Agendamento</h1>
        <hr />
          <form className="Form_guiado">
          <h2 className="E-mail">E-mail do Responsável:</h2>
          <input className="caixa_E-mail" type="email" placeholder="visitante@email.com" required />
          <h2 className="Nome">Nome Completo do Responsável:</h2>
          <input className="caixa_Nome" type="text" placeholder="digite seu nome completo..." required />
          <h2 className="CPF">CPF do Responsável:</h2>
          <input className="caixa_CPF" type="text" placeholder="digite seu CPF..." required />
          <h2 className="Telefone">Telefone do Responsável:</h2>
          <input className="caixa_Telefone" type="text" placeholder="(27) 90000-0000" required />
          <h2 className="CEP">CEP do Responsável:</h2>
          <input className="caixa_CEP" type="text" placeholder="digite o CEP de sua residência..." required />
          <h2 className="num_Visitantes">Número de Visitantes: </h2>
          <input className="caixa_num_Visitantes" type="text" placeholder="até 10 pessoas" required />

          <button type="submit" className="botao_continuar">Continuar</button>
        </form>
      </div>         
    </div>
  </div>
  );
}
