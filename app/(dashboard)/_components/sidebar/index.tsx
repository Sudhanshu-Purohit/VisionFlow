import React from 'react'
import NewButton from './new-button';
import List from './list';

const Sidebar = () => {
    return (
        <aside className='h-full fixed z-[1] left-0 flex p-3 flex-col gap-y-4 bg-blue-950 w-[60px] text-white'>
            <List />
            <NewButton />
        </aside>
    )
}

export default Sidebar;
