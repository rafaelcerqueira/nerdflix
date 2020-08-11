import styled from 'styled-components';




export const Avatar = styled.img `
    --space: 10rem;
    position: absolute;
    top: var(--space);
    left: var(--space);
    width: 50rem;
    height: 50rem;
    border-radius: 50%;
    border: 2rem solid var(--color-yellow-yellow);
    transform: translateX(calc((100% + var(--space)) * -1));
    opacity: 0;
    transition: transform 190ms linear, opacity 100ms linear;
`;

export const Thumb = styled.img `
    width: 100%;
`;

export const WrapperThumb = styled.figure `
    position: relative;
    border-radius: 4px;
    border: 4rem solid var(--color-frontend);
    width: 640px;
    overflow: hidden;
    cursor: pointer;

    &:hover {
        & > ${Avatar} {
            transform: translateX(0);
            opacity: 1;
            transition: transform 125ms linear, opacity 290ms linear;
        }
    }
`;