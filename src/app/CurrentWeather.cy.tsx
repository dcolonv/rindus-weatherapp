
import CurrentWeather from './CurrentWeather'
/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.

describe('<CurrentWeather />', () => {
    it('should render and display CurrentWeather', () => {
        cy.mount(<CurrentWeather current={{ temp_c: 29, wind_kph: 68, humidity: 70, condition: { icon: '//cdn.weatherapi.com/weather/64x64/day/113.png', text: 'Sunny' } }} />)

        cy.contains("Today,");
        cy.contains("Sunny");
        cy.contains("29°C");
        cy.contains("68 km/h");
        cy.contains("70%");
    })
});