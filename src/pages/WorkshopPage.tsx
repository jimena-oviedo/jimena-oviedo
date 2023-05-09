const PHOTOS_STUB = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export function WorkshopPage() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {PHOTOS_STUB.map((photo) => (
        <figure key={photo} className="basis-1/3">
          <img
            className="block h-full w-full rounded-lg object-cover object-center"
            src={`https://picsum.photos/seed/${photo}/300/200?blur`}
          />
        </figure>
      ))}
    </section>
  );
}
