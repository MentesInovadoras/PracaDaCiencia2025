import './orientacoes.css';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export default function OrientacoesVisitantes() {

  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    const agendamentoSucesso = Math.random() < 0.7; // 70% de chance de sucesso

    if (agendamentoSucesso) {
      alert("Agendamento realizado com sucesso!");
      navigate('/Home');
    } else {
      alert("Não foi possível realizar o agendamento.");
    }
  }, [navigate]);

  return (
    <>
      <Header />
        <div className='card-orientacoes'>
          <h1>Dicas da Praça da Ciência</h1>
          <ul className='dicas'>
            <li>Caso tenha interesse em compor um roteiro personalizado, entre em contato com a Praça da Ciência de Vitória, por e-mail ou telefone, e realize um planejamento pedagógico integrado;</li>
            <li>Sugerimos uso de boné, filtro solar e garrafinhas de água;</li>
            <li>Recomendamos uso de repelente;</li>
            <li>Os estudantes estão autorizados a lancharem no espaço. É preciso trazer o lanche, pois não há cantina ou estabelecimentos comerciais vizinhos;</li>
            <li>Em caso de atrasos, a visita poderá sofrer alterações;</li>
            <li> Solicitamos que os educadores acompanhem os estudantes durante a mediação das visitas. Lembramos que promovemos uma visita de estudos, assim precisamos da colaboração dos profissionais da unidade de ensino para melhor aproveitamento das atividades;</li>
            <li>Em cada equipamento, há uma placa com um QR-Code que dá acesso a vídeos em Libras explicando o funcionamento do equipamento.</li>
          </ul>
        </div> 
        <button type="button" id="botao_agendar" onClick={handleClick}>
        AGENDAR
        </button>
        <Footer />    
    </>
  );
}
