import React from 'react';
import { Wrapper } from './elements';
import EditableCanvasLayer from '../../containers/EditableCanvasLayer';

export const Image = ({ width, height, layers }) => {
    if (width && height)
        return (
            <Wrapper width={width} height={height}>
                {layers &&
                    layers.map((layer, index) => (
                        <EditableCanvasLayer
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
