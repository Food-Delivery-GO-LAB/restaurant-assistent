import styled from 'styled-components';
import { colors } from '../../styles/variables';

const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${colors.error};
  font-weight: 500;
  padding-top: 2px;
`;

export default ErrorMessage;
