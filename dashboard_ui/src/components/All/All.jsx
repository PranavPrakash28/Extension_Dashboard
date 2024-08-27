import React from 'react';

const AIBlocker = () => {
  const [blockedAIs, setBlockedAIs] = React.useState({
    ChatGPT: false,
    Gemini: false,
    Bard: false
  });

  const toggleAI = (ai) => {
    setBlockedAIs(prev => ({...prev, [ai]: !prev[ai]}));
  };

  const toggleAll = () => {
    const allBlocked = Object.values(blockedAIs).every(value => value);
    setBlockedAIs({
      ChatGPT: !allBlocked,
      Gemini: !allBlocked,
      Bard: !allBlocked
    });
  };

  const allBlocked = Object.values(blockedAIs).every(value => value);

  return (
    <div style={styles.container}>
      {Object.keys(blockedAIs).map(ai => (
        <div key={ai} style={styles.row}>
          <span style={{
            ...styles.aiName,
            color: blockedAIs[ai] ? 'green' : 'white',
            textDecoration: blockedAIs[ai] ? 'green' : 'none'
          }}>{ai}</span>
          <div 
            style={{
              ...styles.toggle,
              backgroundColor: blockedAIs[ai] ? '#4CAF50' : '#ccc'
            }}
            onClick={() => toggleAI(ai)}
          >
            <div style={{
              ...styles.toggleButton,
              transform: blockedAIs[ai] ? 'translateX(20px)' : 'translateX(0)'
            }} />
          </div>
        </div>
      ))}
      <button onClick={toggleAll} style={styles.blockAllButton}>
        {allBlocked ? 'SUCCESSFULLY BLOCKED' : 'BLOCK ALL'}
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: '200px',
    padding: '10px',
    backgroundColor: '#2C2C2C',
    borderRadius: '10px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  aiName: {
    transition: 'color 0.3s, text-decoration 0.3s',
  },
  toggle: {
    width: '40px',
    height: '20px',
    backgroundColor: '#ccc',
    borderRadius: '10px',
    position: 'relative',
    cursor: 'pointer',
  },
  toggleButton: {
    width: '18px',
    height: '18px',
    backgroundColor: 'white',
    borderRadius: '50%',
    position: 'absolute',
    top: '1px',
    left: '1px',
    transition: 'transform 0.2s',
  },
  blockAllButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default AIBlocker;