import styled from 'styled-components'

interface SectionProps {
  width: string;
  height: string;
  backgroundColor: string;
}

interface FlexProps{
  width: string;
}

// Create a single styled component that accepts dynamic styles via props
export const Section = styled.div<SectionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  margin: 10px 0;
  color: #fff;
`;

export const FlexRow = styled.div<FlexProps>`
  display: flex;
  width: ${(props) => props.width};
  justify-content: space-between;
  gap: 10px;
`;

export const FlexColumn = styled.div<FlexProps>`
  display: flex;
  width: ${(props) => props.width};
  justify-content: space-between;
  flex-direction: column;
`;