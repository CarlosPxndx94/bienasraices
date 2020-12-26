import React from "react"
import { Link } from "gatsby"
import Navegacion from "./navegacion"

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">Bienes raices</Link>
        <Navegacion />
      </div>
    </header>
  )
}

export default Header
