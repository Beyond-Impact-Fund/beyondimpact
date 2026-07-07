import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404 redirect → /about for path:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>About Beyond Impact — Article 9 SFDR Impact VC</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://beyondimpact.vc/about" />
        <meta httpEquiv="refresh" content="0; url=/about" />
      </Helmet>
      <Navigate to="/about" replace />
    </>
  );
};

export default NotFound;
