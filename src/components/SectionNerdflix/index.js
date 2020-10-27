import styled from 'styled-components';
import container from '../../tools/container';
import DescriptionNerdflix from '../DescriptionNerdflix';
import TagNerdflix from '../TagNerdflix';

const SectionNerdflix = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20rem;
    padding-bottom: 20rem;
    ${container};
    

    & > ${TagNerdflix} {
        margin-bottom:40rem;
    }

    & > ${TagNerdflix}:not(:first-child){
        align-self: flex-start;
    }

    & > ${DescriptionNerdflix} {
        max-width: 820px;
        margin: 0 auto 40rem;
    }
`;

export default SectionNerdflix;