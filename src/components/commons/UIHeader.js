import React, {useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    root: {
        width: '40px',
        height: '40px',
        background: '#ccc',
        borderRadius: '50%',
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
    },
    stepper: {
        padding: '0 0 10px 0'
    },
    completed: {
        background: '#ccc'
    },
    active:{
        background: theme.pallete.primary
    },
    circle: {
        width: 39,
        height: 39,
        borderRadius: '50%',
        backgroundColor: 'red',
        lineHeight: '50px'
    },
    stepItem: {
        color: '#ccc',
        '&.active':{
            color: theme.pallete.primary
        }
    }
}));

const StepConnectorStyle = withStyles({
    line: { border: 'none' }
})(StepConnector);

function StepIcon(props) {
    const classes = useStyles();
    const { active, completed } = props;

    return (
        <div className={ clsx(classes.root, { [classes.active]: active, [classes.completed]: completed } )} >
            { completed ? <Check  /> : <MoreHorizIcon /> }
        </div>
    );
}

StepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
};

function UIheader( props ){
    const classes = useStyles();
    const [ activeStep ] = useState( props.step || 0 );
    const steps = ['SACOLA', 'PAGAMENTO', 'CONFIRMAÇÃO'];

    return (
        <React.Fragment>
            {/*
                <Grid container>
                    <Grid item xs={4}><Link to="/cart">SACOLA</Link></Grid>
                    <Grid item xs={4}><Link to="/payment">PAGAMENTO</Link></Grid>
                    <Grid item xs={4}><Link to="/confirmation">CONFIRMAÇÃO</Link></Grid>
                </Grid>
            */}
            <Stepper className={classes.stepper} activeStep={activeStep} alternativeLabel connector={<StepConnectorStyle />}>
                { steps.map((label, index)=>(
                    <Step className={clsx({active: activeStep === index})} key={label}>
                        <StepLabel  StepIconComponent={StepIcon}>
                            <Typography className={clsx(classes.stepItem, {active: activeStep === index})}>{label}</Typography>
                        </StepLabel>
                    </Step>    
                )) }
            </Stepper>
        </React.Fragment>
    );
}

export default UIheader;