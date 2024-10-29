import AddButton from "../components/buttons/AddButton";
import DuckButton from "../components/buttons/DuckButton";
import {Outlet} from "react-router-dom";
import DeleteButton from "../components/buttons/DeleteButton";

function Layout() {
    return (
        <>
            <div className="upper-container">
                <nav>
                    <section className="nav-button-container">
                        <DuckButton/>
                        <AddButton/>
                        <DeleteButton/>
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