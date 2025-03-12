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

const VisitsSection = () => {
  const cardsData = [
    {
      title: 'Visita Individual',
      description: '',
      imageUrl: '/assets/visita-individual.jpg', // Atualize o caminho conforme sua pasta de imagens
      route: '/WeekCalendar', // Supondo que o agendamento individual vá para o calendário
    },
    {
      title: 'Visita Guiada',
      description: 'até 10 pessoas',
      imageUrl: '/assets/visita-guiada.jpg', // Atualize o caminho conforme sua pasta de imagens
      route: '/WeekCalendar', // Rota genérica de agendamento, ajuste se houver específica
    },
    {
      title: 'Visita Institucional',
      description: 'Escolas e outros grupos',
      imageUrl: '/assets/visita-institucional.jpg', // Atualize o caminho conforme sua pasta de imagens
      route: '/WeekCalendar', // Rota genérica de agendamento, ajuste se houver específica
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

// Estilos inline para simplicidade (pode adaptar para CSS ou styled-components)
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '20px',
    gap: '20px',
  },
  card: {
    width: '280px',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  content: {
    padding: '16px',
  },
  title: {
    fontSize: '20px',
    margin: '10px 0',
  },
  description: {
    color: '#555',
    fontSize: '14px',
  },
  button: {
    margin: '16px',
    padding: '10px 20px',
    backgroundColor: '#F7931E',
    color: '#fff',
    border: 'none',
    borderRadius: '24px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default VisitsSection;
