import React from 'react';

export default function Cart () {
  return (
      <table>
      <thead>
        <tr>
          <th>Produtos</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>L'Oréal</td>
        </tr>
        <tr>
          <td>Good Girl</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>produtos</td>
          <td>624,80</td>
        </tr>
        <tr>
          <td>frete</td>
          <td>5,90</td>
        </tr>
      </tfoot>
    </table>
  )
}
