import styled from 'styled-components';
import ButtonNerdflix from '../ButtonNerdflix';
import LogoNerdflix from '../LogoNerdflix';
import container from '../../tools/container';

export const HeaderNerdflix = styled.header`

    background-color: var(--color-black-dark);
    border-bottom: 4px solid var(--color-blue-sky);
    padding: 20rem 0;

    @media(max-width: 800px) {
        
        padding: 15rem 16rem;

        

    }
`;

export const Wrapper = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${container};

    @media(max-width: 800px) {
        justify-content: center;

        & > ${LogoNerdflix} {
            height: 35px;
        }

        & > ${ButtonNerdflix} {
            background-color: var(--color-blue-sky);
            border-radius: 0;
            border: 0;
            border-top: 1px solid var(--color-yellow-yellow);
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100vw;
        }
    }



`