import './infos.css';
import React, { useState } from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';
import img10 from '../images/img10.jpg';
import img11 from '../images/img11.jpg';
import img12 from '../images/img12.jpg';
import facebookIcon from '../Icones/facebook.png';
import instagramIcon from '../Icones/instagram.png';
import setaIcon from '../Icones/down-arrow.png';


export default function InfosAdicionais() {
    const [expandedImage, setExpandedImage] = useState(null);

    const handleImageClick = (img) => {
        setExpandedImage(img);
  };
    const handleClose = () => {
        setExpandedImage(null);
  };
  return (
    <>  
        <Header />
        <div className="infos-container">
            <section id="sobre" className="info-section">
                <h2>Sobre a Praça da Ciência</h2>
                <p>
                    <strong>A Praça da Ciência é um espaço interativo de divulgação científica que tem como 
                    objetivo aproximar a ciência da sociedade de forma lúdica, acessível e educativa. 
                    Por meio de experimentos práticos, exposições interativas e atividades guiadas, 
                    o local estimula a curiosidade, o pensamento crítico e o interesse pelo conhecimento, 
                    especialmente entre crianças e jovens.
                    Voltada para a promoção da educação científica fora do ambiente escolar tradicional, 
                    a Praça oferece uma oportunidade única para aprender brincando, explorar fenômenos naturais e tecnológicos e vivenciar o processo científico de maneira prática. É um ambiente aberto à comunidade, que valoriza a inclusão, a criatividade e a construção coletiva do saber.</strong>
                </p>
            </section>

        <section id="galeria" className="info-section">
            <h2>Galeria de Fotos</h2>
            <div className="galeria">
                <img src={img1} alt="Foto 1" onClick={() => handleImageClick(img1)} />
                <img src={img2} alt="Foto 2" onClick={() => handleImageClick(img2)} />
                <img src={img3} alt="Foto 3" onClick={() => handleImageClick(img3)} />
                <img src={img4} alt="Foto 4" onClick={() => handleImageClick(img4)} />
                <img src={img5} alt="Foto 5" onClick={() => handleImageClick(img5)} />
                <img src={img6} alt="Foto 6" onClick={() => handleImageClick(img6)} />
                <img src={img7} alt="Foto 7" onClick={() => handleImageClick(img7)} />
                <img src={img8} alt="Foto 8" onClick={() => handleImageClick(img8)} />
                <img src={img9} alt="Foto 9" onClick={() => handleImageClick(img9)} />
                <img src={img10} alt="Foto 10" onClick={() => handleImageClick(img10)} />
                <img src={img11} alt="Foto 11" onClick={() => handleImageClick(img11)} />
                <img src={img12} alt="Foto 12" onClick={() => handleImageClick(img12)} />
            </div>
        </section>

{/* ampliar a imagem ao clicar */}
        {expandedImage && (
          <div className="modal" onClick={handleClose}>
            <img src={expandedImage} alt="Imagem expandida" className="modal-image" />
          </div>
        )}

        <section id="secao_duvidas">
            <div>
                <h2>Dúvidas Frequentes</h2>
                
                <div class = "duvida">
                    <h3>Como agendar uma visita?</h3>
                    <img className="seta" src={setaIcon} alt="down-arrow" alt=""></img>
                    <p class="resposta">
                        Acesse o menu de agendamento e escolha a data e horário disponíveis.
                    </p>
                </div>
                <div class="duvida">
                    <h3>As visitas são gratuitas?</h3>
                    <p class="resposta">
                        Sim, todas as visitas são gratuitas.
                    </p>
                </div>
                <div class="duvida">
                    <h3>Qual a duração da visita?</h3>
                    <p class="resposta">
                        Em média, 1 hora e 30 minutos.
                    </p>
                </div>
            </div>
        </section>



        <section id="contato" className="info-section">
            <h2>Contato</h2>
            <h3>CENTROS DE CIÊNCIA, EDUCAÇÃO E CULTURA - CCEC</h3>
            <h3>Secretaria Municipal de Educação - SEME</h3>
            <h3>Prefeitura Municipal de Vitória - PMV</h3>           
            <p>https://aprendevix.edu.vitoria.es.gov.br/ccec</p>
            <p>https://ccec_pc@edu.vitoria.es.gov.br</p>
            <p>Telefone: (27) 3345-0882</p>
            <p>
                <img id="facebook" src={facebookIcon} alt="facebook" style={{width: '40px', height: '40px'}} />
                Praça da Ciência</p>
            <p>
                <img id="insta" src={instagramIcon} alt="Instagram" style={{width: '40px', height: '40px'}} />
                @ciencia.vix
            </p>
        </section>
    </div>
    <Footer />    
    </>
  );
}
