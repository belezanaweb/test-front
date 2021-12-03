import styled from 'styled-components'

export const DivHelper = styled.div`
  ${(props) => props.m && 'margin: ' + props.m + 'px'};
  ${(props) => props.mt && 'margin-top: ' + props.mt + 'px'};
  ${(props) => props.mb && 'margin-bottom: ' + props.mb + 'px'};
  ${(props) => props.ml && 'margin-left: ' + props.ml + 'px'};
  ${(props) => props.mr && 'margin-right: ' + props.mr + 'px'};
  ${(props) => props.p && 'padding: ' + props.p + 'px'};
  ${(props) => props.pt && 'padding-top: ' + props.pt + 'px'};
  ${(props) => props.pb && 'padding-bottom: ' + props.pb + 'px'};
  ${(props) => props.pl && 'padding-left: ' + props.pl + 'px'};
  ${(props) => props.pr && 'padding-right: ' + props.pr + 'px'};
  ${(props) => props.w && 'width: ' + props.w + '%'};
`
