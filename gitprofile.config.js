// gitprofile.config.js

const config = {
  github: {
    username: 'aredrayy', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'stefan-tasnadi',
    twitter: 'aredray',
    youtube: 'aredray', // example: 'pewdiepie'
    /*
    behance: '',
    medium: 'arifszn',
    dev: 'arifszn',
    */
    website: 'https://bit.ly/aredray',
    email: 'stefytasnadi@yahoo.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1qRhU4ttO1u1_4LsYDQ5g2l1WLmQ6j5tw/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML, CSS, JS, PHP',
    'Figma',
    'Prototyping',
    'Mockups',
    'Usability Testing',
    'C#',
    'Python',
    'User Research',
    'Git',
    'Adobe Creative Suite',
    'UX Laws'
  ],
  experiences: [
    {
      company: 'ECSEL JU',
      position: 'Software Developper',
      from: 'June 2018',
      to: 'July 2018',
      companyLink: 'https://www.kdt-ju.europa.eu/',
    },
    {
      company: 'LChocolat',
      position: 'Developer, Designer',
      from: '2018',
      to: 'Current',
      companyLink: 'http://lchocolat.com/',
    },
  ],
  certifications: [
    {
      name: 'Google UX Design',
      body: 'Provided Online By Coursera',
      year: 'June 2023',
      link: 'https://drive.google.com/file/d/1kid8qAcuFtmJRz1GOBLggwQ-pjTU1Nhg/view?usp=sharing'
    },
  ],
  education: [
    {
      institution: 'European School of Brussels IV, Brussels',
      degree: 'High School',
      from: '2013',
      to: '2020',
    },
    {
      institution: 'UCLouvain, Louvain-La-Neuve',
      degree: 'Bachelor',
      from: '2020',
      to: '2023',
    },
    {
      institution: 'EFP, Brussels',
      degree: 'Apprenticeship',
      from: '2023',
      to: 'Current',
    },
    {
      institution: 'UBI, Brussels',
      degree: 'Bachelor',
      from: '2024',
      to: 'Current',
    }
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'LChocolat',
      description:
        'Chocolate store website, made with ❤️ Static website showcasing: products & shop previews as well as an online shop',
      imageUrl: 'https://lchocolat.com/img/favicon.png',
      link: 'https://lchocolat.com/',
    },
    {
      title: 'aredray',
      description:
        'Cool simple static website 🌐 showcasing socials & videos for a small YouTube channel: aredray',
      imageUrl: 'https://i.ibb.co/8gxkxhP/round-logo.png',
      link: 'https://bit.ly/aredray',
    },
    {
      title: 'vystex',
      description:
        'NEW Forum community, for music producers 🎹 with the purpose of showcasing creation related resources from anyone',
      imageUrl: 'https://vystex.com/uploads/monthly_2024_06/Logo.png.09dda463e3d15d66713521a21164b860.png',
      link: 'https://vystex.com/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'aredray', // to hide blog section, keep it empty
    limit: 5, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'black',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  /*footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,*/
};

export default config;
