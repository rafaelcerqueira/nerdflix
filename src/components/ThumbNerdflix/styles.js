import styled from 'styled-components';
import { WrapperAvatar } from '../AvatarNerdflix/styles';

export const Title = styled.figcaption`
    position: absolute;
    left: var(--space);
    bottom: var(--space);
    font-size: 25rem;
    color: var(--color-yellow-yellow);
    font-weight: 300;
    text-shadow: 1px 1px 1px var(--color-black-dark);
    background-color: var(--color-black-medium);
    padding: 4rem 6rem;
    transform: translateY(calc((100% + var(--space)) * -1) );
    opacity: 0;
    transition: transform 125ms  150ms linear, opacity 290ms 100ms linear; 
`;

export const Thumb = styled.img `
    width: 100%;
`;

export const WrapperThumb = styled.figure `

    /* opacity: 0; */
    position: relative;
    /*    border-radius: 4px; */
    border: var(--border) solid var(--color-frontend);
    width: 640px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 100ms linear;

    & > ${WrapperAvatar} {
        position: absolute;
        top: var(--space);
        left: var(--space);
        margin-right: var(--space);
        transform: translateX(calc((100% + var(--space)) * -1));
        opacity: 0;
        transition: transform 190ms linear, opacity 100ms linear;
    }
`;

export const Background = styled.div`
    --space: 10rem;
    --border: 4rem;
    --move-space: calc(var(--space) * -1);
    
    position: relative;
    background-color: var(--color-frontend);

    &::before,
    &::after {
        content: '';
        position: absolute;
        
        width: calc(var(--space) * 1.4);
        height: calc(var(--space) * 1.4);
        background-color: var(--color-frontend);
        transition: transform 100ms linear;
        
    }

    &::before {
        right: 0;
        top: 0;
        transform-origin: right top;
        transform: rotate(45deg) scale(0);

    }

    &::after{
        left:0;
        bottom: 0;
        transform-origin: left bottom;
        transform: rotate(-45deg) scale(0);
        z-index: -1;
    }

    &:hover {
        &::before {
            transform: rotate(45deg) scale(1);
        }
        &::after {
            transform: rotate(-45deg) scale(1);
        }


        & > ${WrapperThumb} {
            transform: translate(var(--move-space), var(--move-space));

            & > ${Thumb} {
                filter: brightness(0.7);
            }

            & > ${WrapperAvatar} {
                transform: translateX(0);
                opacity: 1;
                transition: transform 125ms  125ms linear, opacity 290ms 100ms linear;
            }
            
            & > ${Title} {
                transform: translateY(0);
                opacity: 1;
                transition: transform 125ms  125ms linear, opacity 290ms 100ms linear;
            }
        }
    }
`;