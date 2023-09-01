import cities from '../api/cities.json'

interface City {
    city: string;
    population: number;
}

const CityList = JSON.parse(JSON.stringify(cities));
export const sortedCityList = citiesSorter(CityList, 50000);

function filterCitiesByPopulation(arr: City[], populationRange: number): City[] {
    return arr.filter((item) => item.population > populationRange);
}

function findMaxPopulationCity(arr: City[]): City {
    return arr.reduce((acc, curr) => (acc.population > curr.population ? acc : curr));
}

function citiesSorter(arr: City[], populationRange: number): City[] {
    const filteredCities = filterCitiesByPopulation(arr, populationRange);
    if (filteredCities.length === 0) {
        return [];
    }
    const max = findMaxPopulationCity(filteredCities);
    return filteredCities.sort((a, b) => (a === max ? -1 : b === max ? 1 : a.city.localeCompare(b.city)));
}