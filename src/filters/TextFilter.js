import React from 'react';

function TextFilter( props ){

    const filter = {
        'creditcard' ( value ) {
            return value ? `****.****.****.${String(value).slice(-4)}` : '';
        },
        'currency' ( value ) {
            return parseFloat(value || 0).toFixed(2).replace(/\./g, ',');
        }
    };

    return (
        <React.Fragment>
            {filter[props.type](props.children)}
        </React.Fragment>
    );
}

export default TextFilter;