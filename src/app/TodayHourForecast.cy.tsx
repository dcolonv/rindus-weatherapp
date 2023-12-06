import TodayHourForecast from './TodayHourForecast'
/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.

const todayHours =
    [
        {
            "time": "2023-12-06 10:00",
            "temp_c": 28.9,
            "condition": {
                "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
            },
        },
        {
            "time": "2023-12-06 11:00",
            "temp_c": 29.4,
            "condition": {
                "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
            },
        },
        {
            "time": "2023-12-06 12:00",
            "temp_c": 29.5,
            "condition": {
                "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
            },
        },
        {
            "time": "2023-12-06 13:00",
            "temp_c": 29.6,
            "condition": {
                "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
            },
        },
        {
            "time": "2023-12-06 14:00",
            "temp_c": 29.6,
            "condition": {
                "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
            },
        }
    ]

describe('<TodayHourForecast />', () => {
    it('should render and display TodayHourForecast', () => {
        cy.mount(<TodayHourForecast todayHours={todayHours} />);
        cy.get('[data-cy="hour_forecast"]').should('have.length', todayHours.length);
        cy.get('[data-cy="hour_forecast"]').first().contains('28.9°C');
        cy.get('[data-cy="hour_forecast"]').first().contains('10:00');
        cy.get('[data-cy="hour_forecast"]').last().contains('29.6°C');
        cy.get('[data-cy="hour_forecast"]').last().contains('14:00');
    })
})