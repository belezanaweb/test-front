import React, { useState } from 'react';
import {
    withStyles,
    makeStyles
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MaskedInput from 'react-text-mask';
import clsx from 'clsx';


const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(2),
        }
    },
    input: {
        borderRadius: 3,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '100%',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        boxShadow: '0 3px 2px -2px rgba(0,0,0,0.1) inset !important',
        fontFamily: [
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
        '&:focus': {
            boxShadow: 'none',
            borderColor: '#a43287',
        }
    },
}))(InputBase);

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        padding: '0 8px',
        margin: '8px 0'
    },
    input:{
        width: '100%',
        '& .label':{
            color: '#ccc'
        },
        '& .Mui-error':{
            '&.label':{
                color: theme.palette.error.main
            },
            '& input':{
                borderColor: theme.palette.error.main
            }
        }
    },
    inputLabel: {
        marginLeft: theme.spacing(1),
        fontWeight: 'bold',
        color: '#ccc'
    },
    button: {
        width: '100%',
        margin: theme.spacing(1)
    }
}));


function InputMask( props ){
    const { inputRef, ...params } = props;
    delete params.error;

    return (
        <MaskedInput
            {...params}
            ref={ref => {
                inputRef(ref ? ref.inputElement : null);
            }}
            placeholderChar={'\u2000'}
            guide={false}
        />
    );
}

function UIInput( {...props} ){
    const classes = useStyles();

    const getInputProps = ( type ) => {
        let masks = {
            creditcard: {type: 'text', mask: [/\d/,/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,/\d/]},
            date: {type: 'text', mask: [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
        }
        
        return masks[type] || {type: 'text'};
    };

    const [value, setValue] = useState('');

    const onChange = {
        onChange: (e)=>{
            setValue(e.target.value);
            if(props.onChange) props.onChange(e);
        }
    }

    return (
        <FormControl className={clsx(classes.input, classes.margin)} {...props}>
            <InputLabel className={clsx('label', classes.inputLabel)} shrink htmlFor="bootstrap-input">
                { props.label && `${props.label}:` }
            </InputLabel>
            {
                'mask' in getInputProps(props.type)
                ? 
                <BootstrapInput 
                    {...props} 
                    inputComponent={InputMask} 
                    inputProps={{...props, ...getInputProps(props.type), ...onChange}}
                />
                :
                <BootstrapInput  {...props} inputProps={{...props, ...getInputProps(props.type), error: null, ...onChange}} /> 
            }
            {
               (props.error && props.infoerror && Boolean(value.length)) && <FormHelperText id="component-error-text">{props.infoerror}</FormHelperText>
            }
            {
                (props.error && props.infoempty && !value.length) && <FormHelperText id="component-error-text">{props.infoempty}</FormHelperText>
            }
        </FormControl>
    );
}

export default UIInput;