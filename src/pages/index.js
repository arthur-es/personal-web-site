/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from "react";
import { Link } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const Home = () => (
    <Layout>
        <SEO
            pageTitle="Home"
            description="Software engeneering student learning web development."
            keywords="React, Arthur Catro da Cunha, NodeJS, JavaScript"
        />
        <h1>Arthur Castro</h1>
        <p>Software Engeneering Student at UFG - BRAZIL</p>
        <section>
            <h4>Hello, I'm Arthur Castro.</h4>
            <p>
                I'm currentyl working as a freelancer developing apps and
                websites.
            </p>
            <p>I do most of my work with JavaScript using React and Node.</p>
        </section>
        <Link to="/projects">Check a few of my Projects</Link>
    </Layout>
);

export default Home;
