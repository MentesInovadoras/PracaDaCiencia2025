import './individual.css';
import Header from '../../../components/Header.jsx';
import Footer from '../../../components/Footer.jsx';

export default function Individual() {
  return (
    <>
      <Header />
        <div className="form-card-individual">
          <h1 id="form-title-individual">Formulário de Agendamento</h1>
          <hr id="hr_form" />
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

            <button type="submit" className="botao_continuar_individual">Continuar</button>
          </form>
        </div>
      <Footer />

    </>
  );
}
