import { graphql, useStaticQuery } from "gatsby"

const usePropiedades = () => {
  const propiedades = useStaticQuery(graphql`
    {
      allStrapiPropiedades {
        nodes {
          id
          nombre
          descripcion
          precio
          wc
          habitaciones
          estacionamiento
          categoria {
            descripcion
          }
          agentes {
            nombre
            telefono
            email
          }
          imagen {
            sharp: childImageSharp {
              fluid(maxWidth: 600, maxHeight: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return propiedades.allStrapiPropiedades.nodes
}

export default usePropiedades
