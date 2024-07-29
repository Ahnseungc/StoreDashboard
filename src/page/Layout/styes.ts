import styled from "@emotion/styled";

export const DefaultLayout = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  overflow-x: hidden;
`;

export const DefaultLayoutHeader = styled.header`
  width: 100%;
  display: flex;
  gap: 2rem;
  position: relative;

  & > h2 {
    margin-left: 5vw;
  }

  & > button {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
