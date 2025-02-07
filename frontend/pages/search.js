export default function Searches({ data }) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Jorge es un chupa pingas</h1>
        <p className="mt-4">
          {data ? data.message : "No data available."}
        </p>
      </div>
    );
  }