import React from "react";
import { Title } from "@belezanaweb/components";

const ConfirmationPage = () => {
  return (
    <>
      <nav>
        <ul>
          <li>Sacola</li>
          <li>Pagamento</li>
          <li>Confirmação</li>
        </ul>
      </nav>
      <section>
        <h1>Compra realizada com sucesso</h1>
        <ul>
          <li>
            <figure>
              <img />
              <figcaption>
                <p>
                  L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium
                </p>
                <p>
                  <strong>R$ 225,90</strong>
                </p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img />
              <figcaption>
                <p>
                  L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium
                </p>
                <p>
                  <strong>R$ 225,90</strong>
                </p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img />
              <figcaption>
                <p>
                  L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium
                </p>
                <p>
                  <strong>R$ 225,90</strong>
                </p>
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>
      <section>
        <table>
          <tbody>
            <tr>
              <td>Produtos</td>
              <td>R$ 624,80</td>
            </tr>
            <tr>
              <td>Frete</td>
              <td>R$ 5,80</td>
            </tr>
            <tr>
              <td>Descontos</td>
              <td>- R$ 30,00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>R$ 600,00</td>
            </tr>
          </tfoot>
        </table>
      </section>
    </>
  );
};

export default ConfirmationPage;
