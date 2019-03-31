import React from 'react';
import { Wrapper } from './elements';
import EditableCanvasLayer from '../../containers/EditableCanvasLayer';

export const Image = ({ id, width, height, layers }) => {
    // if (width && height)
    if (id)
        return (
            <Wrapper width={width} height={height}>
                {layers &&
                    layers.map((layer, index) => (
                        <EditableCanvasLayer
                            id={`canvas${index}`}
                            key={layer.id}
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
