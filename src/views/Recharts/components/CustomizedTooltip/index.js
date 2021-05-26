import './index.css';

function getTitleByDataKey(dataKey) {
  const title = {
    visits: 'Visitas',
    contacts: 'Contactos'
  };

  return title[dataKey];
}

function getColorByDataKey(dataKey) {
  const color = {
    visits: 'blue',
    contacts: 'orange'
  }

  return color[dataKey];
}

export function CustomizedTooltip({ active, payload, label, index }) {
  if (!active) {
    return null;
  }

  if (payload[0].payload.visits === payload[0].payload.contacts) {
    return (
      <div className="c-customized-tooltip">
        <div style={{fontSize: '10px'}}>{label}</div>
        <div className="c-customized-tooltip__title c-customized-tooltip__title--blue">
          {getTitleByDataKey(payload[0].dataKey)}
        </div>
        <div className="c-customized-tooltip__value">{payload[0].payload.visits}</div>
        <div className="c-customized-tooltip__title c-customized-tooltip__title--orange">
          {getTitleByDataKey(payload[1].dataKey)}
        </div>
        <div className="c-customized-tooltip__value">{payload[0].payload.contacts}</div>
      </div>
    );
  }

  return(
    <div className="c-customized-tooltip">
      <div style={{fontSize: '10px'}}>{label}</div>
      <div className={`c-customized-tooltip__title c-customized-tooltip__title--${getColorByDataKey(payload[index].dataKey)}`}>
        {getTitleByDataKey(payload[index].dataKey)}
      </div>
      <div className="c-customized-tooltip__value">{payload[index].value}</div>
    </div>
  );
}