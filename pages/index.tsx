import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'

function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>

          {/* Pull some data from a server - API endpoints */}
          {exploreData?.map((item: any) => (
            <SmallCard
              key={item.img}
              img={item.img}
              location={item.location}
              distance={item.distance}
            />
          ))}
        </section>
      </main>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  )

  return {
    props: { exploreData: exploreData },
  }
}
