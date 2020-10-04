import React from "react";
import MenuTabs from "../../components/MenuTabs"
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";



const Payment = () => {
    const history = useHistory();

    const goToSuccess = () => {
        history.push("/success")
    }

    return (
        <div>
            <MenuTabs />
            <Typography
                  color="secondary"
                  variant="h4"
                  display= "inline"
              >
                  CARTÃO DE CRÉDITO
              </Typography>

              <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      size="large"
                      style={{ background:"#FF7800" }}
                    //   className={classes.submit}
                      onClick={goToSuccess}
                    >
                      FINALIZAR O PEDIDO
                    </Button>
        </div>
    )
}

export default Payment;