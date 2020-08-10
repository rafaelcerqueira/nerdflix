import styled from 'styled-components';
import ButtonNerdflix from '../ButtonNerdflix';
import LogoNerdflix from '../LogoNerdflix';

const HeaderNerdflix = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
    background-color: var(--color-black-dark);
    border-bottom: 4px solid var(--color-blue-sky);

    @media(max-width: 800px) {
        justify-content: center;
        padding: 15px 16px;

        & > ${LogoNerdflix} {

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
`;

export default HeaderNerdflix;
