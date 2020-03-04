import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

function AllCatsTemplate({ pageContext }) {
  const { postsByCat, cats } = pageContext;
  const count = Object.values(postsByCat).map(el => el.length);
  const [max, min] = [Math.max(...count), Math.min(...count)];
  return (
    <Layout heading="Authors" slug="authors">
      <SEO title="Authors" />
      <div className="term-cloud-container">
        <ul className="term-cloud">
          {cats.map(cat => {
            const numerator = postsByCat[cat].length - min;
            const denominator = max - min;
            const num = denominator ? numerator / denominator : 1;
            const weight = 100 * Math.round((2 * numerator) / denominator + 3);
            return (
              <li key={cat}>
                <Link
                  to={`/authors/${cat}`}
                  style={{ fontSize: `${1 + num}em`, fontWeight: `${weight}` }}
                >
                  {cat}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}

export default AllCatsTemplate;
