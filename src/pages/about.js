import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

function About() {
  return (
    <Layout heading="About" slug="about">
      <SEO title="About" />
      <article className="entry" lang="en">
        <div className="entry-content">
          <p>
            Hi, I’m Agastya. I go by the name <em>acagastya</em> across the
            internet.
          </p>
          <p>
            I remember vividly how deeply quotes would affect me during my
            teenage life. As the life priorities changed, I couldn't remember
            most of it, but it is awe-inspiring for me. And here is my pick!
          </p>
        </div>
      </article>
    </Layout>
  );
}

export default About;
