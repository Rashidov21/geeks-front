module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://api.example.com/:path*',
            },
            {
                source: '/:path*',
                destination: '/404',
            },
        ];
    },

    images: {
        domains: ['api.geeksandijan.uz'],
    },
};