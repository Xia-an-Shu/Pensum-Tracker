
describe('Dropdown Test', () => {
  beforeEach(() => {
    // Antes de cada test, visita la página
    cy.visit('http://192.168.39.158:3000/new_carrer');
  });

  it('Selects an option from a dropdown', () => {

    // Asegúrate de que la lista desplegable sea visible y haz clic en ella
    cy.get('select[id="universidad"]').should('be.visible').select('Universidad de los Andes');

    cy.get('select[id="carrera"]').should('be.visible').select('Ingenieria de sistemas y computación');
    
    cy.get('button[type="submit"]').click();

    cy.get('h1').should('include.text', 'Ingenieria de sistemas y computación');
  
  });
});
