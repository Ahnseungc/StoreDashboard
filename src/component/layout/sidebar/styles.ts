import styled from "@emotion/styled";

export const SidebarNavUl = styled.ul`
  list-style: none;

  & {
    li:not(last-child) {
      margin-bottom: 1rem;
    }
    li {
      cursor: pointer;
      padding: 1rem;
      border-radius: 0.5rem;
    }
    li:hover {
      background-color: aliceblue;
    }
  }
`;
