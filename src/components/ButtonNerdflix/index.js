import styled from 'styled-components';

const ButtonNerdflix = styled.button `
    padding: 12rem 34rem;
    background-color: var(--color-black-dark);
    color: var(--color-yellow-yellow);
    border: 2px solid var(--color-blue-sky);
    border-radius: 5px;
    font-size: 14rem;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 200ms linear,transform 200ms cubic-bezier(0,0,1,2);

    &:hover {
        background-color: var(--color-blue-sky);
        transform: scale(1.05);
    }

    &:active {
        transition: background-color 200ms linear, transform 100ms linear;
        transform: scale(0.95);
    }

`;

export default ButtonNerdflix;