// import Link from "next/link";
// import { client } from "../libs/client";
// import { Pagination } from '../components/Pagination';


// export default function Home({ blog,works, totalCount }) {
//   return (
//     <div className="wrapper">
//       <ul>
//         {blog.map((blog) => (
//           <li key={blog.id}>
//             <Link href={`/blog/${blog.id}`}>
//               <a>{blog.title}</a>
//             </Link>

//           </li>
//         ))}
//       </ul>
//       <Pagination totalCount={totalCount} />
//       <ul>
//         {works.map((works) => (
//           <li key={works.id}>
//             <Link href={`/works/${works.id}`}>
//               <a>{works.title}</a>
//             </Link>

//           </li>
//         ))}
//       </ul>
//       <Link href="/about">
//         <a>こちら</a>
//       </Link>
//       <Link href="/about">
//         <a>こちら</a>
//       </Link>
//     </div>
//   );
// }




// microcmsのブログ,作品集のデータを持ってくる
// export const getStaticProps = async () => {
//   const data = await client.get({ endpoint: "blog" });
//   const worksdata = await client.get({ endpoint: "works" });
//   const key = {
//     headers: {'X-API-KEY': process.env.API_KEY},
//   };
//   const paginationdata = await fetch('https://konatsu.microcms.io/api/v1/blog?offset=0&limit=5', key)
//     .then(res => res.json())
//     .catch(() => null);
//   return {
//     props: {
//       blog: data.contents,
//       works: worksdata.contents,
//       totalCount: paginationdata.totalCount
//     },


//   };
// };


import Link from "next/link";
import styles from "../styles/Top.module.scss";
import { client } from "../libs/client";

export default function Home({ about, blog, works, contact, }) {
  return (
    <div className="main-wrapper">
      <div className="main-container">
        <header className={styles.headerSection}>
          <div className="top-main-ttl main-ttl">
            <h1>こなつのポートフォリオ<br />＆<br />ちょびっとブログ</h1>
          </div>
        </header>
        <div className="main-contents">
          <section className={styles.aboutSection}>
            <h2>自己紹介</h2>
            <Link href="/about">
              <a>もっとよむ</a>
            </Link>
          </section>
          <section className={styles.blogSection}>
            <h2>ブログ</h2>
            <Link href="/blog">
              <a>もっとよむ</a>
            </Link>
          </section>
          <section className={styles.worksSection}>
            <h2>作品集</h2>
            <Link href="/works">
              <a>もっとよむ</a>
            </Link>
          </section>
          <section className={styles.contactSection}>
            <h2>お問い合わせ</h2>
            <Link href="/contact">
              <a>もっとよむ</a>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}




// microcmsのブログ,作品集のデータを持ってくる
export const getStaticProps = async () => {
  const aboutData = await client.get({ endpoint: "about" });
  const blogData = await client.get({ endpoint: "blog" });
  const worksData = await client.get({ endpoint: "works" });
  const contactData = await client.get({ endpoint: "contact" });

  return {
    props: {
      about: aboutData.contents,
      blog: blogData.contents,
      works: worksData.contents,
      contact: contactData.contents,
    },


  };
};
