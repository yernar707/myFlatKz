import * as React from "react"

import 'bootstrap/dist/css/bootstrap.css';
import Layout from "../components/layout"
import Seo from "../components/seo"

const isBrowser = () => typeof window !== "undefined"
isBrowser()
const NotFoundPage = () => (
  React.useEffect(() => {
   
  if (typeof window !== 'undefined') {
      window.jQuery = window.$ = require('jquery');
      require('bootstrap');
  }
 },
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
))

export default NotFoundPage
