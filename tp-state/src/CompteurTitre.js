import { useState, useEffect } from 'react';

function CompteurTitre() {
  const [compte, setCompte] = useState(0);

  useEffect(() => {
    document.title = `Clics : ${compte}`;
  }, [compte]);

  return (
    <div>
      <p>Nombre de clics : {compte}</p>
      <button onClick={() => setCompte(compte + 1)}>
        Incrémenter
      </button>
    </div>
  );
}

export default CompteurTitre;