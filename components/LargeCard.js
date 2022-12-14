// @ts-nocheck
import Image from "next/legacy/image";
function LargeCard({ img,title,description,buttonText }) {
    return (
        <section className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" alt="" />
            </div>
            <div className="absolute top-32 left-12">
                <h3 className="text-2xl mb-3 w-64 font-semibold">{title}</h3>
                <p className="text-gray-600">{description}</p>
                <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">{buttonText}</button>
            </div>
        </section>
    );
}

export default LargeCard;
