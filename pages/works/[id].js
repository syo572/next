// pages/works/[id].js
import { client } from '../../libs/client';
import styles from '../../styles/Home.module.scss';
import Button from '@material-ui/core/Button';

// pages/works/[id].js
export default function WorksId({ works }) {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>{works.title}</h1>
            <p className={styles.publishedAt}>{works.publishedAt}</p>
            <p className="category">{works.category.name}</p>
            <div
                dangerouslySetInnerHTML={{
                    __html: `${works.body}`,
                }}
                className={styles.post}
            />
            <Button variant="contained" color="primary">
                押してみそ
            </Button>
        </main>
    );
}
// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "works" });

    const paths = data.contents.map((content) => `/works/${content.id}`);
    return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "works", contentId: id });

    return {
        props: {
            works: data,
        },
    };
};