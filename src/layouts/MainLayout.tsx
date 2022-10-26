const metaData = {
  title: "Tic-Tac-Toe",
  description: "freeCodeCamp: Build a Tic-Tac-Toe game",
  twitter: "@BRossovsky",
}

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metaData.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metaData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={metaData.title} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={metaData.twitter} />
        <meta name="twitter:creator" content={metaData.twitter} />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default MainLayout
