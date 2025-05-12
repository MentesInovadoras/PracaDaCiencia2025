import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardVisit = ({ title, description, imageUrl, route }) => {
  const navigate = useNavigate();

  const handleSchedule = () => {
    navigate(route);
  };

  return (
    <div style={styles.card}>
      <img src={imageUrl} alt={title} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.title}>{title}</h2>
        {description && <p style={styles.description}>{description}</p>}
      </div>
      <button onClick={handleSchedule} style={styles.button}>
        AGENDAR
      </button>
    </div>
  );
};

export default function VisitsSection(){
  const cardsData = [
    {
      title: 'Visita Individual',
      description: '',
      imageUrl: '/templates/images/visita_individual.jpg', // Atualize o caminho conforme sua pasta de imagens
      route: '/Agendamento/Individual', // Supondo que o agendamento individual vá para o calendário
    },
    {
      title: 'Visita Guiada',
      description: 'até 10 pessoas',
      imageUrl: '/templates/images/visita_guiada.jpg', // Atualize o caminho conforme sua pasta de imagens
      route: '/Agendamento/Guiado', // Rota genérica de agendamento, ajuste se houver específica
    },
    {
      title: 'Visita Institucional',
      description: 'Escolas e outros grupos',
      imageUrl: '/templates/images/visita_institucional.jpg', // Atualize o caminho conforme sua pasta de imagens
      route: '/Agendamento/Institucional', // Rota genérica de agendamento, ajuste se houver específica
    },
    {
      title: 'Orientacoes',
      description: 'Orientações para os usuários',
      imageUrl: '',
      route: '/Agendamento/Orientacoes', // Rota genérica de agendamento, ajuste se houver específica
    },
  ];

  return (
    <div style={styles.container}>
      {cardsData.map((card, index) => (
        <CardVisit
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          route={card.route}
        />
      ))}
    </div>
  );
};