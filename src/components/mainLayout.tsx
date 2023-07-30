export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <p>rama | mimu</p>
        <p>rama | mimu</p>
      </header>
      <main>
        <div className="container mx-auto">{children}</div>
      </main>
      {/* <footer>I am Footer</footer> */}
    </>
  );
}
