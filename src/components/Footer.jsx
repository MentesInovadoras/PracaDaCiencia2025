import React from "react";
import "./Footer.css";
import logo_desenho_individual from '../templates/images/logo_original.png';
import logo_prefeitura_individual from '../templates/images/logo_PMV_nova.png';

export default function Footer() {
    return (
        <footer className="footer">
            <div>
              <a href="https://www.vitoria.es.gov.br/" target="_blank">
                <img src={logo_prefeitura_individual} alt="Logo Prefeitura" className="logo_pmv_rodape" />
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
              <img src={logo_desenho_individual} alt="Logo Desenho" className="logo-praca_rodape" />
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
    )
}