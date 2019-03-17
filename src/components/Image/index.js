import React from 'react';
import { CanvasLayer } from '../CanvasLayer';
import { Wrapper } from './elements';

export const Image = ({ width, height, layers }) => {
    if (width && height)
        return (
            <Wrapper width={width} height={height}>
                {layers &&
                    layers.map((layer, index) => (
                        <CanvasLayer
                            width={width}
                            height={height}
                            index={index}
                            contents={layer.contents}
                        />
                    ))}
            </Wrapper>
        );
    else return <></>;
};
