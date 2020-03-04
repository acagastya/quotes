import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function NotFoundPage() {
  return (
    <Layout heading="404: Not found.  Ok">
      <SEO title="404: Not found" />
      <article class="entry" lang="en">
        <div className="entry-content">
          <blockquote>
            <em>
              <p>
                [The roads] moved with the land, you know? It rose, it fell, it
                curved.
                <br />
                Cars didn't drive on it to make great time.
                <br />
                They drove on it to have a great time.
              </p>
            </em>
          </blockquote>
          &mdash; Sally Carrera, <em>Cars (2006)</em>
        </div>
      </article>
    </Layout>
  );
}

export default NotFoundPage;
