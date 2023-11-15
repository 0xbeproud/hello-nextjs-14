
import React from 'react';

type Props = {
    space: number;
};

function Space(props: Props) {
    const { space } = props;
    const style = React.useMemo<React.CSSProperties>(
        () => ({
            height: `${space}px`,
            flexShrink: 0,
        }),
        [space],
    );

    return <div style={style} />;
}

export default Space;