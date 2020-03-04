import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

function AllAuthorsTemplate({ pageContext }) {
  const { authors, postsByAuthor } = pageContext;
  const count = Object.values(postsByAuthor).map(el => el.length);
  const [max, min] = [Math.max(...count), Math.min(...count)];
  return (
    <Layout heading="Authors" slug="authors">
      <SEO title="Authors" />
      <div className="term-cloud-container">
        <ul className="term-cloud">
          {authors.map(author => {
            const numerator = postsByAuthor[author].length - min;
            const denominator = max - min;
            const num = denominator ? numerator / denominator : 1;
            const weight = 100 * Math.round((2 * numerator) / denominator + 3);
            return (
              <li key={author}>
                <Link
                  to={`/authors/${author}`}
                  style={{ fontSize: `${1 + num}em`, fontWeight: `${weight}` }}
                >
                  {author}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}

export default AllAuthorsTemplate;
