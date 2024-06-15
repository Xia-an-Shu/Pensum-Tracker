import './semestercard.scss'
import React, { useEffect, useState } from 'react';
import ClassCard from '../classCard/classcard';
import { FormattedMessage } from 'react-intl';

function SemesterCard({ semesterDta , listaCursos}) {
  const [numero, setNumero] = useState(0);
  const [promedio, setPromedio] = useState(0);
  const [numClases, setNumClases] = useState(0);
  const [clases, setClases] = useState([]);
  const [cursosPensum, setCursosPensum] = useState(listaCursos);


  useEffect(() => {
    // Fetch data from API
    setNumero(semesterDta.sem);
    setClases(semesterDta.cursos);
  },[semesterDta])

  useEffect(() => {
    console.log(clases);
    setNumClases(clases.length);
}, [numero,clases]);

  return (
  <div id='main__semester__container'>
    <div id="semester__card__main__container">
        <h1 id="semester__title"><FormattedMessage id='Semestre'/> {numero}</h1>
        <h2 id="classes__title"><FormattedMessage id='Courses'/></h2>
        <p id="classes__num">{clases.length}</p>
        <h2 id="GPA__title"><FormattedMessage id='Average grade'/></h2>
        <p id="GPA__num">{promedio}</p>
    </div>
        <div id='clases__container'>
        {clases.map((curso, index) => (
            <ClassCard key={index} claseDta={curso} prerrequisitos={listaCursos} />
        ))}
        </div>

    </div>
  );
}

export default SemesterCard;