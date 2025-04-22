import PropTypes from 'prop-types';
import SportsListItem from './SportsListItem';
import { getSports } from '../utils/api';
import { useEffect, useState } from 'react';

function SportsListWrapper({ children }) {
  return <div className='mt-8'>{children}</div>;
}

export default function SportsList({ query }) {
  const [isLoading, setIsLoading] = useState(true);
  const [sports, setSports] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const sports = await getSports(query);
        setSports(sports);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);

  if (isLoading) {
    return (
      <SportsListWrapper>
        <section>
          <h2 className='text-2xl font-bold mb-4'>Hasil Pencarian</h2>
          <p>Loading...</p>
        </section>
      </SportsListWrapper>
    );
  }

  if (!Array.isArray(sports)) {
    return (
      <SportsListWrapper>
        <section>
          <h2 className='text-2xl font-bold mb-4'>Hasil Pencarian</h2>
          <p>Error was happened...</p>
        </section>
      </SportsListWrapper>
    );
  }

  if (sports.length < 1) {
    return (
      <SportsListWrapper>
        <section>
          <h2 className='text-2xl font-bold mb-4'>Hasil Pencarian</h2>
          <p className='mb-4'>
            Menampilkan {sports.length} hasil pencarian untuk "{query}"
          </p>

          <p>Nothing was found...</p>
        </section>
      </SportsListWrapper>
    );
  }

  return (
    <SportsListWrapper>
      <section>
        <h2 className='text-2xl font-bold mb-4'>Hasil Pencarian</h2>
        <p className='mb-4'>
          Menampilkan {sports.length} hasil pencarian untuk "{query}"
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6'>
          {sports.map((sport) => (
            <SportsListItem key={sport.idTeam} {...sport} />
          ))}
        </div>
      </section>
    </SportsListWrapper>
  );
}

SportsList.propTypes = {
  query: PropTypes.string.isRequired,
};
