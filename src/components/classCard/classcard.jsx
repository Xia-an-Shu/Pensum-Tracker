import './classcard.scss'
import ConfigIcon from '../../images/config.png'
import { useState, useEffect, useRef} from 'react';
import { FormattedMessage } from 'react-intl';

function ClassCard({ claseDta, prerrequisitos }) {
    const [codigo, setCodigo] = useState(claseDta.codigo);
    const [creditos, setCreditos] = useState(claseDta.creditos);
    const [nombre, setNombre] = useState(claseDta.nombre);
    const cardRef = useRef(null);

    useEffect(() => {
        setCodigo(claseDta.codigo);
        setCreditos(claseDta.creditos);
        setNombre(claseDta.nombre);
    }, [claseDta]);


    return (
        <div className="classcard-main-container">

            <div ref={cardRef} id='class__card__container'>
                <div id='cod__container'>
                    <h2 className='titulo__item'><FormattedMessage id='Código'/>:</h2>
                    <p className='valor__item'>{codigo}</p>
                </div>
                <img src={ConfigIcon} alt="config icon" id='config__icon'/>
                <div id='credits__container'>
                    <h2 className='titulo__item'><FormattedMessage id='Créditos'/>:</h2>
                    <p className='valor__item'>{creditos}</p>
                </div>
                <div id='status__container'>
                    <h2 className='titulo__item'><FormattedMessage id='Estado'/>:</h2>
                    <p className='valor__item'>Pendiente</p>
                </div>
                <div id='grade__container'>
                    <h2 className='titulo__item'><FormattedMessage id='Nota actual'/>:</h2>
                    <p className='valor__item'>0.0</p>
                </div>
                <div id='name__container'>
                    <h1 id='name__item'>
                        {nombre}
                    </h1>
                </div>
            </div>

        </div>
        
    );
}

export default ClassCard;