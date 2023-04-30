import { mergeClassNames } from 'src/utils/utils'

import classes from './Narbar.module.scss'

const Navbar: React.FC = () => {
    return (
        <nav className={mergeClassNames(classes.navbar)}>
            <ul className="flex">
                <li>-</li>
                <li>-</li>
                <li>-</li>
            </ul>
            <div className="flex gap-2">
                <p>Profile</p>
                <p>Settings</p>
            </div>
        </nav>
    )
}

export default Navbar