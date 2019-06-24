import PropTypes from 'prop-types'
import styled from '@emotion/styled/macro'

const Navigation = styled.div`
  background: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  margin-bottom: 10px;
  width: 100%;
`

Navigation.propTypes = {
  children: PropTypes.node
}

Navigation.List = styled.ol`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 768px;
  padding: 12px 20px;
`

Navigation.List.propTypes = {
  children: PropTypes.node
}

Navigation.Item = styled.li`
  color: ${({
    active,
    theme: {
      colors: { primary }
    }
  }) => (active ? primary : '#ccc')};
  display: inline-block;
  flex: 0;
  font-size: 13px;
  font-weight: bold;
  line-height: 16px;
  list-style-type: none;
  text-transform: uppercase;
`

Navigation.Item.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node
}

export default Navigation
