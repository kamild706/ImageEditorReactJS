import styled from 'styled-components';

export const Layer = styled.canvas`
    position: absolute;
    top: 0;
    left: 0;
    z-index: ${props => props.index};
`;
