import * as React from "react"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import Layout from "../components/layout"
import Seo from "../components/seo"

const isBrowser = () => typeof window !== "undefined"
isBrowser()
const NotFoundPage = () => (
  
  <div>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
))

export default NotFoundPage
