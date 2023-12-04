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
    phone: '+32475715926',
    email: 'stefytasnadi@yahoo.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1qRhU4ttO1u1_4LsYDQ5g2l1WLmQ6j5tw/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML, CSS, JS, PHP',
    'Icons8 Lunacy',
    'Prototyping',
    'Mockups',
    'Usability Testing',
    'C#',
    'Python',
    'User Research',
    'Git',
    'Adobe Creative Suite',
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
      degree: 'College',
      from: '2020',
      to: '2022',
    },
    {
      institution: 'EFP, Brussels',
      degree: 'Apprenticeship',
      from: '2023',
      to: 'Current',
    }
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Mobile Apps Designs',
      description:
        'Designed multiple common mobile apps, some of the types are: Music, Video, Health & More',
      imageUrl: 'https://inventionland.com/wp/wp-content/uploads/2019/04/Inventionland-iPhone-with-apps-1.jpg',
      link: 'https://example.com',
    },
    {
      title: 'Desktop Apps Designs',
      description:
        'Mainly created software models for Windows, some examples are: Document Viewers/Editors, Task Management, Fitness & More',
      imageUrl: 'https://cdn1.iconfinder.com/data/icons/jetflat-multimedia-vol-2/90/004_112_windows_app_application_window-512.png',
      link: 'https://example.com',
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
