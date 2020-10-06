import React, { useState } from "react";
import MenuTabs from "../../components/MenuTabs";
import ContainerTotalPrice from "../../components/ContainerTotalPrice"
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import * as fs from "fs";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    height: "100%",
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(100),
    }
  },
  submit: {
    justifyContent: 'center',
    display: 'flex',
  },
  form: {
    justifyContent: 'center',
    display: 'flex',
    padding: "3%",
  }
}
));

const useForm = initialValues => {

  const [form, setForm] = useState(initialValues);

  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };
  return { form, onChange };
};

const Payment = () => {
  const history = useHistory();
  const classes = useStyles();
  const { form, onChange } = useForm({ creditCardNumber: "", cardholderName: "", validity: "", cvv: "" });

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(form)
    generateFile();
    goToSuccess();
  }

  const generateFile = () => {
    let jsonData = JSON.stringify(form)
    console.log(jsonData);
    fs.writeFile('./file.json', jsonData, 'utf8', (err) => {
      if (err) {
        console.error(err)
      }
    });
  }


  const goToSuccess = () => {
    history.push("/success")
  }

  return (
    <div>
      <MenuTabs />
      <div className={classes.root}>
        <Typography
          color="secondary"
          variant="h4"
          display="inline"
        >
          CARTÃO DE CRÉDITO
        </Typography>
        <Paper elevation={3}>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <FormHelperText component="h4" id="outlined-cvv-text">Número do cartão:</FormHelperText>
                  <OutlinedInput
                    placeholder="_ _ _ _ . _ _ _ _ . _ _ _ _ . _ _ _ _"
                    name="creditCardNumber"
                    required
                    id="creditCardNumber"
                    value={form.creditCardNumber}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <FormHelperText id="outlined-cvv-text">Nome do Titular:</FormHelperText>
                  <OutlinedInput
                    placeholder="Como no cartão"
                    name="cardholderName"
                    required
                    multiline
                    id="cardholderName"
                    value={form.cardholderName}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <FormHelperText id="outlined-cvv-text">Validade (mês/ano):</FormHelperText>
                  <OutlinedInput
                    placeholder="_ _ /_ _ _ _"
                    name="validity"
                    required
                    id="validity"
                    value={form.validity}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <FormHelperText id="outlined-cvv-text">CVV:</FormHelperText>
                  <OutlinedInput
                    placeholder="_ _ _"
                    name="cvv"
                    required
                    id="cvv"
                    value={form.cvv}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>

              </Grid>
            </Grid>
          </form>
        </Paper>
        <ContainerTotalPrice />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          size="large"
          style={{ background: "#FF7800" }}
          className={classes.submit}
          onClick={handleSubmit}
        >
          FINALIZAR O PEDIDO
        </Button>
      </div>
    </div>
  )
}

export default Payment;