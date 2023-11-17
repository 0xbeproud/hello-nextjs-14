import * as React from 'react';

interface IProps {
  space: number;
}

function Gutter(props: IProps) {
  const { space } = props;

  return (
    <div
      style={{
        height: `${space}px`,
        flexShrink: 0,
      }}
    />
  );
}

export default Gutter;
