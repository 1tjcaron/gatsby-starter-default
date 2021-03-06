import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Sign up here</h1>
    <p>Sign up today. 
  <a href="mailto:noolhealth@gmail.com?subject=Join%20Waitlist"> Email Us </a>
  to join the waitlist.</p>
  </Layout>
)

export default IndexPage
