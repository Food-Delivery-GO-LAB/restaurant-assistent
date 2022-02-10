import { TextField } from '@mui/material';
import styled from 'styled-components';
import Label from '../../../components/typography/label';
import { colors } from '../../../styles/variables';

export const Wrapper = styled.div`
  width: 100%;
  padding: 36px 59px;
  background-color: #e5e5e5;
  h2 {
    margin-bottom: 48px;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 12px 34px;
  background-color: #fff;
  border: 1px solid #dde7e7;
  box-shadow: 0px 4px 21px #dde7e7;
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 290px 290px;
  column-gap: 24px;
`;

export const StyledArea = styled.div`
  min-width: 300px;
  width: 30%;
  margin: 12px 0;
  text-align: left;
  textarea {
    margin-top: 8px;
  }
`;

export const LogoContainer = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  svg {
    color: blue;
  }
  label {
    text-align: left;
  }
  div {
    cursor: pointer;
    width: 100px;
    height: 100px;
    background: #f7f7f7;
    border: 1px solid #dbdbdd;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
  }
`;
