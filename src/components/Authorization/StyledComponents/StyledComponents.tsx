import styled from "@emotion/styled";
import {Button, TextField} from "@material-ui/core";
import React from 'react';

export const StyledTextField = styled(TextField)`
  margin-top: 4% !important;
  width: 17rem!important;
`
export const StyledDivButton = styled.div`
  width: 17rem!important;
  display: grid;
  grid-template-columns: repeat(2, 0.5fr);
  column-gap: 1rem;
  margin-top: 3%;
`

export const StyledButton = styled(Button)`
  margin-top: 6% !important;
  border-radius: 20px !important;
  margin-left: 10%;
  margin-right: 10%;
`