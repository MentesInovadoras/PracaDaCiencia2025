
import './individual.css';
import logo_desenho from '../../images/logo_original.png';
import logo_prefeitura from '../../images/Logo_PMV_nova.png';


export default function Individual() {
  return (
    <div className="container">
      <div className="form-card">
      <div className="logo-container">
        <a href="/Home">
          <img src={logo_desenho} alt="Logo Desenho" className="logo-desenho" />
        </a>
        <a href="https://www.vitoria.es.gov.br/">
          <img src={logo_prefeitura} alt="Logo Prefeitura" className="logo-prefeitura" />
        </a>
      </div>

      <div className="form-content">
        <h1 className="form-title">Formulário de Agendamento</h1>
          <form className="Form_individual">
          <h2 className="E-mail">E-mail:</h2>
          <input className="caixa_E-mail" type="email" placeholder="visitante@email.com" required />
          <h2 className="Nome">Nome Completo:</h2>
          <input className="caixa_Nome" type="text" placeholder="digite seu nome completo..." required />
          <h2 className="CPF">CPF:</h2>
          <input className="caixa_CPF" type="text" placeholder="digite seu CPF..." required />
          <h2 className="Telefone">Telefone:</h2>
          <input className="caixa_Telefone" type="text" placeholder="(27) 90000-0000" required />
          <h2 className="CEP">CEP:</h2>
          <input className="caixa_CEP" type="text" placeholder="digite o CEP de sua residência..." required />

          <button type="submit" className="botao_continuar">Continuar</button>
        </form>
      </div>         
    </div>
  </div>
  );
}
