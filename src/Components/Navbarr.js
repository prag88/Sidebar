import classes from './NavBar.css'
const NavBarr = () => {
    return(
        <div className={classes.NavBar}>
            <nav>
                <ul>
                    <li>
                        <a href="/add">Add</a>
                    </li>
                    <li>
                        <a href="/Components">Components</a>
                    </li>
                    <li>
                        <a href="/Image">Image/Video</a>
                    </li>
                    <li>
                        <a href="/AddPages">Addpages</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default  NavBarr