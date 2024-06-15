import './newcarrer.scss'
import Navbar from '../navbar/navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

function NewCarrer() {

  const colleges = [{
    name: 'Universidad de los Andes',
    carrers: ['Ingenieria de sistemas y computación', 'Ingenieria quimica y de alimentos']
  },
  {
    name: 'Pontificia Universidad Javeriana',
    carrers: ['Ingenieria Industrial', 'Comunicación social y periodismo']
  }];

  const [universidad, setUniversidad] = useState('');
  const [carrer, setCarrer] = useState('')
  const [carreras, setCarreras] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (universidad && carrer) {
      console.log(carrer);
      console.log(universidad);
      navigate(`/syllabus/${universidad}/${carrer}`); // reemplaza '/ruta-deseada' con la ruta a la que deseas navegar
    } else {
      alert('Por favor selecciona una universidad y una carrera');
    }
  }

  const handleUniversidadChange = (event) => {
    const universidadSeleccionada = event.target.value;
    setUniversidad(universidadSeleccionada);
    const collegeFound = colleges.find(college => college.name === universidadSeleccionada);
    if (collegeFound) {
      setCarreras(collegeFound.carrers);
    } else {
      setCarreras([]);
    }
  };

  const handleCarrerChange = (e) => {
    setCarrer(e.target.value);
  };

  return (
    <div className="new_career_main__container">

      <div id='background__container'>

        <div id='navbar__container' className='grid__item'>
          <Navbar />
        </div>

        <div id='main__content__container'>

          <div className='content__container' id='info__container'>
            <h2 id='lema'><FormattedMessage id="Comienza tu viaje hacia el"/> <span id='exito'><FormattedMessage id="éxito"/></span></h2>
            <p id='support__text'>
            <FormattedMessage id="En este apartado deberás escoger a
              que institución educativa perteneces y
              tu carrera principal"/>
              . </p>
          </div>

          <div className='content__container' id='form__container'>
            <h1 id='primeros__pasos'><FormattedMessage id="Primeros pasos"/> </h1>

            <form id='college__form' onSubmit={handleSubmit}>
              <div id='college__selection' className='div__input'>
                <label htmlFor="universidad"> <FormattedMessage id="Escoge tu universidad"/>:</label>
                <select id="universidad" name="universidad" value={universidad} onChange={handleUniversidadChange}>
                  <option className='empty__option' value=""> <FormattedMessage id="Selecciona una universidad..."/></option>
                  {colleges.map((college, index) => (
                    <option key={index} value={college.name}>{college.name}</option>
                  ))}
                </select>
              </div>
              <div id='carrer__selection' className='div__input'>
                <label htmlFor="carrera"> <FormattedMessage id="Escoge tu carrera principal"/>:</label>
                <select id="carrera" name="carrera" value={carrer} onChange={handleCarrerChange}>
                  <option className='empty__option' value=""> <FormattedMessage id="Selecciona una carrera..."/> </option>
                  {carreras.map((carrera, index) => (
                    <option key={index} value={carrera}>{carrera}</option>
                  ))}
                </select>
              </div>
              <div id='btn__container'>
                <button type='submit'> <FormattedMessage id="Comenzar viaje"/></button>
              </div>
            </form>

          </div>

        </div>

        <div id='footer__container'>
          <p> <FormattedMessage id="¿Necesitas ayuda?"/></p>
        </div>

      </div>

    </div>
  );
}

export default NewCarrer;