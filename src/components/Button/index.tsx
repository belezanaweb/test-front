import { ButtonStyle } from './styles';
import PropTypes from 'prop-types';

interface ButtonProps {
  title: string;
  width?: string;
}

export default function Button({ title, width }: ButtonProps) {
  return <ButtonStyle width={width}>{title}</ButtonStyle>;
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string
};

Button.defaultProps = {
  width: '100%'
};
