import AddButton from "../buttons/AddButton.tsx";
import DuckButton from "../buttons/DuckButton.tsx";
import {Outlet} from "react-router-dom";
import {addPage, addWorkspace} from "../api/Api";

function Layout() {
    return (
        <>
            <div className="upper-container">
                <nav>
                    <section>
                        <div className="nav-button-container">
                            <DuckButton/>
                            <AddButton/>
                        </div>
                    </section>
                </nav>

                <Outlet/>
            </div>

            <footer>
                <a href="https://www.flaticon.com/free-icons/duck" title="duck icons">
                    Duck icons created by Freepik - Flaticon
                </a>
            </footer>
        </>
    )
}

const addNewElement = () => {
    if (window.location.href.match('.*workspace.*')) {

    } else {

    }
}

export default Layout;