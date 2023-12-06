import SearchCityDialog from './SearchCityDialog'
/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.

describe('<SearchCityDialog />', () => {
    it('should render and display SearchCityDialog and Results', () => {
        const onBack = cy.stub();
        const onSelectCity = cy.stub();
        cy.mount(<SearchCityDialog open onClose={onBack} onSelectCity={onSelectCity} />);

        cy.get('[data-cy="search-city-modal"]').should('exist');
        cy.get('[data-cy="search-input"]').type("New York");
        cy.get('[data-cy="search-result"]').first().click().then(() => {
            expect(onSelectCity).to.be.called;
        });
        cy.get('[data-cy="search-back"]').click().then(() => {
            expect(onBack).to.be.called;
        });
    })
})

describe('<SearchCityDialog />', () => {
    it('should render null on open=false', () => {
        const onBack = cy.stub();
        const onSelectCity = cy.stub();
        cy.mount(<SearchCityDialog open={false} onClose={onBack} onSelectCity={onSelectCity} />);
        cy.get('[data-cy="search-city-modal"]').should('not.exist');
    })
})