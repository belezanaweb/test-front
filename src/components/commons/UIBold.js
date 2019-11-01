import React from 'react';
import Box from '@material-ui/core/Box';

function UIBold( props ){
    return (
        <Box  component="span" display="inline" fontWeight="fontWeightBold">{props.children}</Box>
    );
}

export default UIBold;