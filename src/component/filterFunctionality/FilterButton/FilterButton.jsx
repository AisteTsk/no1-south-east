import React, { useState } from 'react';
import styles from './FilterButton.module.scss';
import SideBar from '../SideBar';
import SearchBar from '../../utilities/SearchBar';

const FilterButton = () => {

    // assign filter menu open state, default closed
    const [isOpen, setIsOpen] = useState(false);

    // create function to pass down to filter menu so that it can close itself
    const closeFilterMenu = () => {
        setIsOpen(!isOpen);
    }

    // ternary for checking if the filter bar should be shown or not
    const filterMenu = isOpen ? <SideBar closeFilterMenu={closeFilterMenu} /> : null;

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)}>open</button>
            <SearchBar />   
            <div className="filterMenu">
                {filterMenu}
            </div>
        </>
    )
}

export {FilterButton as default};