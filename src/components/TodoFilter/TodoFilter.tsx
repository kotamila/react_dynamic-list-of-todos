import React from 'react';

type Props = {
  status: 'all' | 'active' | 'completed';
  querty: string;
  onStatusChange: (value: 'all' | 'active' | 'completed') => void;
  onQuertyChange: (value: string) => void;
  onClearQuerty: () => void;
};

export const TodoFilter: React.FC<Props> = ({
  status,
  querty,
  onStatusChange,
  onQuertyChange,
  onClearQuerty,
}) => {
  return (
    <form
      className="field has-addons"
      onSubmit={event => event.preventDefault()}
    >
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={status}
            onChange={event =>
              onStatusChange(
                event.target.value as 'all' | 'active' | 'completed',
              )
            }
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={querty}
          onChange={event => onQuertyChange(event.target.value)}
        />
        <span className="icon is-left" style={{ pointerEvents: 'all' }}>
          <i className="fas fa-magnifying-glass" />
        </span>

        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {querty ? (
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={onClearQuerty}
            />
          ) : (
            <button
              type="button"
              className="delete"
              style={{ visibility: 'hidden' }}
              aria-hidden
            ></button>
          )}
        </span>
      </p>
    </form>
  );
};
