import React, { useState, useEffect } from "react"
import { css } from "@emotion/react"
import usePropiedades from "../hooks/usePropiedades"
import PropiedadPreview from "./propiedadPreview"
import ListpropiedadesCSS from "../css/Listpropiedades.module.css"
import useFiltro from "../hooks/useFiltro"

const ListPropiedades = () => {
  const resultado = usePropiedades()

  const [propiedades] = useState(resultado)
  const [filtro, setFiltro] = useState([])

  //propiedades de useFiltro
  const { categoria, FitroUi } = useFiltro()

  useEffect(() => {
    if (categoria) {
      const newFitro = propiedades.filter(
        propiedad => propiedad.categoria.descripcion === categoria
      )
      setFiltro(newFitro)
    } else {
      setFiltro(propiedades)
    }
  }, [categoria, propiedades])

  return (
    <>
      <h1
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras Propiedades
      </h1>

      {FitroUi()}

      <ul className={ListpropiedadesCSS.propiedades}>
        {filtro.map(propiedad => (
          <PropiedadPreview key={propiedad.id} propiedad={propiedad} />
        ))}
      </ul>
    </>
  )
}

export default ListPropiedades
