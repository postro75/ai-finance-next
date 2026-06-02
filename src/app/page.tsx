export default function Home() {
  return (
    <main style={{ padding: 64, fontFamily: "sans-serif" }}>
      <h1>AI &amp; Finance — test</h1>
      <p>Jeśli to widzisz, deployment działa.</p>
      <p>Czas: {new Date().toISOString()}</p>
    </main>
  );
}
