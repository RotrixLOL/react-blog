import React from 'react';
import Header from './Header';
import Head from 'next/head'

const titleMt = "Aprende computación hoy - RotrixX Blog"
const descriptionMt = "Aprender cosas nuevas es dificil, o no? Con RotrixX Blog puedes conseguir articulos de cualquier cosa como por ejemplo: Crear una pagina de status en menos de 5 minutos. Asi que, que esperas? Unete ya!"

const Layout = ({ children }) => (
  <>
    <Head>
        {/* IMPORTANT */}
        {/* <meta
          http-equiv="Content-Security-Policy"
          content="script-src 'none'"
        /> */}
        {/* IMPORTANT */}

        <title>{titleMt}</title>
        <meta name="language" content="ES"/>
        <link rel="manifest" href="./manifest.json" />

        <meta
          name="title"
          content={titleMt}
        />
        <meta
          name="description"
          content={descriptionMt}
        />
        <meta
          name="og:description"
          content={descriptionMt}
        />
        <meta
          name="twitter:description"
          content={descriptionMt}
        />
        <meta
            name="keywords"
            content="aprender computacion, programacion, computacion, hacking, articulos programacion, programacion posts, curso javascript gratis, curso react gratis, academia de programacion, como crear una pagina de status en menos de 5 minutos"
        />
        <meta
            name="og:keywords"
            content="aprender computacion, programacion, computacion, hacking, articulos programacion, programacion posts, curso javascript gratis, curso react gratis, academia de programacion, como crear una pagina de status en menos de 5 minutos"
        />
        <meta
            name="twitter:keywords"
            content="aprender computacion, programacion, computacion, hacking, articulos programacion, programacion posts, curso javascript gratis, curso react gratis, academia de programacion, como crear una pagina de status en menos de 5 minutos"
        />
        <meta
            name="og:color"
            content="blue"
        />
        <meta
            name="author"
            content="@RotrixX"
        />
    </Head>
    <Header />
    {children}
  </>
);

export default Layout;
