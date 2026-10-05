import Link from "next/link";

const contactOptions = [
  {
    title: "Orders & delivery",
    description: "Have a question about finding or choosing a product?",
    href: "/product",
    link: "Browse products",
    icon: (
      <svg
        aria-hidden="true"
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        viewBox="0 0 24 24"
      >
        <path
          d="M3 7h18l-1.5 13h-15L3 7Zm4 0a5 5 0 0 1 10 0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Get to know us",
    description: "Learn more about StoreX and what matters to our team.",
    href: "/about",
    link: "About StoreX",
    icon: (
      <svg
        aria-hidden="true"
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 16v-4m0-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Still need a hand?",
    description: "Tell us a little about your question using the form below.",
    href: "#contact-form",
    link: "Write a message",
    icon: (
      <svg
        aria-hidden="true"
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        viewBox="0 0 24 24"
      >
        <path
          d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-gray-50 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-bold tracking-[0.2em] text-blue-600 uppercase">
            Contact StoreX
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            We&apos;re here to help
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Whether you&apos;re exploring our collection or have a question,
            we&apos;ll help you find your way.
          </p>
        </div>
      </section>

      <section
        aria-label="Ways to get help"
        className="mx-auto grid max-w-6xl gap-5 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        {contactOptions.map((option) => (
          <article
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            key={option.title}
          >
            <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              {option.icon}
            </div>
            <h2 className="text-lg font-bold text-gray-900">{option.title}</h2>
            <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">
              {option.description}
            </p>
            <Link
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
              href={option.href}
            >
              {option.link}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </article>
        ))}
      </section>

      <section className="px-4 pb-16 sm:pb-20">
        <div
          className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm lg:grid-cols-[0.8fr_1.2fr]"
          id="contact-form"
        >
          <div className="bg-blue-600 p-8 text-white sm:p-10">
            <p className="text-sm font-bold tracking-[0.18em] text-blue-100 uppercase">
              Get in touch
            </p>
            <h2 className="mt-3 text-3xl font-bold">Send us a message</h2>
            <p className="mt-4 leading-7 text-blue-50">
              Share a few details about what you need help with. We&apos;ll be
              ready to assist once message delivery is connected.
            </p>
            <div className="mt-10 border-t border-blue-400/50 pt-6">
              <p className="text-sm font-semibold text-blue-100">
                Looking for something to shop?
              </p>
              <Link
                className="mt-2 inline-flex items-center gap-2 font-semibold text-white underline decoration-white/60 underline-offset-4 hover:decoration-white"
                href="/product"
              >
                Explore our products
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          <form className="space-y-5 p-8 sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  className="mb-2 block text-sm font-semibold text-gray-700"
                  htmlFor="name"
                >
                  Your name
                </label>
                <input
                  autoComplete="name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-semibold text-gray-700"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  autoComplete="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
            </div>

            <div>
              <label
                className="mb-2 block text-sm font-semibold text-gray-700"
                htmlFor="subject"
              >
                What can we help with?
              </label>
              <select
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                defaultValue=""
                id="subject"
                name="subject"
              >
                <option disabled value="">
                  Choose a topic
                </option>
                <option value="product">Product question</option>
                <option value="order">Order or delivery</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div>
              <label
                className="mb-2 block text-sm font-semibold text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                id="message"
                name="message"
                placeholder="Tell us how we can help..."
                rows={5}
              />
            </div>

            <div>
              <button
                className="w-full cursor-not-allowed rounded-lg bg-gray-300 px-6 py-3.5 font-semibold text-gray-600 sm:w-auto"
                disabled
                type="submit"
              >
                Message sending unavailable
              </button>
              <p className="mt-3 text-sm text-gray-500">
                This form is a preview and isn&apos;t connected to a message
                service yet.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
