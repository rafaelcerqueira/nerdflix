import React from 'react';
import ThumbNerdflix from '../ThumbNerdflix';
import ProtoTypes from 'prop-types';

function CarouselNerdflix({vidoes}) {
    return (
        <ThumbNerdflix {...vidoes[0]}/>
    );
}

CarouselNerdflix.prototype = {
    videos: ProtoTypes.array.isRequired
};

export default CarouselNerdflix;