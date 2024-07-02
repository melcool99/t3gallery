import Image from "next/image";

export default function HomePage() {
  const mockUrl = [
    "https://utfs.io/f/8d55c2f9-3364-485f-8846-01955c0e32ef-6ujkv4.jpeg",
    "https://utfs.io/f/a5c4dd27-f34c-4322-b827-6faf67a9f672-sli8tu.jpeg",
    "https://utfs.io/f/debe7991-f183-45b5-aee6-726fafa45dcd-76hwrr.jpeg",
    "https://utfs.io/f/a5c4dd27-f34c-4322-b827-6faf67a9f672-sli8tu.jpeg",
  ];

  const mockImages = mockUrl.map((url, index) => ({
    id: index + url,
    url,
  }));
  return (
    <main className="">
      <div className="flex flex-wrap justify-between gap-4  ">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <Image
            width={200}
            height={200}
            key={image.id}
            src={image.url}
            alt="mock"
          />
        ))}
      </div>
    </main>
  );
}
