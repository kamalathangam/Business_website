export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {" "}
      {/* Header */}{" "}
      <header className="border-b border-gray-200">
        {" "}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {" "}
          <h1 className="text-2xl font-bold"> LT Global Accounting services </h1>{" "}
          <nav className="hidden gap-6 md:flex">
            {" "}
            <a href="#home" className="hover:text-blue-600">
              {" "}
              Home{" "}
            </a>{" "}
            <a href="#services" className="hover:text-blue-600">
              {" "}
              Services{" "}
            </a>{" "}
            <a href="#about" className="hover:text-blue-600">
              {" "}
              About Us{" "}
            </a>{" "}
            <a href="#contact" className="hover:text-blue-600">
              {" "}
              Contact{" "}
            </a>{" "}
          </nav>{" "}
          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
          >
            {" "}
            Get Started{" "}
          </a>{" "}
        </div>{" "}
      </header>{" "}
      {/* Hero Section */}{" "}
      <section id="home" className="bg-gray-50 px-6 py-24">
        {" "}
        <div className="mx-auto max-w-7xl text-center">
          {" "}
          <p className="mb-4 font-semibold text-blue-600">
            {" "}
            PROFESSIONAL BUSINESS SOLUTIONS{" "}
          </p>{" "}
          <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {" "}
            Reliable Solutions for Your Business{" "}
          </h2>{" "}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            {" "}
            We provide professional, reliable and efficient services designed to
            help businesses save time, improve productivity and grow with
            confidence.{" "}
          </p>{" "}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            {" "}
            <a
              href="#services"
              className="rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white hover:bg-blue-700"
            >
              {" "}
              Explore Our Services{" "}
            </a>{" "}
            <a
              href="#contact"
              className="rounded-full border border-gray-300 px-7 py-3.5 font-semibold hover:bg-white"
            >
              {" "}
              Contact Us{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Services */}{" "}
      <section id="services" className="px-6 py-20">
        {" "}
        <div className="mx-auto max-w-7xl">
          {" "}
          <div className="text-center">
            {" "}
            <p className="font-semibold text-blue-600">WHAT WE OFFER</p>{" "}
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              {" "}
              Our Services{" "}
            </h2>{" "}
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              {" "}
              Professional services tailored to meet your business needs.{" "}
            </p>{" "}
          </div>{" "}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {" "}
            <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
              {" "}
              <h3 className="text-xl font-bold">Service One</h3>{" "}
              <p className="mt-3 text-gray-600">
                {" "}
                High-quality and reliable service designed to support your
                business operations.{" "}
              </p>{" "}
            </div>{" "}
            <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
              {" "}
              <h3 className="text-xl font-bold">Service Two</h3>{" "}
              <p className="mt-3 text-gray-600">
                {" "}
                Efficient solutions that help reduce workload and improve
                productivity.{" "}
              </p>{" "}
            </div>{" "}
            <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
              {" "}
              <h3 className="text-xl font-bold">Service Three</h3>{" "}
              <p className="mt-3 text-gray-600">
                {" "}
                Flexible and professional support built around your business
                requirements.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* About */}{" "}
      <section id="about" className="bg-gray-50 px-6 py-20">
        {" "}
        <div className="mx-auto max-w-4xl text-center">
          {" "}
          <p className="font-semibold text-blue-600">ABOUT US</p>{" "}
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            {" "}
            Your Trusted Business Partner{" "}
          </h2>{" "}
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {" "}
            We focus on delivering dependable services with accuracy,
            professionalism and customer satisfaction at the heart of everything
            we do.{" "}
          </p>{" "}
        </div>{" "}
      </section>{" "}
      {/* How It Works */}{" "}
      <section className="px-6 py-20">
        {" "}
        <div className="mx-auto max-w-7xl">
          {" "}
          <div className="text-center">
            {" "}
            <p className="font-semibold text-blue-600">OUR PROCESS</p>{" "}
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              {" "}
              How It Works{" "}
            </h2>{" "}
          </div>{" "}
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {" "}
            <div className="text-center">
              {" "}
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                {" "}
                1{" "}
              </div>{" "}
              <h3 className="mt-4 font-bold">Contact Us</h3>{" "}
              <p className="mt-2 text-gray-600">
                {" "}
                Tell us about your requirements.{" "}
              </p>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                {" "}
                2{" "}
              </div>{" "}
              <h3 className="mt-4 font-bold">Understand</h3>{" "}
              <p className="mt-2 text-gray-600">
                {" "}
                We understand your business needs.{" "}
              </p>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                {" "}
                3{" "}
              </div>{" "}
              <h3 className="mt-4 font-bold">Deliver</h3>{" "}
              <p className="mt-2 text-gray-600">
                {" "}
                We provide the agreed service.{" "}
              </p>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                {" "}
                4{" "}
              </div>{" "}
              <h3 className="mt-4 font-bold">Grow</h3>{" "}
              <p className="mt-2 text-gray-600">
                {" "}
                You save time and focus on growth.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Why Choose Us */}{" "}
      <section className="bg-gray-50 px-6 py-20">
        {" "}
        <div className="mx-auto max-w-7xl">
          {" "}
          <div className="text-center">
            {" "}
            <p className="font-semibold text-blue-600">WHY US</p>{" "}
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              {" "}
              Why Choose Us?{" "}
            </h2>{" "}
          </div>{" "}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {" "}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              {" "}
              <h3 className="text-xl font-bold">Accuracy</h3>{" "}
              <p className="mt-3 text-gray-600">
                {" "}
                We focus on delivering accurate and dependable work.{" "}
              </p>{" "}
            </div>{" "}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              {" "}
              <h3 className="text-xl font-bold">Reliability</h3>{" "}
              <p className="mt-3 text-gray-600">
                {" "}
                Consistent service and professional communication.{" "}
              </p>{" "}
            </div>{" "}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              {" "}
              <h3 className="text-xl font-bold">Customer Focus</h3>{" "}
              <p className="mt-3 text-gray-600">
                {" "}
                Solutions designed around your specific requirements.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Contact */}{" "}
      <section id="contact" className="px-6 py-20">
        {" "}
        <div className="mx-auto max-w-3xl text-center">
          {" "}
          <p className="font-semibold text-blue-600">GET IN TOUCH</p>{" "}
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            {" "}
            Let's Work Together{" "}
          </h2>{" "}
          <p className="mt-5 text-gray-600">
            {" "}
            Have a requirement? Contact us and let's discuss how we can help
            your business.{" "}
          </p>{" "}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            {" "}
            <a
              href="mailto:your@email.com"
              className="rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white hover:bg-blue-700"
            >
              {" "}
              Send an Email{" "}
            </a>{" "}
            <a
              href="https://wa.me/910000000000"
              className="rounded-full border border-gray-300 px-7 py-3.5 font-semibold hover:bg-gray-50"
            >
              {" "}
              WhatsApp Us{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Footer */}{" "}
      <footer className="border-t border-gray-200 px-6 py-8">
        {" "}
        <div className="mx-auto max-w-7xl text-center text-sm text-gray-500">
          {" "}
          © 2026 Your Business. All rights reserved.{" "}
        </div>{" "}
      </footer>{" "}
    </main>
  );
}
