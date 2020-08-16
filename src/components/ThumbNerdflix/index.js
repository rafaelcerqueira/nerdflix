import React from 'react';
import { Background, WrapperThumb, Thumb, Title } from './styles';
import AvatarNerdflix from '../AvatarNerdflix';

function ThumbNerdflix({ src, alt, avatar, channelName, title }) {
    
    return (
        <Background>
            <WrapperThumb>
                <Thumb src={src}  alt={alt} />
                <AvatarNerdflix photo={avatar} channelName={channelName} />
                <Title>{title}</Title>    
            </WrapperThumb>
        </Background>
    );

}

export default ThumbNerdflix;