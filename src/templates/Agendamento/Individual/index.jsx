import '../agendamento.css';
import Header from '../../../components/Header.jsx';
import Footer from '../../../components/Footer.jsx';

export default function Individual() {
  return (
    <>
      <Header />
        <div className="form-card">
          <h1 id="form-title">Formulário de Agendamento</h1>
          <hr id="hr_form" />
          <form className="Formulario">
            <h2 id="E-mail">E-mail:</h2>
            <input id="caixa_E-mail" type="email" placeholder="visitante@email.com" required />
            <h2 id="Nome">Nome Completo:</h2>
            <input id="caixa_Nome" type="text" placeholder="digite seu nome completo..." required />
            <h2 id="CPF">CPF:</h2>
            <input id="caixa_CPF" type="text" placeholder="digite seu CPF..." required />
            <h2 id="Telefone">Telefone:</h2>
            <input id="caixa_Telefone" type="text" placeholder="(27) 90000-0000" required />
            <h2 id="CEP">CEP:</h2>
            <input id="caixa_CEP" type="text" placeholder="digite o CEP de sua residência..." required />

            <button type="submit" id="botao_continuar">Continuar</button>
          </form>
        </div>
      <Footer />

    </>
  );
}
