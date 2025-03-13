import './AgendamentoForm.css';
import logo_praca from '../images/logo_desenho.png';
import logo_prefeitura from '../images/logo_prefeitura.png';

export default function AgendamentoForm() {
  return (
    <div className="container">
      <div className="header">
        <span className="page-title">Agendamento Individual</span>
      </div>

      <div className="form-card">
        <img src={logo_praca} alt="Praça da Ciência" className="logo-left" />

        <div className="form-content">
          <h1 className="form-title">Formulário de Agendamento</h1>
          
          <form>
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Nome" required />
            <input type="text" placeholder="CEP" required />
            <input type="text" placeholder="Telefone de Contato" required />

            <button type="submit">Continuar</button>
          </form>
        </div>

        <img src={logo_prefeitura} alt="Prefeitura de Vitória" className="logo-right" />
      </div>
    </div>
  );
}
