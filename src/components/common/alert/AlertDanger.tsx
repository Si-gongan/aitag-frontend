import React from 'react';

interface AlertDangerProps {
  message: string;
}

const AlertDanger: React.FC<AlertDangerProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div style={{
      backgroundColor: 'rgba(255, 93, 93, 0.07)',
      color: '#FF5D5D',
      padding: '10px 20px',
      margin: '10px',
      border: '1px solid #FF5D5D',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
    }}>
      <svg style={{ marginRight: '10px', width: '24px', height: '24px' }} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="none" stroke="#FF5D5D" strokeWidth="2"/>
        <path d="M12 7v5m0 4h.01" stroke="#FF5D5D" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      {message}
    </div>
  );
}

export default AlertDanger;