import Head from 'next/head'

export const Home = (): JSX.Element => (
  <div className="antialiased text-gray-900 flex items-center justify-center min-h-screen">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <h1 className="text-5xl font-bold text-purple-500">Hello world!</h1>
    </div>
  </div>
)

export default Home
