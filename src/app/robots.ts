import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/tmp/',
        },
        sitemap: 'https://www.signalbridgeinsights.com/sitemap.xml',
    }
}
