import './syllabus.scss';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Metrics from '../../images/metrics1.png';
import SemesterCard from '../semesterCard/semestercard'
import DISCpensum from '../../carrers_json/DISC.json';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

function Syllabus() {

    const { carrer } = useParams();
    // eslint-disable-next-line
    const pensum = DISCpensum;
    const [allCoursesJson, setAllCoursesJson] = useState('');
    useEffect(() => {
        const allCourses = pensum.reduce((acc, semesterData) => {
            return acc.concat(semesterData.cursos);
        }, []);
    
        const allCoursesJson = JSON.stringify(allCourses);
        setAllCoursesJson(allCoursesJson);
        console.log(allCoursesJson);
    }, [pensum]);
    
    return (
        <div id="syllabus__main__container">
            <div id='content__container'>
                <Navbar />

                <div id='title__and__metrics'>
                    <h1 id='title'><span id='syllabus'><FormattedMessage id='Pénsum'/>: </span>{carrer}</h1>
                    <button id='statistics__btn'><FormattedMessage id='Generar métricas '/> <img id='metrics__img' src={Metrics} alt="metricas" /></button>
                </div>

                <div id='semester__info__container'>
                    {pensum.map((semesterData, index) => (
                        <div id='semester__grid__container'>
                            <SemesterCard key={index} semesterDta={semesterData} listaCursos={allCoursesJson} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Syllabus;