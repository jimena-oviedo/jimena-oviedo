export function JsonDump({ error }: { error: unknown }) {
  return <pre className="text-red-600">{JSON.stringify(error, null, 2)}</pre>;
}
