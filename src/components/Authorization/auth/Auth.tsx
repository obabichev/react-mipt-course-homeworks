import {StyledButton, StyledDivButton, StyledTextField} from "../StyledComponents/StyledComponents";
import React, {ChangeEventHandler} from "react";
import styled from "@emotion/styled";
import {FormControl} from "@material-ui/core";

interface AuthData {
    inputLabels: string[],
    inputNames: string[],
    buttonLabels: string[],
    label: string,
    formsElements: string[],
    marginTop: string,
    inputOnChange: ChangeEventHandler<{value: string, name: string}>,
    buttonTriggers: React.FormEventHandler[]
}

const FormStyle = styled(FormControl)`
  background: rgba( 255, 255, 255, 0.65 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.1 );
  backdrop-filter: blur( 10px );
  -webkit-backdrop-filter: blur( 10px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  margin-left: auto !important;
  margin-right: auto !important;
  align-content: center !important;
  width: 20rem;
  height: 25rem;
  margin-top: 10% !important;
  align-items: center;
    `
const MainDiv = styled.div`
  display: grid !important;
  background: rgb(0,254,255);
  background: linear-gradient(90deg, rgba(0,254,255,1) 0%, rgba(0,181,255,1) 48%, rgba(0,254,255,1) 100%);
  width: 100vw;
  height: 100vh;
`

const StyledHeaderLabelCommon =  styled.div`
  display: grid !important;
  align-self: center;
  justify-self: center;
  left: auto !important;
  font-size: 2rem !important;
  font-weight: bold !important;
  margin-bottom: 3%;
`

export const Auth = ({inputLabels, inputNames, buttonLabels,
                         label, formsElements, marginTop,
                         inputOnChange, buttonTriggers}: AuthData) => {
    const StyledHeaderLabel = styled(StyledHeaderLabelCommon)`
      margin-top: ${marginTop};
    `
    return <>
        <MainDiv>
            <FormStyle>
                <StyledHeaderLabel>{label}</StyledHeaderLabel>
                {inputLabels.map((label, index) =>
                    <StyledTextField name={inputNames[index]}
                                     key={index}
                                     id="outlined-basic"
                                     label={label}
                                     variant="outlined"
                                     value={formsElements[index]}
                                     onChange={inputOnChange}/>
                )}
                <StyledDivButton>
                    {buttonLabels.map((label, index) =>
                        <StyledButton
                            key={index}
                            variant="contained"
                            color="primary"
                            onClick={buttonTriggers[index]}>
                            {label}
                        </StyledButton>
                    )}
                </StyledDivButton>
            </FormStyle>
        </MainDiv>
    </>
}