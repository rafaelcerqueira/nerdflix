import React from 'react';
import { Background, WrapperThumb, Thumb, Avatar } from './styles';

function ThumbNerdflix({ src, alt, avatar, channelName }) {
    
    return (
        <Background>
            <WrapperThumb>
                <Thumb src={src}  alt={alt} />
                <Avatar src={avatar} alt={channelName} />
            </WrapperThumb>
        </Background>
    );

}

export default ThumbNerdflix;