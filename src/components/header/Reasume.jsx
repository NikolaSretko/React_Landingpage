import React, { useState } from 'react';

const ResumePopup = ({ closePopup }) => {
  return (
    <div className="resume-popup">
      {/* Hier füge deine ausführliche Beschreibung ein */}
      <h2>Nikola Sretkovic - Resume</h2>
      <p>Skilled photo and media designer, music producer, and Frontend Web Developer...</p>
      {/* Weitere Abschnitte hier hinzufügen, je nach Bedarf */}
      <button onClick={closePopup}>Close</button>
    </div>
  );
};

export default ResumePopup;
