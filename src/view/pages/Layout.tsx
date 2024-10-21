import AddButton from "../buttons/AddButton";
import DuckButton from "../buttons/DuckButton";
import {Outlet} from "react-router-dom";

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

export default Layout;