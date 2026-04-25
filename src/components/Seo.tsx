import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type MetaConfig = {
  title: string;
  description: string;
};

const defaultConfig: MetaConfig = {
  title: 'Ainovex Technologies | AI-Powered Software Solutions for Enterprise & SaaS',
  description:
    'Ainovex Technologies delivers cutting-edge AI, cloud, and enterprise software solutions. Trusted by global businesses for custom SaaS, web platforms, and digital transformation.'
};

const routeMeta: Array<{ match: (pathname: string) => boolean; meta: MetaConfig }> = [
  {
    match: (pathname) => pathname === '/',
    meta: {
      title: 'Ainovex Technologies | AI-Powered Software Solutions for Enterprise & SaaS',
      description:
        'Ainovex Technologies delivers AI-powered software, cloud platforms, and digital transformation services for enterprise, government, and SaaS teams.'
    }
  },
  {
    match: (pathname) => pathname === '/about',
    meta: {
      title: 'About Ainovex Technologies | Enterprise Software & Digital Innovation',
      description:
        'Learn how Ainovex Technologies helps global businesses grow through software development, digital innovation, and long-term strategic partnerships.'
    }
  },
  {
    match: (pathname) => pathname === '/services',
    meta: {
      title: 'Software & Digital Services | Ainovex Technologies',
      description:
        'Explore Ainovex Technologies services including web development, mobile apps, SEO, lead generation, UI/UX design, and software quality assurance.'
    }
  },
  {
    match: (pathname) => pathname.startsWith('/digital-marketing'),
    meta: {
      title: 'Digital Marketing Services | Ainovex Technologies',
      description:
        'Ainovex Technologies delivers performance-driven digital marketing strategies that improve visibility, engagement, and measurable business growth.'
    }
  },
  {
    match: (pathname) => pathname.startsWith('/mobile-development'),
    meta: {
      title: 'Mobile App Development | Ainovex Technologies',
      description:
        'Build scalable, user-friendly mobile applications with Ainovex Technologies for iOS, Android, and cross-platform business growth.'
    }
  },
  {
    match: (pathname) => pathname.startsWith('/virtual-assistance'),
    meta: {
      title: 'Virtual Assistance Services | Ainovex Technologies',
      description:
        'Streamline operations with professional virtual assistance from Ainovex Technologies for scheduling, communication, task management, and support.'
    }
  },
  {
    match: (pathname) => pathname.startsWith('/sales-funnel'),
    meta: {
      title: 'Sales Funnel Development | Ainovex Technologies',
      description:
        'Design conversion-focused sales funnels with Ainovex Technologies to capture leads, nurture prospects, and improve business growth.'
    }
  },
  {
    match: (pathname) => pathname.startsWith('/web-development'),
    meta: {
      title: 'Web Development Services | Ainovex Technologies',
      description:
        'Create high-performance websites and scalable web applications with Ainovex Technologies for enterprise, SaaS, and growth-focused brands.'
    }
  },
  {
    match: (pathname) => pathname.startsWith('/seo'),
    meta: {
      title: 'SEO Services | Ainovex Technologies',
      description:
        'Boost search rankings and drive qualified organic traffic with Ainovex Technologies SEO services, technical optimization, and content strategy.'
    }
  },
  {
    match: (pathname) => pathname.startsWith('/ui-ux-design'),
    meta: {
      title: 'UI UX Design Services | Ainovex Technologies',
      description:
        'Craft intuitive, high-converting user experiences with Ainovex Technologies through research, wireframes, prototypes, and modern interface design.'
    }
  },
  {
    match: (pathname) => pathname.startsWith('/graphic-design'),
    meta: {
      title: 'Graphic Design Services | Ainovex Technologies',
      description:
        'Strengthen your brand with graphic design services from Ainovex Technologies including marketing visuals, digital assets, and brand identity design.'
    }
  },
  {
    match: (pathname) => pathname.startsWith('/software-qa'),
    meta: {
      title: 'Software Quality Assurance | Ainovex Technologies',
      description:
        'Improve software reliability and performance with Ainovex Technologies quality assurance services, testing workflows, and defect prevention.'
    }
  },
  {
    match: (pathname) => pathname.startsWith('/lead-generation'),
    meta: {
      title: 'Lead Generation Services | Ainovex Technologies',
      description:
        'Generate high-intent leads with Ainovex Technologies through targeted campaigns, content funnels, SEO strategies, and conversion-focused systems.'
    }
  },
  {
    match: (pathname) => pathname === '/case-studies' || pathname.startsWith('/case-studies/'),
    meta: {
      title: 'Case Studies | Ainovex Technologies',
      description:
        'See how Ainovex Technologies delivers measurable outcomes through AI, software, and digital solutions for growing businesses and enterprise teams.'
    }
  },
  {
    match: (pathname) => pathname === '/reviews',
    meta: {
      title: 'Client Reviews | Ainovex Technologies',
      description:
        'Read client reviews and success stories from businesses that trust Ainovex Technologies for software, marketing, and digital transformation.'
    }
  },
  {
    match: (pathname) => pathname === '/team',
    meta: {
      title: 'Our Team | Ainovex Technologies',
      description:
        'Meet the Ainovex Technologies team of engineers, designers, strategists, and growth experts building premium digital solutions worldwide.'
    }
  },
  {
    match: (pathname) => pathname === '/blog' || pathname.startsWith('/blog/'),
    meta: {
      title: 'Insights & Blog | Ainovex Technologies',
      description:
        'Explore articles, ideas, and expert insights from Ainovex Technologies on software development, AI, digital growth, and enterprise strategy.'
    }
  },
  {
    match: (pathname) => pathname === '/careers' || pathname.startsWith('/careers/'),
    meta: {
      title: 'Careers | Ainovex Technologies',
      description:
        'Join Ainovex Technologies and help build innovative software, AI, and digital experiences for clients across industries and global markets.'
    }
  },
  {
    match: (pathname) => pathname === '/contact',
    meta: {
      title: 'Contact Ainovex Technologies | Let’s Build Something Impactful',
      description:
        'Contact Ainovex Technologies to discuss enterprise software, digital marketing, AI solutions, or your next web and mobile project.'
    }
  },
  {
    match: (pathname) => pathname === '/pricing',
    meta: {
      title: 'Pricing | Ainovex Technologies',
      description:
        'Review Ainovex Technologies pricing guidance and discover solution packages tailored for software, design, marketing, and growth needs.'
    }
  }
];

function updateMetaTag(selector: string, attribute: 'content' | 'href', value: string) {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
}

export default function Seo() {
  const { pathname } = useLocation();
  const config = routeMeta.find((entry) => entry.match(pathname))?.meta ?? defaultConfig;
  const pageUrl = `https://www.ainovextechnologies.com${pathname === '/' ? '' : pathname}`;

  useEffect(() => {
    document.title = config.title;
    updateMetaTag('meta[name="description"]', 'content', config.description);
    updateMetaTag('meta[property="og:title"]', 'content', config.title);
    updateMetaTag('meta[property="og:description"]', 'content', config.description);
    updateMetaTag('meta[property="og:url"]', 'content', pageUrl);
    updateMetaTag('meta[name="twitter:title"]', 'content', config.title);
    updateMetaTag('meta[name="twitter:description"]', 'content', config.description);
    updateMetaTag('link[rel="canonical"]', 'href', pageUrl);
  }, [config, pageUrl]);

  return null;
}
