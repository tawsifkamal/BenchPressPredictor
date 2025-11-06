/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        // https://icons8.com/icon/z3YMXqHDYl9X/brain
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
      }
    ],
  },
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: process.env.NODE_ENV === 'production'
          ? 'https://tinygen-g3ra.onrender.com/api/:path*'
          : 'http://127.0.0.1:8000/api/:path*',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/chrome',
        destination: 'https://github.com/psycho-baller/TinyGen/releases',
        permanent: false,
        basePath: false
      },
      {
        source: '/firefox',
        destination: 'https://github.com/psycho-baller/TinyGen/releases',
        permanent: false,
        basePath: false
      },
      {
        source: '/edge',
        destination: 'https://github.com/psycho-baller/TinyGen/releases',
        permanent: false,
        basePath: false
      },
      {
        source: '/safari',
        destination: 'https://github.com/psycho-baller/TinyGen/releases',
        permanent: false,
        basePath: false
      },
    ]
  },
};

module.exports = nextConfig;
