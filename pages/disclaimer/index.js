import Link from "next/link"
import Head from 'next/head'
import Video from '../../components/Video'
const faqs = [

    {
        id: 1,
        question: "What is this page?",
        answer:
            "Our primary purpose is to provide any data we can on SpaceX missions, rockets, and satellite related stuff. We're simply two developers with a passion for science and technology and all of the information we share on this page is strictly for entertainment and educational purposes only.",
    },
    {
        id: 2,
        question: "Are you affiliated with SpaceX?",
        answer:
            "As much as we would absolutely love to be, we are currently NOT affiliates of SpaceX or any of its subsidiaries.",
    },
    // More questions...

    // More questions...
    {
        id: 3,
        question: "Are there going to be any upcoming changes to this site?",
        answer:
            "Stay tuned my friends, big things on the way... In the meantime, you can support us by checkout out our Github :)",
    },
    // More questions...


]

export default function disclaimer() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center">Disclaimer & Frequently asked questions</h2>
                <div className="mt-12">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
                        {faqs.map((faq) => (
                            <div key={faq.id}>
                                <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
                                <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

//    Hi, there! Just a heads up: We are not affiliates of SpaceX or any of its subsidiaries. We're simply two developers with a passion for science and technology and all of the information we share on this page is for entertainment and educational purposes only.