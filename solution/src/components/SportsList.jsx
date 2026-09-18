import PropTypes from 'prop-types';
import SportsListItem from './SportsListItem';
import { getSports } from '../utils/api';
import { useEffect, useState } from 'react';

function SportsListWrapper({ children }) {
  return (
    <section>
      <h2 className='sr-only'>Hasil Pencarian</h2>
      {children}
    </section>
  );
}

function StateMessage({ title, description }) {
  return (
    <div
      role='status'
      className='flex flex-col items-center gap-1 rounded-xl border border-dashed border-border py-16 text-center'
    >
      <p className='font-semibold text-ink'>{title}</p>
      {description ? <p className='max-w-sm text-sm text-ink-muted'>{description}</p> : null}
    </div>
  );
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
        <div role='status' className='flex items-center justify-center gap-3 py-16 text-ink-muted'>
          <span
            className='h-4 w-4 animate-spin rounded-full border-2 border-border border-t-accent'
            aria-hidden='true'
          />
          Mencari tim...
        </div>
      </SportsListWrapper>
    );
  }

  if (!Array.isArray(sports)) {
    return (
      <SportsListWrapper>
        <StateMessage
          title='Terjadi kesalahan saat memuat data'
          description='Coba ulangi pencarianmu beberapa saat lagi.'
        />
      </SportsListWrapper>
    );
  }

  if (sports.length < 1) {
    return (
      <SportsListWrapper>
        <StateMessage
          title={query ? `Tidak ada tim untuk "${query}"` : 'Mulai pencarianmu'}
          description={
            query
              ? 'Coba kata kunci lain, misalnya nama kota atau liga.'
              : 'Ketik nama tim olahraga di kolom pencarian di atas.'
          }
        />
      </SportsListWrapper>
    );
  }

  return (
    <SportsListWrapper>
      <p className='mb-4 text-sm text-ink-muted'>
        Menampilkan {sports.length} hasil untuk &quot;{query}&quot;
      </p>
      <ul role='list' className='grid list-none grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {sports.map((sport) => (
          <li key={sport.idTeam}>
            <SportsListItem {...sport} />
          </li>
        ))}
      </ul>
    </SportsListWrapper>
  );
}

SportsList.propTypes = {
  query: PropTypes.string.isRequired,
};
