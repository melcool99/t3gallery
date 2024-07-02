import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const mockUrl = [
    "https://utfs.io/f/8d55c2f9-3364-485f-8846-01955c0e32ef-6ujkv4.jpeg",
    "https://utfs.io/f/a5c4dd27-f34c-4322-b827-6faf67a9f672-sli8tu.jpeg",
    "https://utfs.io/f/debe7991-f183-45b5-aee6-726fafa45dcd-76hwrr.jpeg",
    "https://utfs.io/f/a5c4dd27-f34c-4322-b827-6faf67a9f672-sli8tu.jpeg",
  ];

  const mockImages = mockUrl.map((url, index) => ({
    id: index + 1,
    url,
  }));

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap justify-between gap-4  ">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}
        {[...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
