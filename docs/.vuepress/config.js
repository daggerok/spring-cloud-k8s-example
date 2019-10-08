const baseHref = !!process.env.BASE_HREF ? process.env.BASE_HREF : '/';
module.exports = {
    title: 'Spring Cloud k8s',
    description: 'Spring Cloud k8s',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    base: baseHref,
    themeConfig: {
        repo: 'daggerok/spring-cloud-k8s-example',
        nav: [
            { text: 'Home', link: '/', },
            { text: 'Jar files', link: '/jar/', },
            { text: 'Maven', link: '/mvn/', },
            { text: 'Docker', link: '/docker/', },
            { text: 'k8s', link: '/k8s/', },
        ],
        sidebar: [
            '/',
            '/jar/',
            '/mvn/',
            '/docker/',
            '/k8s/',
        ]
    },
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            md.use(require('markdown-it-vuepress-code-snippet-enhanced'))
        }
    },
    plugins: [
        '@vuepress/blog',
        '@vuepress/back-to-top',
        '@vuepress/last-updated',
        '@vuepress/medium-zoom',
        '@vuepress/nprogress',
    ],
};
