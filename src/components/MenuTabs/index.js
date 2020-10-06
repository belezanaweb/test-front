import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    style: {
        fontFamily: "Helvetica",
        fontSize: 13,
        fontWeight: "bold",
        color: "#CCC",
    },
});

const MenuTabs = () => {

    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab className={classes.style} value="cart" label="SACOLA" />
                    <Tab className={classes.style} value="payment" label="PAGAMENTO" />
                    <Tab className={classes.style} value="success" label="CONFIRMAÇÃO" />
                </Tabs>
            </Paper>
        </div>
    )
}

export default MenuTabs;