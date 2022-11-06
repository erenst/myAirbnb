// @ts-nocheck
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData,cardData }) {
  return (
    <div>
      <Head>
        <title>My Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-2xl font-semibold">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item,index) => (
              <SmallCard img={item.img} location={item.location} distance={item.distance} key={index} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {
              cardData?.map((item,index) => (
                <MediumCard key={index} img={item.img} title={item.title} />
              ))
            }
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then((res) => res.json());
  const cardData = await fetch("https://www.jsonkeeper.com/b/VHHT").then((res) => res.json());
  return {
    props: {
      exploreData,
      cardData
    }
  };
}