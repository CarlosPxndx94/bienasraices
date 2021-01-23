const urlSlug = require("url-slug")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    {
      allStrapiPaginas {
        nodes {
          id
          nombre
        }
      }
      allStrapiPropiedades {
        nodes {
          id
          nombre
        }
      }
    }
  `)

  //SI no hay resultados
  if (resultado.errors) {
    reporter.panic("No hubo resultados", resultado.errors)
  }

  //Si hay resultados generar contenidos staticos
  const paginas = resultado.data.allStrapiPaginas.nodes
  const propiedades = resultado.data.allStrapiPropiedades.nodes

  //Se crearn template para paginas
  paginas.forEach(pagina => {
    actions.createPage({
      path: urlSlug(pagina.nombre),
      component: require.resolve("./src/components/paginas.jsx"),
      context: {
        id: pagina.id,
      },
    })
  })

  //Se crean templates para propiedades
  propiedades.forEach(propiedad => {
    actions.createPage({
      path: urlSlug(propiedad.nombre),
      component: require.resolve("./src/components/propiedades.jsx"),
      context: {
        id: propiedad.id,
      },
    })
  })
}
