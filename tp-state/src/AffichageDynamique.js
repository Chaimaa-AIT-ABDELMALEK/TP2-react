import { useState } from 'react';

function AffichageDynamique() {
  const [compteur, setCompteur] = useState(0);

  function handleClick() {
    setCompteur(compteur + 1);
  }

  function getMessage() {
    if (compteur === 1) return "Premier clic";
    if (compteur === 2) return "Deuxième clic";
    if (compteur === 3) return "Troisième clic";
    return "Cliquez sur le bouton";
  }

  return (
    <div>
      <p>{getMessage()}</p>
      <button onClick={handleClick}>Cliquer</button>
    </div>
  );
}

export default AffichageDynamique;