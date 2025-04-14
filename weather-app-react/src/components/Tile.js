import React from 'react';

function Tile({ type, data, onRemove }) {
  const createMarkup = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <div className="tile">
      <button className="close-button" onClick={() => onRemove(type)} aria-label={`Remove ${data.name} tile`}>
        ×
      </button>
      {data.icon && <div className="icon">{data.icon}</div>}
      <div className={data.class} dangerouslySetInnerHTML={createMarkup(data.content)}></div>
    </div>
  );
}

export default Tile;