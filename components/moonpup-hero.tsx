import Image from "next/image"

export function MoonpupHero() {
  return (
    <div className="text-center py-16 bg-opacity-20 bg-black backdrop-blur-lg rounded-lg">
      <div className="relative inline-block">
        <Image
          src="https://storage.moonerhive.com/mooner-tokens/mhbl-10/ktn-8865/logo-v2gy9.webp"
          alt="MoonPup"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">MoonPup</span>
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-300">The 1st DeepSeek AI meme on-chain</p>
      <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition">
        Explore MoonPup
      </button>
    </div>
  )
}

