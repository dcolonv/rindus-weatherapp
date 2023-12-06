import Forecast from './Forecast'
/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.

const future =
    [
        {
            "date": "2023-12-07",
            "day": {
                "avgtemp_c": 25.9,
                "condition": {
                    "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                },
            },
        },
        {
            "date": "2023-12-08",
            "day": {
                "avgtemp_c": 25.9,
                "condition": {
                    "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                },
            },
        },
        {
            "date": "2023-12-09",
            "day": {
                "avgtemp_c": 26.1,
                "condition": {
                    "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                },
            },
        },
        {
            "date": "2023-12-10",
            "day": {
                "avgtemp_c": 26.3,
                "condition": {
                    "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
                },
            },
        }
    ]

describe('<Forecast />', () => {
    it('should render and display Forecast', () => {
        cy.mount(<Forecast future={future} />);
        cy.contains("Next Forecast");
        cy.get('[data-cy="next_forecast"]').should('have.length', future.length);
        cy.get('[data-cy="next_forecast"]').first().contains('Dec 7, 2023');
        cy.get('[data-cy="next_forecast"]').first().contains('25.9°C');
        cy.get('[data-cy="next_forecast"]').last().contains('Dec 10, 2023');
        cy.get('[data-cy="next_forecast"]').last().contains('26.3°C');
    })
})