import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
*,html,body {
  margin: 0;
  padding: 0;
  font-family: 'IBM Plex Sans', 'IBM Plex Serif', 'Roboto', sans-serif;
}
body {
  height: 100%;
  width: 100%;
  text-align: center;
}
a {
  text-decoration: none;
}
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  opacity: 0.8;

}
::-webkit-scrollbar-track {
  background-color: #e8ebee;
  border: 3px solid #e8ebee;
  box-sizing: border-box;
  border-radius: 20px;
}
::-webkit-scrollbar-thumb {
  background-color: #7c859f;
  border-radius: 20px;
}
`;
