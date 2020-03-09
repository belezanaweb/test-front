import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h2`
  color: #999;

  font-size: 0.875rem;
  font-weight: 700;

  text-transform: uppercase;
`;

Title.propTypes = {
  children: PropTypes.node.isRequired
};

export default Title;
