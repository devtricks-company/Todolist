import styled from "styled-components";
import { ContainerPageProps } from "./types/container.page.style.type";

export const ContainerPage = styled.div<ContainerPageProps>`
  background-color: #04031a;
  width: 100%;
  min-height: 100vh;
  color: white;
  font-family: "Roboto", sans-serif;
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.aligntItems};
`;
