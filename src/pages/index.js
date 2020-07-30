import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>A woman spinning some gears</>,
    imageUrl: "img/iterations.svg",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
        enim orci. Praesent interdum sed neque vel auctor.
      </>
    ),
  },
  {
    title: <>A man delivering some modules</>,
    imageUrl: "img/modules.svg",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
        enim orci. Praesent interdum sed neque vel auctor.
      </>
    ),
  },
  {
    title: <>Look at that commit history, dude</>,
    imageUrl: "img/productivity.svg",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
        enim orci. Praesent interdum sed neque vel auctor.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Developing cool deno.land modules, such as denon"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/denon/home")}
            >
              Denon Documentation
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
