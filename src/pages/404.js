import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
        <SEO title="404: Not found" />

    <div style={{paddingTop:88, textAlign:'center'}}>

    <h1>NOT FOUND</h1>
    <p>Please head back to the home page</p>
    </div>

  </Layout>
)

export default NotFoundPage
