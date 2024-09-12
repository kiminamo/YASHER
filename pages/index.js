import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p></p>
    <ul>
    <p>
    Hi, I’m Mark Yasher, a 3rd-year IT student with a strong passion for technology, programming, 
    and problem-solving. Throughout my academic journey, I’ve developed a deep interest in software 
    development, data analysis, and how technology can be used to innovate and improve everyday life. 
    I’m currently focused on honing my skills in Python, but I’m always eager to explore other programming 
    languages and tools that enhance my technical expertise.
    </p>
  </ul>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
