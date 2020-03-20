import React, {Suspense} from 'react'

const Blog1 = React.lazy(() => import("./Content.mdx")) 

function BlogTest() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Blog1 />
        </Suspense>
      </div>
    )
}
export default BlogTest