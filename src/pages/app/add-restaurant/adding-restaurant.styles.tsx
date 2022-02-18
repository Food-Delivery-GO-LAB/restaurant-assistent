import styled from 'styled-components';
import { sizes } from '../../../styles/variables';

export const Wrapper = styled.div`
  width: 100%;
  padding: 36px 59px;

  h2 {
    margin-bottom: 28px;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 34px 45px;
  background-color: #fff;
  border: 1px solid #dde7e7;
  box-shadow: 0 4px 21px #dde7e7;
`;

export const FormContainer = styled.div`
  display: grid;
  column-gap: 30px;
  margin-bottom: 24px;
  @media (min-width: ${sizes.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(250px, 400px));
  }
`;

export const StyledArea = styled.div`
  width: 100%;
  margin: 12px 0;
  text-align: left;

  textarea {
    margin-top: 8px;
    min-height: 100px;
  }
`;

export const LogoContainer = styled.div`
  position: relative;
  height: 120px;
  display: flex;
  flex-direction: row;
  margin-top: 12px;

  label {
    text-align: left;
  }
`;

export const UploadArea = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100px;
  background-color: #f7f7f7;
  border: 3px dashed #dbdbdd;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

export const LogoArea = styled.div<{ src: string }>`
  width: 100px;
  height: 100px;
  margin-left: 10px;
  margin-top: 25px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;
`;
