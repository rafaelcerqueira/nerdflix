import styled from 'styled-components';
import container from '../../tools/container';
import TagNerdflix from '../TagNerdflix';
import TitleNerdflix from '../TitleNerdflix';
import ThumbNerdflix from '../ThumbNerdflix';

export const Text = styled.div `
    padding-top: 10rem;
    max-width: 45%;

    ${TagNerdflix} {
        margin-bottom: 40rem;
    }

    ${TitleNerdflix} {
        margin-bottom: 20px;
    }
`;

export const BannerNerdflix = styled.section `
    ${container};
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 70vh;
    height: 100vh;
`;

