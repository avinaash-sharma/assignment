import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 4rem;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const CardDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  .MuiCardContent-root {
    height: 650px;
    width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 18px;
  }

  h4 {
    font-size: 14px;
  }
`;

export const FormArea = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around
  flex-wrap: wrap;
  padding: 10px 0 10px 0;
  width: 100%;

  .MuiInputBase-root.MuiInput-root.MuiInput-underline {
    width: 100%;
    margin: 5px;
}
  
`;
