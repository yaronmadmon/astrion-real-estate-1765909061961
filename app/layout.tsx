export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ fontFamily: "Arial", padding: 20 }}>
        <h1>🏠 Real Estate Tenant Tracker</h1>
        <nav>
          <a href="/">Home</a> | <a href="/tenants">Tenants</a>
        </nav>
        {children}
      </body>
    </html>
  );
}