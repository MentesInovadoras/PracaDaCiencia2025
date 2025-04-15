import './guiado.css';
import Header from '../../../components/Header.jsx';
import Footer from '../../../components/Footer.jsx';

export default function Guiado() {
  return (
    <>
      <Header />
      <div className="form-content-guiado">
        <h1 id="form-title-guiado">Formulário de Agendamento</h1>
        <hr id="hr_form" />
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

          <button type="submit" className="botao_continuar_guiado">Continuar</button>
        </form>
      </div> 
      <Footer />        
    </>
  );
}
