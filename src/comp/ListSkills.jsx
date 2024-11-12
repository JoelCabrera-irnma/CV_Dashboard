// ListSkills.jsx
import { useEffect, useState } from 'react';

const ListSkills = () => {
  const [iconNames, setIconNames] = useState([]);

  useEffect(() => {
    fetch('/src/iconList.json')
      .then(response => response.json())
      .then(data => setIconNames(data))
      .catch(error => console.error('Error al cargar iconList.json:', error));
  }, []);

  return (
    <div>
      {iconNames.map((iconName, index) => (
        <img
          key={index}
          src={`/src/assets/skills/${iconName}`}
          alt={`icon-${index}`}
          style={{ width: '60px', height: '60px' }}
        />
      ))}
    </div>
  );
};

export default ListSkills;
