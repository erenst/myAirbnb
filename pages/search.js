// @ts-nocheck
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
function Search({ searchResult }) {
    const router = useRouter();
    const { location,startDate,endDate,noOfGuest } = router.query;
    const formattedStartDate = format(new Date(startDate),"dd MMM yyyy");
    const formattedEndDate = format(new Date(endDate),"dd MMM yyyy");
    const range = `from ${formattedStartDate} to ${formattedEndDate}`;
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuest} guests`} />
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays {range} for {noOfGuest} guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6"> Stays in {location}</h1>
                    <div className="hidden lg:inline-flex space-x-3 mb-5 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexbility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>
                    <div className="flex flex-col">
                        {
                            searchResult?.map(({ img,location,title,description,star,price,total },index) => (
                                <InfoCard key={index}
                                    img={img} location={location} title={title} description={description}
                                    star={star} price={price} total={total}
                                />
                            ))
                        }
                    </div>

                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Search;

export async function getServerSideProps() {
    const searchResult = await fetch("https://www.jsonkeeper.com/b/5NPS").then(res => res.json());
    return {
        props: {
            searchResult
        }
    };
}