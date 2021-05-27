export function customTooltip({ tooltip, chart }) {
  const TOOLTIP_ID = 'chartjs-tooltip';

  if (!tooltip) {
    return;
  }

  let tooltipElement = document.getElementById(TOOLTIP_ID);

  if (!tooltipElement) {
    tooltipElement = document.createElement('div');
    tooltipElement.id = TOOLTIP_ID;
    tooltipElement.innerHTML = '<div class="c-tooltip"></div>';
    document.body.appendChild(tooltipElement);
  }

  if (tooltip.opacity === 0) {
    tooltipElement.style.opacity = 0;
    return;
  }

  tooltipElement.classList.remove('above', 'below', 'no-transform');
  if (tooltip.yAlign) {
    tooltipElement.classList.add(tooltip.yAlign);
  } else {
    tooltipElement.classList.add("no-transform");
  }

  const getBody = (bodyItem) => bodyItem.lines;

  if (tooltip.body) {
    const titleLines = tooltip.title || [];
    const bodyLines = tooltip.body.map(getBody);

    const tooltipWrapperElement = tooltipElement.querySelector('.c-tooltip');
    tooltipWrapperElement.style.backgroundColor = '#FFFFFF';
    tooltipWrapperElement.style.padding = '13px 17px';
    tooltipWrapperElement.style.borderRadius = '4px';
    tooltipWrapperElement.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 4px 8px';

    if (tooltipWrapperElement) {
      tooltipWrapperElement.innerHTML = '';
    }

    titleLines.forEach(function(title) {
      tooltipWrapperElement.insertAdjacentHTML('afterbegin', `
        <div class="c-tooltip__title" style="font-size: 10px; color: #757575">
          ${title}
        </div>`);
    });

    bodyLines.forEach(function(body, i) {
        const colors = tooltip.labelColors[i];

        tooltipWrapperElement.insertAdjacentHTML('beforeend', `
          <div class="c-tooltip__label" style="color: ${colors.backgroundColor}; font-weight: bold; font-size: 12px;">
            ${body[0].label}
          </div>
          <div class="c-tooltip__value" style="color: #000000; font-weight: bold; font-size: 22px;">
            ${body[0].value}
          </div>`);
    });
  }

  const position = chart.canvas.getBoundingClientRect();
  const positionX = position.left + tooltip.caretX;
  const positionY = position.top + tooltip.caretY;
  
  tooltipElement.style.opacity = 1;
  tooltipElement.style.position = 'absolute';
  tooltipElement.style.left = positionX + window.pageXOffset + "px";
  tooltipElement.style.top = positionY + window.pageYOffset + 10 + "px";
  tooltipElement.style.padding = tooltip.padding + 'px ' + tooltip.padding + 'px';
  tooltipElement.style.pointerEvents = 'none';
}