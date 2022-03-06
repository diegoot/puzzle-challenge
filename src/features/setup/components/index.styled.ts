import styled from 'styled-components';

export const Title = styled.h1`
  margin: 0;
`;

export const SubTitle = styled.h3`
  margin: 0;
`;

interface ExplanationProps {
  marginBottom?: number;
}

export const Explanation = styled.p<ExplanationProps>`
  margin: 0;
  margin-bottom: ${props => (props.marginBottom ? props.theme.spacing * props.marginBottom : 0)}px;
`;

interface ButtonProps {
  marginTop?: number;
}

export const Button = styled.button<ButtonProps>`
  margin: 0;
  margin-top: ${props => (props.marginTop ? props.theme.spacing * props.marginTop : 0)}px;
`;
