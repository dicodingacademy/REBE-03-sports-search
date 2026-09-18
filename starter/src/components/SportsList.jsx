import PropTypes from 'prop-types';
import SportsListItem from './SportsListItem';
import { useEffect, useState } from 'react';
import { getSportsList } from '../utils/data';

function SportsListWrapper({ children }) {
  return (
    <section aria-live='polite'>
      <h2 className='sr-only'>Hasil Pencarian</h2>
      {children}
    </section>
  );
}

/**
 * TODO:
 * Komponen ini masih menampilkan data statis dari getSportsList().
 * Ubah agar data tim didapat dari Sports API secara asynchronous lewat getSports(query)
 * di utils/api.js, setiap kali `query` berubah.
 *
 * Requirement tampilan:
 *  - Tampilkan status "memuat" selama data sedang diambil.
 *  - Tampilkan status gagal jika pengambilan data error.
 *  - Tampilkan status hasil kosong jika tidak ada tim yang cocok.
 *  - Tampilkan daftar tim jika data berhasil didapat.
 */
export default function SportsList({ query }) {
  const [sports, setSports] = useState(null);

  useEffect(() => {
    setSports(getSportsList());
  }, [query]);

  if (!Array.isArray(sports)) {
    return (
      <SportsListWrapper>
        <div className='flex items-center justify-center gap-3 py-16 text-ink-muted'>
          <span
            className='h-4 w-4 animate-spin rounded-full border-2 border-border border-t-accent'
            aria-hidden='true'
          />
          Waiting for searching...
        </div>
      </SportsListWrapper>
    );
  }

  return (
    <SportsListWrapper>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {sports.map((sport) => {
          return <SportsListItem key={sport.idTeam} {...sport} />;
        })}
      </div>
    </SportsListWrapper>
  );
}

SportsList.propTypes = {
  query: PropTypes.string.isRequired,
};
