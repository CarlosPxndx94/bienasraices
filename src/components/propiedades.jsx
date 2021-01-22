import React, { useState, useEffect } from "react"
import { css } from "@emotion/react"
import usePropiedades from "../hooks/usePropiedades"
import PropiedadPreview from "./propiedadPreview"
import ListpropiedadesCSS from "../css/Listpropiedades.module.css"

const Propiedades = () => {
  const resultado = usePropiedades()

  const [propiedades, setPropiedades] = useState([])

  useEffect(() => {
    setPropiedades(resultado)
  }, propiedades)

  return (
    <>
      <h1
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras Propiedades
      </h1>
      <ul className={ListpropiedadesCSS.propiedades}>
        {propiedades.map(propiedad => (
          <PropiedadPreview key={propiedad.id} propiedad={propiedad} />
        ))}
      </ul>
    </>
  )
}

export default Propiedades
