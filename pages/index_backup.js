// import Link from "next/link";
// import { client } from "../libs/client";

// export default function Home({ blog, works }) {
//   return (
//     <div className="main-wrapper">
//       <div className="main-container">
//         <header>
//           <div>
//             <div>
//               <h1>小夏のポートフォリオ＆ちょびっとブログ</h1>
//             </div>
//           </div>
//         </header>
//       </div>
//     </div>
//   );
// }




// // microcmsのブログ,作品集のデータを持ってくる
// export const getStaticProps = async () => {
//   const data = await client.get({ endpoint: "blog" });
//   const worksdata = await client.get({ endpoint: "works" });

//   return {
//     props: {
//       blog: data.contents,
//       works: worksdata.contents,
//     },


//   };
// };
