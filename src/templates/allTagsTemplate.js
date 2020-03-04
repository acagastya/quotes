import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

function AllTagsTemplate({ pageContext }) {
  const { postsByTag, tags } = pageContext;
  const count = Object.values(postsByTag).map(el => el.length);
  const [max, min] = [Math.max(...count), Math.min(...count)];
  return (
    <Layout heading="Tags" slug="tags">
      <SEO title="Tags" />
      <div className="term-cloud-container">
        <ul className="term-cloud">
          {tags.map(tag => {
            const numerator = postsByTag[tag].length - min;
            const denominator = max - min;
            const num = denominator ? numerator / denominator : 1;
            const weight = 100 * Math.round((2 * numerator) / denominator + 3);
            return (
              <li key={tag}>
                <Link
                  to={`/tags/${tag}`}
                  style={{ fontSize: `${1 + num}em`, fontWeight: `${weight}` }}
                >
                  {tag}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}

export default AllTagsTemplate;
