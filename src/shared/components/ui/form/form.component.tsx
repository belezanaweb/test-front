import * as React from 'react';

import { IFormProps } from './form.interface';

export const Form: React.FC<IFormProps> = ({ children, onSubmit }) => <form onSubmit={onSubmit} role="form">{children}</form>;
