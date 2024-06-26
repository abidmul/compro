import Link from "next/link";

export default function HeroHome() {
  return (
    <section className="flex p-2 bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-700 bg-blend-multiply w-svw:100% w-lvw:100%">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl">
        Wujudkan Dapur Modern dan Fungsional dengan Perabotan Terbaik!
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        Temukan berbagai macam perabotan dapur berkualitas tinggi untuk semua kebutuhan memasak Anda.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link
            href="/services"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
          </Link>
          <Link
            href="#overview"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
