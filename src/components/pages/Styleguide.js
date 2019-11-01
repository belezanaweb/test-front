import React from 'react';
import UIInput from '../commons/UIInput';
import UIButton from '../commons/UIButton';
import UIBold from '../commons/UIBold';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        color: '#CCC'
    },
});

function Styleguide(){
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Typography variant="body1" gutterBottom>
                        Beleza na Web's primary typeface is <UIBold>Helvetica Neue.</UIBold>('Helvetica Neue',Helvetica,Arial,sans-serif)
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <UIButton>
                        Text Button
                    </UIButton>
                </Grid>
                <Grid item xs={12}>
                    <UIButton>
                        Text Button
                    </UIButton>
                </Grid>
                <Grid item xs={12}>
                    <UIInput label="Normal" placeholder="Placeholder" />
                </Grid>
                <Grid item xs={12}>
                    <UIInput label="Focus" placeholder="Placeholder" />
                </Grid>
                <Grid item xs={12}>
                    <UIInput 
                    label="Error" 
                    type="number"
                    placeholder="teste" 
                    value={20}
                    error
                    infoerror={'Invalid field'} />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}


export default Styleguide;