import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import NewCareer from '../newCarrer/newcarrer';

describe('NewCareer component', () => {
  const colleges = [
    { name: 'Universidad de los Andes', carrers: ['Ingenieria de sistemas y computación', 'Ingenieria quimica y de alimentos'] },
    { name: 'Pontificia Universidad Javeriana', carrers: ['Ingenieria Industrial', 'Comunicación social y periodismo'] },
  ];

  it('renders correctly', () => {
    const { container } = render(
      <IntlProvider locale="en">
        <MemoryRouter>
          <NewCareer />
        </MemoryRouter>
      </IntlProvider>
    );
    expect(container.getElementsByClassName('new_career_main__container')).toHaveLength(1);
  });

  it('handles university and career selection', () => {
    const { getByLabelText } = render(
      <IntlProvider locale="en">
        <MemoryRouter>
          <NewCareer />
        </MemoryRouter>
      </IntlProvider>
    );
    const universitySelect = getByLabelText('Escoge tu universidad:');
    const careerSelect = getByLabelText('Escoge tu carrera principal:'); // Asegúrate de que 'Escoge tu carrera:' es la etiqueta correcta para el select de carreras
  
    fireEvent.change(universitySelect, { target: { value: 'Universidad de los Andes' } });
    expect(universitySelect.value).toBe('Universidad de los Andes');
  
    fireEvent.change(careerSelect, { target: { value: 'Ingenieria de sistemas y computación' } });
    expect(careerSelect.value).toBe('Ingenieria de sistemas y computación');
  });

  it('handles submit click', () => {
    const { getByLabelText, getByText } = render(
      <IntlProvider locale="en">
        <MemoryRouter>
          <NewCareer />
        </MemoryRouter>
      </IntlProvider>
    );
    const universitySelect = getByLabelText('Escoge tu universidad:');
    const careerSelect = getByLabelText('Escoge tu carrera principal:');
    const submitButton = getByText('Comenzar viaje'); // Asegúrate de que 'Escoge tu carrera principal' es el texto correcto para el botón de envío
  
    fireEvent.change(universitySelect, { target: { value: 'Universidad de los Andes' } });
    fireEvent.change(careerSelect, { target: { value: 'Ingenieria de sistemas y computación' } });
    fireEvent.click(submitButton);
  
    // Aquí puedes agregar expectativas para verificar que la acción de envío se realizó correctamente
  });

  it('does not submit when university and career are not selected', () => {
    const { getByText } = render(
      <IntlProvider locale="en">
        <MemoryRouter>
          <NewCareer />
        </MemoryRouter>
      </IntlProvider>
    );
    const submitButton = getByText('Comenzar viaje');
  
    // Espía la función window.alert
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  
    fireEvent.click(submitButton);
  
    // Verifica que se llamó a window.alert con el mensaje correcto
    expect(alertSpy).toHaveBeenCalledWith('Por favor selecciona una universidad y una carrera');
  
    // Limpia el espía
    alertSpy.mockRestore();
  });
});