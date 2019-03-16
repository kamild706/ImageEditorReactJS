import React from 'react';
import { StyledHeader, Ul } from './elements';
import File from '../Menubar/Menus/File';
import ToolDetails from '../ToolDetails';
import Edit from '../Menubar/Menus/Edit';
import Image from '../Menubar/Menus/Image';
import Layer from '../Menubar/Menus/Layer';
import Select from '../Menubar/Menus/Select';
import Filter from '../Menubar/Menus/Filter';
import View from '../Menubar/Menus/View';
import Window from '../Menubar/Menus/Window';

const Header = () => {
    return (
        <>
            <StyledHeader>
                <Ul>
                    <File />
                    <Edit />
                    <Image />
                    <Layer />
                    <Select />
                    <Filter />
                    <View />
                    <Window />
                </Ul>
                <ToolDetails />
            </StyledHeader>
        </>
    );
};

export default Header;
