import React from "react";
import { StyledHeader, Ul } from "./elements";
import Edit from "../Menubar/Menus/Edit";
import Image from "../Menubar/Menus/Image";
import Layer from "../Menubar/Menus/Layer";
import Select from "../Menubar/Menus/Select";
import View from "../Menubar/Menus/View";
import Window from "../Menubar/Menus/Window";
import FileMenu from "../../containers/FileMenu";
import VisibleToolDetails from "../../containers/VisibleToolDetails";
import FilterMenu from "../../containers/FilterMenu";

const Header = () => {
    return (
        <>
            <StyledHeader>
                <Ul>
                    <FileMenu />
                    <Edit />
                    <Image />
                    <Layer />
                    <Select />
                    <FilterMenu />
                    <View />
                    <Window />
                </Ul>
                <VisibleToolDetails />
            </StyledHeader>
        </>
    );
};

export default Header;
