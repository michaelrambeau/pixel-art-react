import React from 'react';
import { generatePixelDrawCss } from '../utils/helpers';

export class CssDisplay extends React.Component {
  generateCss() {
    const { grid, columns, rows, cellSize } = this.props;
    let cssString = generatePixelDrawCss(grid.toJS(), columns, rows, cellSize);

    if (!!cssString) {
      cssString = `box-shadow: ${cssString}; `;
      cssString += `height: ${cellSize}px; width: ${cellSize}px;`;
    }

    return <div>{cssString}</div>;
  }

  render() {
    let styleContainer = {
      position: 'absolute',
      top: '-1.6em',
      left: 0,
      opacity: '0.1',
      zIndex: '-1',
      padding: '1em',
      marginTop: '1em',
      color: '#000000'
    };
    return (
      <div className="css-display" style={styleContainer}>
      {this.generateCss()}
      </div>
    );
  }
}
