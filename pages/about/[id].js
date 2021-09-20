// pages/about/[id].js
import { client } from "../../libs/client";


export default function aboutId({ about }) {
  return (
    <main>
      <h1>{about.title}</h1>
      <p>{about.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${about.body}`,
        }}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "about" });

  const paths = data.contents.map((content) => `/about/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "about", contentId: id });

  return {
    props: {
      about: data,
    },
  };
};