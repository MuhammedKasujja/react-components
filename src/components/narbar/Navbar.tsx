import { mergeClassNames } from 'src/utils/utils'

import classes from './Narbar.module.scss'
import { useState } from 'react'
import { SidebarContext } from './context';


const Navbar: React.FC = () => {
    const [visible, setVisible] = useState(true);

    return (
        <SidebarContext.Provider value={{ visible }}>
            <nav className={mergeClassNames(classes.navbar)}>
                <div className="cursor-pointer"
                    onClick={() => {
                        setVisible(prev => !prev)
                        console.log({ visible })
                    }}>
                    <i>&#8694;</i>
                </div>
                <div className="flex gap-2">
                    <p>Profile</p>
                    <p>Settings</p>
                </div>
            </nav>
        </SidebarContext.Provider>
    )
}

export default Navbar