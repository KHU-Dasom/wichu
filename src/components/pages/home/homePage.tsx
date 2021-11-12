import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const StyledHomePage = styled.div``;

interface PropType {}

export const HomePage = ({}: PropType): JSX.Element | null => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v5 example with TypeScript
        </Typography>
      </Box>
    </Container>
  );
};
