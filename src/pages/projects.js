import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

export default function Projects() {
    return (
        <Layout>
            <SEO
                pageTitle="Home"
                description="Software engeneering student learning web development."
                keywords="React, Arthur Catro da Cunha, NodeJS, JavaScript"
            />

            <h1>Projects</h1>
            <hr />
            <section>
                <p>
                    You can find my other projects on my{" "}
                    <a href="https://github.com/arthur-es">GitHub.</a>
                </p>
                <ul>
                    <li>
                        {" "}
                        <a href="#">Projeto 1</a>
                    </li>
                    <li>
                        {" "}
                        <a href="#">Projeto 2</a>
                    </li>
                    <li>
                        {" "}
                        <a href="#">Projeto 3</a>
                    </li>
                </ul>
            </section>
        </Layout>
    );
}
