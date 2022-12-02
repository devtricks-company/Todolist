import React from "react";
import { ContainerPage } from "../../../shared/styles/layoutComponent/ContainerPage.styles";
import Box from "@mui/material/Box";
import RegisterComponent from "../components/register.compoenent/register.component";
const RegisterPage = () => {
  return (
    <ContainerPage display="flex" justifyContent="center" aligntItems="center">
      <Box
        sx={{
          width: 800,
          height: 600,
          backgroundColor: "rgba(0,0,0,0.3)",
          borderRadius: 8,
        }}
      >
        <RegisterComponent />
      </Box>
    </ContainerPage>
  );
};

export default RegisterPage;
