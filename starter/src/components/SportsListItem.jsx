import PropTypes from 'prop-types';

export default function SportsListItem({ strTeam, strDescriptionEN, strTeamBadge }) {
  return (
    <article className='group rounded-xl border border-border bg-surface-card p-5 transition-colors hover:border-accent'>
      <div className='mb-4 flex h-28 items-center justify-center rounded-lg bg-surface'>
        <img src={strTeamBadge} alt={strTeam} className='h-20 w-20 object-contain' />
      </div>
      <h3 className='text-lg font-bold text-ink'>{strTeam}</h3>
      <p className='mt-1 text-sm text-ink-muted line-clamp-5'>
        {strDescriptionEN.substring(0, 250)}
      </p>
    </article>
  );
}

SportsListItem.propTypes = {
  strTeam: PropTypes.string.isRequired,
  strDescriptionEN: PropTypes.string.isRequired,
  strTeamBadge: PropTypes.string.isRequired,
};
