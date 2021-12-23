import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Oath Success" />
    <h1>Hello!  You have successfully connected your credentials.</h1>
    <p>We will now connect your data to Nool.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
