import styled from 'styled-components';

export const Channel = styled.figcaption`
    font-size: 20rem;
    color: var(--color-yellow-yellow);
    text-shadow: 2px 2px var(--color-black-dark);
    font-weight: bold;
`;

export const Avatar = styled.img `
    width: 50rem;
    height: 50rem;
    border-radius: 50%;
    border: 2rem solid var(--color-yellow-yellow);
    margin-right: 6rem;
`;

export const WrapperAvatar = styled.figure `
    display: flex;
    align-items: center;

`;