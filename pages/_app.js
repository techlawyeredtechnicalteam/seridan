import Head from 'next/head'
import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
            <title>Seridan Partners | Trusted Legal Advisors</title>
            <meta name="description" content="Seridan Partners offers top-tier legal services across multiple practice areas including Corporate Law, Real Estate, and Litigation. Tailored legal solutions for your business and personal needs." />
            
            {/* Open Graph Meta Tags for Social Media */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Seridan Partners | Trusted Legal Advisors" />
            <meta property="og:description" content="Seridan Partners offers expert legal services across Corporate Law, Real Estate, Litigation, and more. Get tailored legal solutions today." />
            <meta property="og:image" content="/public/hero.jpeg" />
            <meta property="og:url" content="https://www.seridanpartners.com" />
            <meta property="og:site_name" content="Seridan Partners" />
            
            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Seridan Partners | Trusted Legal Advisors" />
            <meta name="twitter:description" content="Seridan Partners offers expert legal services in various fields, providing clients with solutions tailored to their needs." />
            <meta name="twitter:image" content="/public/hero.jpeg" />
            <meta name="twitter:site" content="@SeridanPartners" />
            
            {/* Favicon */}
            <link rel="icon" href="/public/logo.png" />
            
            {/* Robots Meta Tag */}
            <meta name="robots" content="index, follow" />
            
            {/* Google Font */}
            <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet" />
          </Head>
        <Component {...pageProps} />

    
    </>
  )
}

export default MyApp
