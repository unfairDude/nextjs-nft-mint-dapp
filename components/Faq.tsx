import { Router, useRouter } from "next/router";
import Link from "next/link";
export default function Faq() {
  return (
    <>
      <h2 className="text-6xl mb-4">𝙈𝙄𝙉𝙏 & 𝙒𝙄𝙉</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-3xl mb-2"><br></br>𝙃𝙊𝙒 𝘿𝙊𝙀𝙎 𝙄𝙏 𝙒𝙊𝙍𝙆?</h3>
          <p className="text-xl">
            𝘞𝘩𝘦𝘯𝘦𝘷𝘦𝘳 𝘴𝘰𝘮𝘦𝘰𝘯𝘦 𝘮𝘪𝘯𝘵 𝘢𝘯 𝘼𝙡𝙞𝙚𝙣𝙨-𝙀𝙑𝙊 𝙉𝙁𝙏,<br></br>
            𝘵𝘩𝘦𝘳𝘦&#39;𝘴 𝘢 𝘨𝘰𝘰𝘥 𝘤𝘩𝘢𝘯𝘤𝘦 𝘵𝘩𝘦𝘺&#39;𝘭𝘭 𝘨𝘦𝘵 𝘴𝘰𝘮𝘦 𝙧𝙖𝙧𝙚 𝙩𝙧𝙖𝙞𝙩𝙨,<br></br>
            𝘸𝘩𝘪𝘤𝘩 𝘣𝘢𝘴𝘦𝘥 𝘰𝘯 𝘳𝘢𝘳𝘪𝘵𝘺,<br></br>
            𝘸𝘪𝘭𝘭 𝘣𝘦 𝙧𝙚𝙬𝙖𝙧𝙙𝙚𝙙 𝙬𝙞𝙩𝙝 𝙪𝙥 𝙩𝙤 𝟓𝟎𝟎$𝙈𝘼𝙏𝙄𝘾<br></br>
            <br></br>
            𝘠𝘰𝘶 𝘤𝘢𝘯 𝘵𝘩𝘪𝘯𝘬 𝘰𝘧 𝘵𝘩𝘪𝘴 𝘱𝘳𝘰𝘫𝘦𝘤𝘵 𝘢𝘴 𝘢𝘯 𝘼𝙧𝙩 𝙘𝙤𝙡𝙡𝙚𝙘𝙩𝙞𝙤𝙣 + 𝘽𝙊𝙉𝙐𝙎<br></br>
            𝘈𝘯𝘥 𝘪𝘧 𝘺𝘰𝘶 𝘥𝘰𝘯&#39;𝘵 𝘸𝘪𝘯?<br></br>
            𝘞𝘦𝘭𝘭, 𝘺𝘰𝘶 𝘴𝘵𝘪𝘭𝘭 𝘩𝘢𝘷𝘦 𝘢𝘯 𝘶𝘯𝘪𝘲𝘶𝘦 𝘼𝙡𝙞𝙚𝙣𝙨-𝙀𝙑𝙊 𝙉𝙁𝙏
          </p>
          <button
          type="button"
          className="flex justify-center items-center space-x-2 border-2 border-gray-500 hover:border-gray-400 bg-gray-800 rounded-full px-4 py-2 w-40"
          onClick={() => useRouter.push("/index.html") }
        >

          <span>Connect</span>
        </button>
       </div>
      </div>
    </>
  );
}