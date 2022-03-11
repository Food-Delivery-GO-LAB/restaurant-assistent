import styled from 'styled-components';
import { colors } from '../../styles/variables';

const TextArea = styled.textarea`
  margin: 8px 0;
  width: 100%;
  background-color: ${(props) => props.theme.bg.grey};
  outline: none;
  border: 1px solid #dbdbdd;
  border-radius: 2px;
  font-size: 16px;
  line-height: 19px;
  padding: 0.75em 16px;
  color: ${(props) => props.theme.text.black};
  transition: border-color ease 0.25s, box-shadow ease 0.15s;
  &:focus,
  &:hover {
    border-color: ${colors.primary};
  }
  &:placeholder-shown ~ span {
    display: none;
  }
`;

export default TextArea;
