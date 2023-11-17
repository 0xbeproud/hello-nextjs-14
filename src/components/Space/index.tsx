import React from 'react';

type Props = {
  size: number;
};

function Space(props: Props) {
  const { size } = props;
  const style = React.useMemo<React.CSSProperties>(
    () => ({
      height: `${size}px`,
      flexShrink: 0,
    }),
    [size],
  );

  return <div style={style} />;
}

export default Space;
