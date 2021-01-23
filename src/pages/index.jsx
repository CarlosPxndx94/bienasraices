import React from "react"
import Layout from "../components/layout"
import useInicio from "../hooks/useInicio"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import heroCSS from "../css/hero.module.css"
import Encuentra from "../components/encuentra"
import ListPropiedades from "../components/ListPropiedades"

const ImageBackGround = styled(BackgroundImage)`
  height: 600px;
`

const Index = () => {
  const { nombre, contenido, imagen } = useInicio()
  const fluid = imagen.sharp.fluid

  return (
    <Layout>
      <ImageBackGround tag="secion" fluid={fluid} fadeIn="soft">
        <div className={heroCSS.imagebg}>
          <h1 className={heroCSS.titulo}>
            Venta de casas y departamentos exclusivos!!
          </h1>
        </div>
      </ImageBackGround>
      <main>
        <div
          css={css`
            max-width: 800px;
            margin: 0 auto;
          `}
        >
          <h1>{nombre}</h1>
          <p
            css={css`
              text-align: center;
            `}
          >
            {contenido}
          </p>
        </div>
      </main>
      <Encuentra />
      <ListPropiedades />
    </Layout>
  )
}

export default Index
