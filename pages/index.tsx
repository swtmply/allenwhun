import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import Tech from '../components/Tech';

const Home: NextPage = () => {
  return (
    <Layout title="Home Page">
      <header className="col-span-full grid grid-cols-6 min-h-screen items-center mx-6 pb-64">
        <div className="col-span-full">
          <p className="font-mono text-gray-200 col-span-full mt-12 mb-2 text-xs">
            Hi I&rsquo;m
          </p>
          <h1 className="text-5xl font-bold col-span-full mb-4 tracking-wide">
            John Allen <br /> Delos Reyes
          </h1>
          <p className="font-semibold text-2xl col-span-full mb-4 tracking-wide">
            UI/UX Developer
          </p>
          <button className="bg-pink-300 text-white font-mono px-8 py-2 col-span-3 max-w-max text-sm rounded gradient-bvp">
            Contact Me
          </button>
        </div>
      </header>

      <section className="col-span-full mb-16 mx-6">
        <p className="font-mono text-xs text-gray-200 mb-2">Introduction</p>
        <h2 className="text-2xl font-bold tracking-wide text-transparent bg-clip-text gradient-bvp w-max mb-1">
          About me
        </h2>
        <p className="text-sm leading-6 mb-4">
          I&rsquo;m John Allen Delos Reyes, 21 years old. I&rsquo;m now pursuing
          a bachelor&rsquo;s degree in information technology. at Technological
          University of the Philippines. I&rsquo;m very passionate and motivated
          about learning programming and web development.
        </p>
        <Link href="#">
          <a className="text-sm underline text-pink-300">
            Take a look at my CV
          </a>
        </Link>
      </section>

      <section className="bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 col-span-full p-6 overflow-x-hidden mb-16">
        <h2 className="text-2xl font-bold tracking-wide text-transparent bg-clip-text gradient-bvp w-max mb-1">
          My Stack
        </h2>
        <p className="text-sm leading-6 mb-4">
          Technologies I&rsquo;m learning and comfortable with.
        </p>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-bold text-pink-300 mb-4">Designing</h3>
            <div className="flex gap-4 overflow-x-scroll snap-x scrollbar-none">
              <Tech imageLink="/assets/logos/ps.svg" name="Photoshop" />
              <Tech imageLink="/assets/logos/figma.svg" name="Figma" />
              <Tech imageLink="/assets/logos/ai.svg" name="Illustrator" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-300 mb-4">Backend</h3>
            <div className="flex gap-4 overflow-x-scroll snap-x scrollbar-none">
              <Tech imageLink="/assets/logos/node.svg" name="Node" />
              <Tech imageLink="/assets/logos/mongodb.svg" name="Mongodb" />
              <Tech imageLink="/assets/logos/graphql.svg" name="Graphql" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-pink-300 mb-4">Frontend</h3>
            <div className="flex gap-4 overflow-x-scroll snap-x scrollbar-none">
              <Tech imageLink="/assets/logos/next.svg" name="Next" />
              <Tech imageLink="/assets/logos/react.svg" name="React" />
              <Tech imageLink="/assets/logos/html.svg" name="Html" />
              <Tech imageLink="/assets/logos/css.svg" name="Css" />
              <Tech imageLink="/assets/logos/sass.svg" name="Sass" />
              <Tech imageLink="/assets/logos/tailwind.svg" name="Tailwind" />
              <Tech imageLink="/assets/logos/js.svg" name="Javascript" />
              <Tech imageLink="/assets/logos/ts.svg" name="Typescript" />
            </div>
          </div>
        </div>
      </section>

      <section className="col-span-full mb-16 mx-6">
        <p className="font-mono text-xs text-gray-200 mb-2">Projects</p>
        <h2 className="text-2xl font-bold tracking-wide text-transparent bg-clip-text gradient-bvp w-max mb-1">
          Recent Works of mine
        </h2>

        <div className="mt-8 mb-6 flex flex-col gap-4">
          <div className="gradient-bvp w-full aspect-video rounded-md p-1">
            <div className="relative w-full aspect-video">
              <Image
                src="/assets/projects/9degree.png"
                layout="fill"
                objectFit="cover"
                alt="9degrees"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl text-white font-bold">9degrees</h2>
                  <p className="text-sm text-white">
                    News and Magazine website.
                  </p>
                </div>
                <button className="bg-pink-300 text-white font-mono px-8 py-2 col-span-3 max-w-max text-sm rounded gradient-bvp">
                  Visit Website
                </button>
              </div>
            </div>
          </div>
          <div className="gradient-bvp w-full aspect-video rounded-md p-1">
            <div className="relative w-full aspect-video">
              <Image
                src="/assets/projects/9degree.png"
                layout="fill"
                objectFit="cover"
                alt="9degrees"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl text-white font-bold">9degrees</h2>
                  <p className="text-sm text-white">
                    News and Magazine website.
                  </p>
                </div>
                <button className="bg-pink-300 text-white font-mono px-8 py-2 col-span-3 max-w-max text-sm rounded gradient-bvp">
                  Visit Website
                </button>
              </div>
            </div>
          </div>
        </div>

        <Link href="#">
          <a className="text-sm underline text-pink-300">
            Take a look at my Projects
          </a>
        </Link>
      </section>

      <section className="after:bg-clip-padding after:backdrop-filter after:backdrop-blur-xl after:bg-opacity-60 col-span-full p-6 mb-16 relative after:bg-gray-500 after:-rotate-[5deg] after:-inset-5 after:absolute after:-z-[1]">
        <h2 className="text-2xl font-bold tracking-wide text-transparent bg-clip-text gradient-bvp w-max mb-1">
          Testimonials
        </h2>
        <p className="text-sm leading-6 mb-4">
          Individuals I&rsquo;ve worked with, as well as their perceptions on
          myself and my work
        </p>
        <div className="flex gap-4">
          <div className="min-w-[110px] min-h-[150px] relative rounded-xl">
            <Image
              src="/assets/pictures/ryujin.jpg"
              layout="fill"
              objectFit="cover"
              alt="ryujin"
              className="rounded-xl before:conte"
            />
          </div>
          <div className="self-end relative">
            <h4 className="font-semibold text-xl mb-2">Shin Ryujin</h4>
            <p>
              Wow allen mylove talapingping talapong pong talap2 hehehe
              whahaaaaaa
            </p>
            <span className="absolute text-gray-500 -top-12 -left-3 font-serif text-8xl">
              &ldquo;
            </span>
            <span className="absolute text-gray-500 -bottom-14 -right-3 font-serif text-8xl">
              &rdquo;
            </span>
          </div>
        </div>
      </section>

      <section className="col-span-full mb-16 mx-6">
        <p className="font-mono text-xs text-gray-200 mb-2">Contact Me</p>
        <h2 className="text-2xl font-bold tracking-wide text-transparent bg-clip-text gradient-bvp mb-8">
          Want me to work in your desired project?
        </h2>
        <div className="p-4 rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
          <h4 className="text-xl font-semibold mb-2">
            Tell me about your project.
          </h4>
          <p className="text-sm mb-6">
            Send me an email about your project and we will start it right away
            as soon as possible.
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your email address"
              className="p-2 bg-white text-black w-full rounded-md ring ring-gray-200 active:ring-pink-300 focus:ring-opacity-80"
            />
            <textarea
              className="p-2 bg-white text-black w-full rounded-md ring ring-gray-200 active:ring-pink-300 focus:ring-opacity-80"
              placeholder="Tell me the gist of your project."
              rows={10}
            />
            <button className="bg-pink-300 text-white font-mono px-8 py-2 col-span-3 max-w-max rounded gradient-bvp text-sm w-full">
              What are you waiting for? Submit it.
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
