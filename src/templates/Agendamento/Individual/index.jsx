
import './individual.css';
import logo_desenho_individual from '../../images/logo_original.png';
import logo_prefeitura_individual from '../../images/Logo_PMV_nova.png';


export default function Individual() {
  return (
    <div className="container">
      <div className="form-card">
      <div id="logo-container-individual">
        <a href="/Home">
          <img src={logo_desenho_individual} alt="Logo Desenho" id="logo-desenho_individual" />
        </a>
      </div>

      <div className="form-content">
        <h1 id="form-title-individual">Formulário de Agendamento</h1>
        <hr />
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

        <footer>
          <div>
            <a href="https://www.vitoria.es.gov.br/" target ="_blank">
              <img src={logo_prefeitura_individual} alt="Logo Prefeitura" className="logo_rodape" />
            </a>
          </div>
          <div>
            <p class="texto_tit_rodape">PREFEITURA MUNICIPAL DE VITÓRIA</p>
            <p class="texto_rodape">Avenida Marechal Mascarenhas de Moraes, 1.927</p>
            <p class="texto_rodape">Bento Ferreira, Vitória, ES - CEP: 29.050-945</p>
            <p class="texto_rodape">Telefone: (27) 3382-6000 - Protocolo Geral</p>
            <p class="texto_rodape">(Atendimento ao público de 08 às 17 horas)</p>
          </div>
        </footer>
        
      </div>         
    </div>
  </div>
  );
}
