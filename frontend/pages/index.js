export async function getServerSideProps() {
  const res = await fetch("http://127.0.0.1:8000/api/data/");
  const data = await res.json();

  return { props: { data } };
}

export default function Home({ data }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Next.js + Django API</h1>
      <p className="mt-4">
        {data ? data.message : "No data available."}
      </p>
    </div>
  );
}
