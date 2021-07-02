export const PurchaseResume = ({
  subTotal,
  shippingTotal,
  discount,
  total,
}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>Produtos</td>
          <td>{subTotal}</td>
        </tr>
        <tr>
          <td>Frete</td>
          <td>{shippingTotal}</td>
        </tr>
        {discount && (
          <tr>
            <td>Descontos</td>
            <td>- {discount}</td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>{total}</td>
        </tr>
      </tfoot>
    </table>
  );
};
