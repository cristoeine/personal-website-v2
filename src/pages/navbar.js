import * as React from "react"
import { Link } from "gatsby"

export default function NavBar() {
    return (
        <>
            <h4>Cristoeine</h4>
            <div className="links">
                <Link to="/">About</Link>
                <Link to="/">Experience</Link>
                <Link to="/">Work</Link>
                <Link to="/">Contact</Link>

            </div>
        </>
    )
}

