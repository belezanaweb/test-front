import { ReactWrapper } from 'enzyme';

/**
 * Aguarda todas as promessas serem resolvidas e atualiza o Wrapper do Enzyme
 * forçando a renderização dos componentes.
 */
export const flushPromisesAndRefreshWrapper = async (wrapper: ReactWrapper) => {
  await new Promise(setImmediate);
  wrapper.update();
};
