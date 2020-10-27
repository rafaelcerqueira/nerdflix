import styled, { css } from 'styled-components';

const TagNerdflix = styled.h2`
    display: inline-block;
    font-size: 45rem;
    border-radius: 4rem;
    letter-spacing: 2px;
    background-color: var(--color-frontend);
    padding: 20rem 18rem;
    color: var(--color-yellow-yellow);
    
    ${({ small }) => 
        small && 
        css `
            font-size: 23rem;
            padding: 8rem 10rem;
        `};
`;

export default TagNerdflix;