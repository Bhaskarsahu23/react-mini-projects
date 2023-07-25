/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from 'react';

const CitiesContext = createContext();
const BASE_URL = 'http://localhost:9000/cities';

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(BASE_URL);
        const data = await res.json();
        setCities(data);
      } catch {
        alert('There was an error loading data...');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert('There was an error loading data...');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error('CititesContext was used outside teh CitiesProvider');
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CitiesProvider, useCities };
