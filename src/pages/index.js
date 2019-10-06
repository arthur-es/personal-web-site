/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, StaticQuery } from "gatsby";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import SEO from "components/SEO";
import Layout from "components/Layout";

const Home = () => (
    <Layout>
        <SEO
            pageTitle="Home"
            description="Software engeneering student learning web development."
            keywords="React, Arthur Catro da Cunha, NodeJS, JavaScript"
        />

        <figure className="photo image is-128x128">
            <StaticQuery
                query={graphql`
                    query {
                        file(relativePath: { eq: "photo.jpg" }) {
                            childImageSharp {
                                fixed(width: 128, height: 128) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                `}
                render={data => (
                    <Img
                        fixed={data.file.childImageSharp.fixed}
                        imgStyle={{ borderRadius: "100%" }}
                        alt="Arthur Castro"
                    />
                )}
            ></StaticQuery>
        </figure>

        <h1 className="title has-text-centered">Arthur Castro</h1>
        <p className="subtitle has-text-centered">
            software engineering student
        </p>
        <div className="has-text-centered">
            <a href="https://github.com/arthur-es">
                <span className="icon is-large fa-2x">
                    <FontAwesomeIcon icon={faGithub} />
                </span>
            </a>
        </div>
        <section className="section content is-size-4-desktop is-size-5-touch">
            <h4 className="title">Hello, I'm Arthur Castro.</h4>
            <p>
                I'm currentyl working as a freelancer developing apps and
                websites.
            </p>
            <p>I do most of my work with JavaScript using React and Node.</p>
            <Link to="/projects">Check a few of my Projects</Link>
        </section>
    </Layout>
);

export default Home;
