import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import theme from '../../theme';
import clsx from 'clsx';
import Filter from '../../filters/TextFilter';

const useStyles = makeStyles(theme=>({
    root: {
        padding: theme.spacing(1),
        border: '1px solid #D0D0D0',
        borderRadius: 4,
        color: '#000',
        width: 'auto'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    discount: {
        color: theme.pallete.primary
    },
    totalPrice: {
        marginTop: theme.spacing(1),
        fontWeight: 'bold'
    }
}));

function UIPurchaseSummary( props ){
    const classes = useStyles();
    const [summary, setSummary] = useState( props.summary || {
        discount: '',
        shippingTotal: '',
        subTotal: '',
        total: ''
    });

    useEffect(()=>{
        if(props.summary) setSummary(props.summary);
    }, [props.summary]);

    return (
        <React.Fragment>
            <Grid container className={classes.root}  style={{margin: theme.spacing(1)}} >
                <Grid item xs={12}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography color="inherit">PRODUTOS</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography color="inherit" align="right">R$ <Filter type="currency">{summary.subTotal}</Filter></Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography color="inherit">FRETE</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography color="inherit" align="right">R$ <Filter type="currency">{summary.shippingTotal}</Filter></Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        {
                            summary.discount && <Grid item xs={12}>
                                <Grid container className={clsx(classes.discount)}>
                                    <Grid item xs={6}>
                                        <Typography color="inherit">DESCONTO</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography className={clsx(classes.discount)} align="right">R$ -<Filter type="currency">{summary.discount}</Filter></Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        }

                        <Grid item xs={12}>
                            <Grid container className={clsx(classes.totalPrice)}>
                                <Grid item xs={6}>
                                    <Typography color="inherit">TOTAL</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography color="inherit" align="right">R$ <Filter type="currency">{summary.total}</Filter></Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default UIPurchaseSummary;