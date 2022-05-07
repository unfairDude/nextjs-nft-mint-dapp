import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout';
import Prose from '../components/Prose';
import Minting from '../components/Minting';
import Faq from '../components/Faq';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import projectConfig from '../config/projectConfig';
import topImage from '../public/assets/1920x600.png';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{projectConfig.nftName}</title>
      </Head>

      <Image src={topImage} alt={projectConfig.nftName} />

      <div className="bg-gray-800 py-8">
        <Prose>
          <h1 className="text-5xl font-bold mb-2">{projectConfig.nftName}</h1>
          <p className="text-xl">
          𝘼𝙡𝙞𝙚𝙣𝙨-𝙀𝙑𝙊 𝘪𝘴 𝘢 𝘤𝘰𝘰𝘭 𝘤𝘰𝘭𝘭𝘦𝘤𝘵𝘪𝘰𝘯 𝘰𝘧  5000 𝘶𝘯𝘪𝘲𝘶𝘦 𝘈𝘭𝘪𝘦𝘯𝘴.<br></br>
          𝘛𝘩𝘪𝘴 𝘱𝘳𝘰𝘫𝘦𝘤𝘵 𝘸𝘢𝘴 𝘥𝘦𝘴𝘪𝘨𝘯𝘦𝘥 𝘧𝘰𝘳 𝘢𝘭𝘭 𝘢𝘳𝘵 𝘭𝘰𝘷𝘦𝘳𝘴,<br></br>
          𝘪𝘯𝘤𝘭𝘶𝘥𝘪𝘯𝘨 𝙖𝙡𝙡 𝙩𝙝𝙤𝙨𝙚 𝙬𝙝𝙤 𝙝𝙖𝙫𝙚 𝙣𝙤𝙩 𝙮𝙚𝙩 𝙚𝙣𝙩𝙚𝙧𝙚𝙙 𝙩𝙝𝙚 𝙉𝙁𝙏𝙨 𝙬𝙤𝙧𝙡𝙙.<br></br>
          𝘞𝘦 𝘤𝘳𝘦𝘢𝘵𝘦𝘥 𝘢𝘯 𝘕𝘍𝘛 𝘵𝘩𝘢𝘵 𝘩𝘢𝘴 𝘢 𝙍𝙀𝘼𝙇 𝙒𝙊𝙍𝙇𝘿 𝙐𝙎𝙀 <br></br>
          𝘢𝘯𝘥 𝘸𝘢𝘯𝘵𝘴 𝘵𝘰 𝘣𝘳𝘪𝘯𝘨 𝘺𝘰𝘶 𝙘𝙡𝙤𝙨𝙚𝙧 𝙩𝙤 𝙩𝙝𝙞𝙨 𝙪𝙣𝙞𝙫𝙚𝙧𝙨𝙚, 𝘴𝘵𝘦𝘱 𝘣𝘺 𝘴𝘵𝘦𝘱.
          </p>
        </Prose>
      </div>

      <div className="py-8">
        <Prose>
          <Minting />
        </Prose>
      </div>

      <div className="bg-gray-800 py-8">
        <Prose>
          <Faq />
        </Prose>
      </div>

      <div className="py-8">
        <Prose>
          <Roadmap />
        </Prose>
      </div>

      <div className="bg-gray-800 py-8">
        <Prose>
          <Team />
        </Prose>
      </div>
    </Layout>
  );
};

export default Home;
