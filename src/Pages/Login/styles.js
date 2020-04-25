import styled from "styled-components";

// #DCCCA3 #3A3042 #DE1A1A #1E1E24 #92140C
export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Bangers&display=swap");
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1px #fff;
    border-radius: 4%;
    background: #dccca3;
    padding: 40px;

    strong {
      font-size: 44px;
      font-family: "Bangers", cursive;
      color: #de1a1a;
      margin-bottom: 20px;
    }

    button {
      display: flex;
      background: #1e1e24;
      border: none;
      padding: 20px;
      align-items: center;
      justify-items: center;
      color: #fff;

      span {
        margin-right: 8px;
      }
    }
  }

  > strong {
    color: #fff;
    margin-top: 30px;
  }
`;
