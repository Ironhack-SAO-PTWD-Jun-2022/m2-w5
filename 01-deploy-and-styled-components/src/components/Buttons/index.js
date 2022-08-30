import styled from 'styled-components';

export const CustomButton = styled.button`
  padding: 5px;
  background-color: ${({bgColor}) => bgColor ? bgColor : 'transparent'};
`;

export const PillButton = styled(CustomButton)`
  border-radius: 100px;
  padding: 15px;
`;