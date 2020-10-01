import Link from 'next/link';
import Head from 'next/head';
import Layout from './../../Container/Layout/Layout';
export default function FirstPost(){
    return (
        <Layout>
            <div>
                <Head>
                    <title>The First Post</title>
                </Head>
                <h1>First Post</h1>
                <h2><Link href="/"><a>Back to home page</a></Link></h2>
            </div>
        </Layout>
    );
}