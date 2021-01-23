import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

const Formulario = styled.form`
  max-width: 1200px;
  margin: 2rem auto 0 auto;
  width: 100%;
  display: flex;
  border: 1px solid #e1e1e1;
`

const Select = styled.select`
  flex: 1;
  padding: 1rem;
  appearence: none;
  border: none;
  font-family: "Lato", sans-serif;
`

const useFiltro = () => {
  const [categoria, setCategoria] = useState("")

  const result = useStaticQuery(graphql`
    {
      allStrapiCategorias {
        nodes {
          id
          descripcion
        }
      }
    }
  `)

  const categorias = result.allStrapiCategorias.nodes

  const FitroUi = () => (
    <Formulario>
      <Select onChange={e => setCategoria(e.target.value)} value={categoria}>
        <option value="">---Filtrar---</option>
        {categorias.map(opcion => (
          <option key={opcion.id} value={opcion.descripcion}>
            {opcion.descripcion}
          </option>
        ))}
      </Select>
    </Formulario>
  )

  return {
    categoria,
    FitroUi,
  }
}

export default useFiltro
