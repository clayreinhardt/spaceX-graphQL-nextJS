import Link from "next/link"
import Head from 'next/head'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'


const faqs = [

    {
        id: 1,
        question: "What is this page?",
        answer:
            "We're simply two developers with a passion for science and technology and all of the information we share on this page is strictly for entertainment and educational purposes only. Our primary purpose is to provide any data we can on SpaceX missions, rockets, and satellite related stuff. ",
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


function classNames(...classes) {
    return classes.filter(Boolean).join('')
}

export default function disclaimer() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                    <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Disclaimer & Frequently asked questions</h2>
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt className="text-lg">
                                            <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                                <span className="font-medium text-gray-900">{faq.question}</span>
                                                <span className="ml-6 h-7 flex items-center">
                                                    <ChevronDownIcon
                                                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base text-gray-500">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

//    Hi, there! Just a heads up: We are not affiliates of SpaceX or any of its subsidiaries. We're simply two developers with a passion for science and technology and all of the information we share on this page is for entertainment and educational purposes only.