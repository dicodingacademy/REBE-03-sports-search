import PropTypes from 'prop-types';

export default function SportsListItem({ strTeam, strDescriptionEN, strTeamBadge }) {
  return (
    <article className='border-2 border-gray-300 p-4 rounded-md shadow-md'>
      <div className='flex justify-center mb-4'>
        <img src={strTeamBadge} alt={strTeam} />
      </div>
      <h3 className='text-2xl font-bold'>{strTeam}</h3>
      <p className='line-clamp-5'>{strDescriptionEN.substring(0, 250)}</p>
    </article>
  );
}

SportsListItem.propTypes = {
  strTeam: PropTypes.string.isRequired,
  strDescriptionEN: PropTypes.string.isRequired,
  strTeamBadge: PropTypes.string.isRequired,
};
