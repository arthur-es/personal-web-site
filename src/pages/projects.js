import React from "react";
import SEO from "components/SEO/SEO";
import Layout from "components/Layout";
import Card from "components/Card/Card";
//import Img from "gatsby-image";
//import { graphql } from "gatsby";
/*
export const queryImage = graphql`
    query {
        project1: file(relativePath: { eq: "invicta.png" }) {
            childImageSharp {
                fixed(width: 300, height: 62) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;
*/

export default function Projects({ data }) {
    return (
        <Layout>
            <SEO
                pageTitle="Home"
                description="Software engeneering student learning web development."
                keywords="React, Arthur Catro da Cunha, NodeJS, JavaScript"
            />

            <section className="section is-size-4-desktop is-size-5-touch">
                <h1 className="title has-text-centered">Projects</h1>
                <hr />
                <p className="has-text-centered">
                    You can find my other projects on my{" "}
                    <a href="https://github.com/arthur-es">GitHub.</a>
                </p>
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <Card
                            title="Invicta Transportes"
                            link="www.invictatransportes.com.br"
                            tags={["WordPress", "Google Anlytics"]}
                        ></Card>
                    </div>
                    <div className="column is-half is-offset-one-quarter">
                        <Card
                            title="Transportadora DoValle"
                            link="www.transdovalle.com"
                            tags={["WordPress", "Google Anlytics"]}
                        ></Card>
                    </div>

                    <div className="column is-half is-offset-one-quarter">
                        <Card
                            title="Realce Uniformes"
                            link="www.realceuniformes.com.br"
                            tags={["WordPress", "Google Anlytics"]}
                        ></Card>
                    </div>

                    <div className="column is-half is-offset-one-quarter">
                        <Card
                            title="Central de Coletas"
                            link="www.centraldecoletas.com.br"
                            tags={["WordPress", "Google Anlytics"]}
                        ></Card>
                    </div>
                    <div className="column is-half is-offset-one-quarter">
                        <Card
                            title="GPR Câmbios"
                            link="www.gprcambio.com.br"
                            tags={["WordPress", "Google Anlytics"]}
                        ></Card>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
