import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"
import heroCSS from "../css/hero.module.css"

const ImageBackGround = styled(BackgroundImage)`
  height: 300px;
`

const Encuentra = () => {
  const { image } = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "encuentra.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `) 

  return (
    <ImageBackGround tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <div className={heroCSS.imagebg}>
        <h3 className={heroCSS.titulo}>Encuentra la casa de tus sueños</h3>
        <p>15 años de Experiencia</p>
      </div>
    </ImageBackGround>
  )
}

export default Encuentra
