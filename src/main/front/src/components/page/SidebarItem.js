import React from "react";
import styled from "styled-components";

const SidebarItem = ({tab, isActive}) => {
    return (
        <div>
            <div className={isActive ? "clicked" : ""}>
                <p>{tab.name}</p>
            </div>
        </div>
    );
};

export default SidebarItem;