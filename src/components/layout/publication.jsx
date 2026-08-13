import React from "react";

const journalsList = [
    {
        title: "Global Publications in Management",
        url: "https://gpim.in",

    },
    {
        title: "International Journal of SDG's Prospects and Breakthroughs",
        url: "https://sdgjournal.com",
    },
    {
        title: "Progression Journal of Human Demography and Anthropology",
        url: "https://hdajournal.com",
    },
    {
        title: "Global Tech Management Digest",
        url: "https://globaltmdigest.com",
    },
    {
        title: "TIE: Trends in Entrepreneurship Journal",
        url: "https://tiejournals.com",

    },

    // {
    //     title: "Journal of Indian Languages, Literature, and Multilingualism",
    //     url: "https://indianlanguagesjournal.com/",
    // },


];

export default function Publications() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white py-20 md:py-24">
            {/* Decorative Background */}
            <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-purple-100/50 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-yellow-100/50 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6">

                {/* Header */}
                <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-sm font-semibold text-fiams-purple">
                        <span className="h-2 w-2 rounded-full bg-fiams-purple" />
                        Academic Publications
                    </div>

                    <h2 className="mb-5 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                        Journals & Publications
                    </h2>

                    <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                        Explore our curated collection of academic journals and
                        research publications, featuring scholarly work and
                        insights from our community of researchers.
                    </p>
                </div>

                {/* Publications */}
                <div className="rounded-3xl border border-gray-100 bg-white/80 p-4 shadow-xl shadow-gray-200/40 backdrop-blur-sm sm:p-6 md:p-8">
                    <div className="space-y-3">
                        {journalsList.map((journal, index) => (
                            <a
                                key={index}
                                href={journal.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block rounded-2xl border border-transparent p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-100 hover:bg-purple-50/40 hover:shadow-md sm:p-5"
                            >
                                <div className="flex items-start gap-4">
                                    {/* Number */}
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-50 text-sm font-bold text-fiams-purple transition-all duration-300 group-hover:bg-fiams-purple group-hover:text-white">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    {/* Content */}
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-start justify-between gap-4">
                                            <h3 className="text-lg font-bold leading-7 text-gray-900 transition-colors duration-300 group-hover:text-fiams-purple sm:text-xl">
                                                {journal.title}
                                            </h3>

                                            {/* External Link */}
                                            <svg
                                                className="mt-1 h-5 w-5 shrink-0 text-gray-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-fiams-purple"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M14 5h5m0 0v5m0-5L10 14"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 14v4a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1h4"
                                                />
                                            </svg>
                                        </div>

                                        <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-500 sm:text-base">
                                            {journal.description}
                                        </p>

                                        {/* URL */}
                                        <span className="flex flex-start mt-3 inline-block text-xs font-medium text-gray-400 transition-colors duration-300 group-hover:text-fiams-purple">
                                            {journal.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom Note
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-400">
                        Click on any publication to visit its official journal website.
                    </p>
                </div> */}
            </div>
        </section>
    );
}