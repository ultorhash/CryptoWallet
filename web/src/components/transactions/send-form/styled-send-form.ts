import { InputLabelProps } from "@mui/material";
import { borderRadius } from "@mui/system";
import styled, { CSSProperties } from "styled-components";
import { Colors } from "../../../colors/colors";

export const FormContainer = styled.div`
  width: 700px;
  height: auto;
`;

export const FormStyle: CSSProperties = {
  backgroundColor: Colors.Black
}

export const FormInputStyle: CSSProperties = {
  backgroundColor: Colors.Gray900,
  borderRadius: '5px'
}

export const FormInputProps = {
  style: {
    color: Colors.Gray400
  }
}

export const FormLabelProps: Partial<InputLabelProps> = {
  style: {
    color: Colors.Gray200
  }
}

export const FormButtonStyle: CSSProperties = {
  textTransform: 'none',
  margin: '4px 0',
  height: '50px',
  width: '200px',
  backgroundColor: Colors.Orange500
}

export const FormButtonIconStyle: CSSProperties = {
  width: '25px',
  height: '25px',
  margin: '0 5px',
  verticalAlign: 'middle'
}