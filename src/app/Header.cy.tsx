import Header from './Header'
/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.

describe('<Header />', () => {
    it('should render and display Header', () => {
        const onClick = cy.stub();
        cy.mount(<Header location={{ name: 'San Jose', country: 'Costa Rica' }} onSearch={onClick} />)

        cy.contains("By David Colón")
        cy.get('[data-cy="location"]').contains('San Jose, Costa Rica');

        cy.get(`[data-cy="location"]`).click().then(() => {
            expect(onClick).to.be.called;
        });
    })
})