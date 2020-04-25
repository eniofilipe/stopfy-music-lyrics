import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";

// #DCCCA3 #3A3042 #DE1A1A #1E1E24 #92140C
export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Playing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #DCCCA3;
  margin: 10% 0 10% 10%;
  border-radius: 50% 0 0 50%;

  > img {
    width: 320px;
  }

  > strong {
    color: #1E1E24;
    margin-top: 20px;
    font-size: 20px;
  }

  > span {
    margin-top: 10px
    font-size: 15px;
    color: #3A3042;
  }
`;

export const Lyrics = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #dccca3;
  margin: 10% 10% 10% 0;
  border-radius: 0 50% 50% 0;

  pre {
    width: 100%;
    padding: 0;
    margin: 0;
    overflow: auto;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  height: 60vh;
  padding: 0;
  margin: 0;
`;
