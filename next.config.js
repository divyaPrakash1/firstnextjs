/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/about',
                destination: '/userr',
                permanent: false
            }
        ]
    },
    images: {

        domains: ["buffer.com"]
    }
}

module.exports = nextConfig
