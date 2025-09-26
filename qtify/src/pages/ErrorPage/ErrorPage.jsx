import React from "react";
import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Oops! Something went wrong 😔</h1>
      <p style={{ color: "red" }}>
        {error?.statusText || error?.message || "Unknown error"}
      </p>
      <Link
        to="/"
        style={{
          marginTop: "1rem",
          display: "inline-block",
          padding: "0.5rem 1rem",
          background: "#007bff",
          color: "#fff",
          borderRadius: "4px",
          textDecoration: "none",
        }}
      >
        Go Home
      </Link>
    </div>
  );
}
