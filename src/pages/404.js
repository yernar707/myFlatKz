import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
   useEffect(() => {
    if (typeof window === "undefined" || !window.document) {
      console.log(`bailing out of the useeffect. Going to continue to render??`)
      return
    }
  }, [])
 <Layout>
   <div class="parent">
      <Seo title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
   </div>
 </Layout>
)

export default NotFoundPage
