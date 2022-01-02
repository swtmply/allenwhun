import type { NextPage } from 'next';
import Image from 'next/image';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Home Page">
      <div className="flex gap-4 items-center mb-12">
        <Image
          src="/profile.jpg"
          height={300}
          width={240}
          alt="Picture of me"
          className="rounded-lg"
        />
        <div className="text-stone-600">
          <h2 className="font-bold text-5xl mb-2 text-black">
            John Allen <br /> Delos Reyes
          </h2>
          <p className="mb-4">
            Student at Technological University of the Philippines
          </p>
          <p>
            Aspiring Front-End Developer and learing a lot of tech each day.
            Mainly for React and Next.js
          </p>
        </div>
      </div>

      <section className="mb-12">
        <h3 className="font-bold text-3xl mb-4">Recent Projects</h3>
        <p className="text-stone-600">
          Some of the projects that I have worked on and currently working on.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="font-bold text-3xl mb-4">Technologies I Use</h3>
        <p className="text-stone-600">
          These are the techologies I use to create web applications for
          projects and personal use.
        </p>
      </section>
    </Layout>
  );
};

export default Home;
