import { colors } from '@learn-rocket-ui/tokens';

import { getContrast } from 'polished';

export function Colors() {

  return (<div>
    {Object.entries(colors).map(([colorName, colorValue], key) => {
      const textColor = getContrast(colorValue, "#fff") < 3.5 ? "#000" : "#fff";
      return <div key={colorName} style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colorValue,
        padding: 12
      }}>
        <strong style={{ color: textColor }}>${colorName}</strong>
        <span style={{ color: textColor }}>{colorValue}</span>
      </div>
    })}
  </div>);
}