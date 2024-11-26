export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Elias',
    subtitle: 'reading, writing, marketing.',
    description: 'Digital site for Elias Fahssi',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Writing',
            href: '/blog'
        },
        {
            text: 'Resume',
            href: '/resume',
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        /*{
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }*/
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/efahssi/'
        },

    ],
    hero: {
        title: 'Hello & Welcome to My Corner of the Web',
        text: "I'm **Elias Fahssi**, a product person and marketer, dedicated to saving the world from bad writing and strategy. My approach is based on intuition, listening, doing *just* enough research, and working backwards to engineer a winning outcome. I have a profound appreciation for design, humanities, and the power of language. Feel free to explore some of my professional endeavors on <a href='https://www.linkedin.com/in/efahssi/' target='_blank'>LinkedIn</a>.",
        /* image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        }, */
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};


export default siteConfig;
