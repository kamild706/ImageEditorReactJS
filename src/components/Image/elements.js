import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: orange;
    // width: 800px;
    // height: 500px;

    width: ${props => props.width + 'px'};
    height: ${props => props.height + 'px'};

    overflow: hidden;
    position: relative;
    margin: auto;
    flex: 0 0 auto;
    border: 40px solid ${props => props.theme.imagearea.backgroundColor};
`;
