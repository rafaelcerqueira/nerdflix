import styled from 'styled-components';
import LogoNerdflix from '../LogoNerdflix';

const FooterNerdflix = styled.footer `
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16rem;
    background-color: var(--color-black-dark);
    color: var(--color-yellow-yellow);
    padding: 12rem 0;
    border-top: 4px solid var(--color-blue-sky);

    & > ${LogoNerdflix} {
        margin-bottom: 10rem;
    }

`;

export default FooterNerdflix;