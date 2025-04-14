
import './individual.css';
import logo_desenho_individual from '../../images/logo_original.png';
import logo_prefeitura_individual from '../../images/Logo_PMV_nova.png';


export default function Individual() {
  return (
    <>
      <header>
        <div id="logo-container-individual">
          <a href="/Home">
            <img src={logo_desenho_individual} alt="Logo Desenho" id="logo-desenho_individual" />
          </a>
        </div>
      </header>

      <div className="form-card-individual">
        <div className="form-content">
          <h1 id="form-title-individual">Formulário de Agendamento</h1>
          <hr id="linha_form" />
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

          <footer>
            <div>
              <a href="https://www.vitoria.es.gov.br/" target="_blank">
                <img src={logo_prefeitura_individual} alt="Logo Prefeitura" className="logo_rodape" />
              </a>
            </div>
            <div className='texto_rodape_container'>
              <p class="texto_tit_rodape">PREFEITURA MUNICIPAL DE VITÓRIA</p>
              <p class="texto_rodape">Avenida Marechal Mascarenhas de Moraes, 1.927 <br />
              Bento Ferreira, Vitória, ES - CEP: 29.050-945 <br />
              Telefone: (27) 3382-6000 - Protocolo Geral <br />
              (Atendimento ao público de 08 às 17 horas)</p>
            </div>
            <div>
              <img src={logo_desenho_individual} alt="Logo Desenho" className="logo-desenho_individual_rodape" />
            </div>
            <div className='texto_rodape_praca'>
              <p class="texto_tit_rodape">PRAÇA DA CIÊNCIA</p>
              <p class="texto_rodape">Avenida Américo Buaiz, S/N <br />
              Enseada do Suá, Vitória, ES - CEP: 29.050-420 <br />
              Telefone: (27) 3345-0882</p>
              <p class="texto_tit_rodape">ATENDIMENTO AO PÚBLICO</p>
              <p class="texto_rodape">Terça a sexta-feira: 8h às 12h e 13h às 17h <br />
              Sábado, domingo e feriado: 8h às 12h <br />
              Segunda-feira: fechado para limpeza e manutenção, mesmo que seja feriado.</p>
            </div>
          </footer>

        </div>
        </>
  );
}
