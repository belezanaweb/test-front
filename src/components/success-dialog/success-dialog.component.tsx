import React, { FC } from 'react'
import { SuccessDialogStyled } from './success-dialog.style'
import { SuccessIcon } from './success.icon'

export const SuccessDialog: FC<{ children?: never }> = () => (
  <SuccessDialogStyled>
    <SuccessIcon primaryColor={'#FF7800'} className={'icon'} />
    <h1>Compra efetuada com sucesso</h1>
  </SuccessDialogStyled>
)
