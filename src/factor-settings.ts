export default {
  /**
   * Add custom font to app
   */
  headTags: {
    font:
      '<link href="https://fonts.googleapis.com/css?family=Maven+Pro:400,600,700&display=swap" rel="stylesheet" />',
  },
  /**
   * Tailwind CSS Config
   */
  tailwind: {
    config: require('./tailwind.config.js'),
    directives: require('./tailwind.css'),
  },
  metatags: {
    defaultTitle: 'Welcome',
    titleTemplate: '%s - Prodigy Logistics Ltd',
  },

  /**
   * Global Theme Settings
   */
  site: {
    components: {
      header: (): Promise<any> => import('./header.vue'),
      footer: (): Promise<any> => import('./footer.vue'),
    },
    // logo: require('./img/logo-zeno.svg'),
    // logoInverse: require('./img/logo-zeno-inverse.svg'),
    logo: "<h1 class='text-2xl font-bold text-blue-900'>The Prodigy Ltd.</h1>",
    logoInverse:
      "<h1 class='text-2xl bg-white bg-opacity-75 p-4 rounded-lg font-bold text-blue-900'>The Prodigy Ltd.</h1>",
    logoText: "<h1 class='text-2xl font-bold'>The Prodigy Ltd.</h1>",
    nav: [
      {
        _item: 'home',
        path: '/',
        name: 'Home',
      },
      {
        _item: 'services',
        path: '/#services',
        name: 'Our Services',
      },
      {
        _item: 'about',
        path: '/about',
        name: 'About',
      },
      {
        _item: 'blog',
        path: '/blog',
        name: 'Blog',
      },
      {
        _item: 'contact',
        path: '/contact',
        name: 'Contact',
      },
      {
        _item: 'dashboard',
        path: '/dashboard',
        name: 'Dashboard &rarr;',
      },
    ],
    /**
     * Copy for the call to action on the home page, pricing page, and about page.
     */
    cta: {
      title: 'Want a fast and safe delivery?',
      content: `We deliver to you fast and safely`,
      buttons: [
        {
          _item: 'contact',
          link: '/contact',
          text: 'Contact Us',
          classes: 'btn bg-gray-100 rounded text-blue-500 hover:bg-gray-300',
        },
      ],
      figure: require('./img/cloud-with-shadow.svg'),
      footerFigureAlt: 'Cloud',
    },
  },
  /**
   * Copy for the home page template.
   */
  home: {
    component: (): Promise<any> => import('./home/v-home.vue'),
    intro: {
      component: (): Promise<any> => import('./home/intro.vue'),
      title: 'Welcome to The Prodigy Logistics Ltd.',
      content:
        'The Prodigy Logistics Limited is an independent enterprise situated in Lagos. We have been in the business for the past 3 years and have always given our clients a happy service.',
      buttons: [
        {
          _item: 'contact',
          link: 'tel:+2347051997737',
          text: 'Call Us',
          classes: 'btn mr-4 text-blue-100 bg-blue-500 hover:bg-blue-600',
        },
        {
          _item: 'pricing',
          link: 'mailto:test@test.com',
          text: 'Email Us',
          classes:
            'btn btn-ol border-blue-700 ml-0 mt-4 md:mt-0 hover:text-blue-500 hover:border-blue-500',
        },
      ],
      figure: require('./img/city.jpg'),
    },
    logos: {},
    section3: {
      id: 'services',
      items: [
        {
          _item: 'trucking',
          icon: require('./img/truck.svg'),
          title: 'Trucking & Haulage',
          content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
        },
        {
          _item: 'home_mover',
          icon: require('./img/home.svg'),
          title: 'Home Movers',
          content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
        },
        {
          _item: 'door_deliveries',
          icon: require('./img/door.svg'),
          title: 'Door to Door Deliveries',
          content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
        },
        {
          _item: 'dispatch',
          icon: require('./img/rider.svg'),
          title: 'Dispatch Rider',
          content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
        },
        {
          _item: 'clearing_forwarding',
          icon: require('./img/forward.svg'),
          title: 'Clearing and Forwarding',
          content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
        },
        {
          _item: 'shipping',
          icon: require('./img/fleet.svg'),
          title: 'Shipping of raw materials',
          content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
        },
        {
          _item: 'Distribution',
          icon: require('./img/toor.svg'),
          title: 'Distribution',
          content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
        },
        {
          _item: 'Warehousing',
          icon: require('./img/security.svg'),
          title: 'Warehousing',
          content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
        },
        {
          _item: 'quick_deliveries',
          icon: require('./img/delivery.svg'),
          title: 'Quick deliveries of end-products to consumers',
          content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
        },
        {
          _item: 'fleet_management',
          icon: require('./img/manage.svg'),
          title: 'Fleet management',
          content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
        },
        {
          _item: 'order_fulfillment',
          icon: require('./img/order.svg'),
          title: 'Order fulfillment',
          content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
        },
        {
          _item: 'order_fulfillment',
          icon: require('./img/network.svg'),
          title: 'Logistics network design',
          content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
        },
        {
          _item: 'order_fulfillment',
          icon: require('./img/manage.svg'),
          title: 'Inventory management',
          content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
        },
        {
          _item: 'order_fulfillment',
          icon: require('./img/plan.svg'),
          title: 'Supply/demand planning',
          content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
        },
        {
          _item: 'order_fulfillment',
          icon: require('./img/truck.svg'),
          title: 'Management of third party logistics services providers',
          content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
        },
      ],
    },
    section4: {
      id: 'software-as-a-service',
      pretitle: 'Further, Faster & Safer',
      title: '',
      content: `<p>The Prodigy Logistics Limited is an independent enterprise situated in Lagos. We have been in the business for the past 3 years and have always given our clients a happy service.</p>`,
      buttons: [
        {
          _item: 'about',
          link: '/about',
          text: 'More About Us',
          classes:
            'factor-link factor-link btn bg-blue-500 rounded text-white hover:bg-blue-600',
        },
      ],
      figure: (): Promise<any> => import('./el/figure-devops.vue'),
    },
    // section5: {
    //   id: 'software-as-code',
    //   pretitle: 'Open Source',
    //   title: 'Product A + Product B = ',
    //   titleIcon: require('./img/custom-heart.svg'),
    //   items: [
    //     {
    //       _item: 'producta',
    //       image: require('./img/logo-producta.svg'),
    //       alt: 'Product A',
    //       content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`,
    //     },
    //     {
    //       _item: 'productb',
    //       image: require('./img/logo-productb.svg'),
    //       alt: 'Product B',
    //       content: `Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.`,
    //     },
    //   ],
    //   syntaxTitle: 'mycode.ts',
    //   syntax: (): Promise<any> => import('./el/figure-infrastructure.vue'),
    // },
    // testimonials: {
    //   pretitle: 'Success Stories',
    //   title: 'Our customers love what we do!',
    //   items: [
    //     {
    //       _item: 'testimonial_1',
    //       content: `@Zeno designed and fully managed our migration to #productA and on-premises enterprise deployments. They've been absolutely fantastic!`,
    //       image: require('./img/member4.jpg'),
    //       author: 'Kate Brennan',
    //       info: 'CEO, Lorem ipsum',
    //     },
    //     {
    //       _item: 'testimonial_2',
    //       content: `@Zeno designed and fully managed our migration to #productB and on-premises enterprise deployments. They've been absolutely fantastic!`,
    //       image: require('./img/member3.jpg'),
    //       author: 'Sebastian Hodges',
    //       info: 'CEO, SedLaudantium',
    //     },
    //   ],
    // },
    meta: {
      title: 'Home',
      description:
        'The Prodigy Logistics Limited is an independent enterprise situated in Lagos. We have been in the business for the past 3 years and have always given our clients a happy service.',

      image: require('./img/city.jpg'),
    },
  },
  /**
   * Settings for the about page template
   */
  about: {
    hero: {
      pretitle: '',
      title: 'About Us',
      content: `We are independent enterprise situated in Lagos. We have been in the business for the past 3 years and have always given our clients a happy service. We can be located at No. 81, Adeshina Street,Ijeshatedo, Surulere, Lagos`,
    },
    valuesImage1: require('./img/service.jpg'),
    // valuesImage2: '',
    valuesTitle: 'Our Motto is: Further, Faster & Safer;',
    values: [
      {
        _item: 'further',
        title: 'Further',
        content: 'We are far more ready to work with you everytime.',
      },
      {
        _item: 'faster',
        title: 'Faster',
        content: 'We are faster than your expectation, always ready to serve.',
      },
      {
        _item: 'safer',
        title: 'Safer',
        content:
          'We are safe to work with, no good lost or damage. We are safer.',
      },
    ],
    team: {
      /**
       * The team layout has "grid" or "list" options
       */
      layout: 'list',
      pretitle: 'Meet the Team',
      title: `The Team`,
      members: [
        {
          _item: 'member_1',
          photo: require('./img/member1.jpg'),
          title: 'CEO',
          name: 'Oluwaseun Adesile',
          content: 'Details about the CEO goes here',
          links: [
            {
              _item: 'link_1',
              path: 'https://www.linkedin.com/',
              icon: 'fab fa-linkedin',
              target: '_blank',
            },
            {
              _item: 'link_2',
              path: 'https://github.com/',
              icon: 'fab fa-github',
              target: '_blank',
            },
            {
              _item: 'link_3',
              path: 'https://angel.co/',
              icon: 'fab fa-angellist',
              target: '_blank',
            },
          ],
        },
        {
          _item: 'member_2',
          photo: require('./img/member2.jpg'),
          title: 'Co-Founder',
          name: 'Zeno Elea',
          content:
            'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit',
        },
        {
          _item: 'member_3',
          photo: require('./img/member3.jpg'),
          title: 'Managing Partner',
          name: 'Zeno Elea',
          content:
            'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit',
        },
      ],
    },
    meta: {
      title: 'About Us',
      description:
        'The Prodigy Logistics Limited is an independent enterprise situated in Lagos. We have been in the business for the past 3 years and have always given our clients a happy service.',
      image: require('./img/city.jpg'),
    },
  },
  // Pricing Page
  // pricing: {
  //   hero: {
  //     pretitle: 'Pricing that scales with your business.',
  //     title: `Awesome Plans`,
  //     content: 'Choose the plan that suits your needs.',
  //   },
  //   packages: [
  //     {
  //       classes: 'md:mt-6',
  //       name: 'Starter',
  //       description:
  //         'All the basics for businesses that are just getting started.',
  //       price: `$199 <span class="text-base">per month</span>`,
  //       list: [
  //         {
  //           content: 'At vero eos et accusamus',
  //         },
  //         {
  //           content: 'Et iusto odio dignissimos',
  //         },
  //         {
  //           content: `Ducimus qui blanditiis`,
  //         },
  //         {
  //           content: 'Lorem ipsum dolor sit',
  //         },
  //         {
  //           content: 'Omnis iste natus error sit',
  //         },
  //       ],
  //       buttonLink: '/contact',
  //       buttonText: 'Contact Us',
  //       buttonClasses:
  //         'btn btn-ol border-blue-700 hover:text-blue-500  hover:border-blue-500',
  //     },
  //     {
  //       name: 'Pro',
  //       description:
  //         'Better insights for growing businesses that want more customers.',
  //       price: `$499 <span class="text-base">per month</span>`,
  //       list: [
  //         {
  //           content: 'Voluptatem accusantium',
  //         },
  //         {
  //           content: 'Omnis iste natus error',
  //         },
  //         {
  //           content: 'Sed ut perspiciatis unde',
  //         },
  //         {
  //           content: 'Lorem ipsum dolor sit',
  //         },
  //         {
  //           content: 'Incididunt ut labore et dolore magna aliqua',
  //         },
  //       ],
  //       buttonLink: '/contact',
  //       buttonText: 'Contact Us',
  //       buttonClasses: 'btn text-blue-100 bg-blue-500 hover:bg-blue-600',
  //     },
  //     {
  //       classes: 'md:mt-6',
  //       name: 'Business',
  //       description: 'Advanced features for pros who need more customization.',
  //       price: `$899 <span class="text-base">per month</span>`,
  //       list: [
  //         {
  //           content: 'Nam libero tempore',
  //         },
  //         {
  //           content: 'Soluta nobis est eligendi',
  //         },
  //         {
  //           content: `Optio cumque nihil`,
  //         },
  //         {
  //           content: 'Lorem ipsum dolor sit',
  //         },
  //         {
  //           content: 'Consectetur adipiscing elit amet',
  //         },
  //       ],
  //       buttonLink: '/contact',
  //       buttonText: 'Contact Us',
  //       buttonClasses:
  //         'btn btn-ol border-blue-700 hover:text-blue-500  hover:border-blue-500',
  //     },
  //   ],
  //   packagesFooter: '* 10 day money back guarantee',
  //   faq: {
  //     title: 'FAQs',
  //     questions: [
  //       {
  //         _item: 'q1',
  //         title: 'Can I buy a lower tier and upgrade later?',
  //         content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
  //       },
  //       {
  //         _item: 'q2',
  //         title: "What if I don't like it?",
  //         content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
  //       },
  //       {
  //         _item: 'q3',
  //         title: 'Can I cancel at anytime?',
  //         content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
  //       },
  //       {
  //         _item: 'q4',
  //         title: 'What happens if I go over my plans included hours?',
  //         content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
  //       },
  //       {
  //         _item: 'q5',
  //         title: 'Who is this for?',
  //         content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
  //       },
  //       {
  //         _item: 'q6',
  //         title: 'Are there any discounts available?',
  //         content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
  //       },
  //     ],
  //   },
  //   meta: {
  //     title: 'Pricing - Factor Zeno Theme',
  //     description:
  //       'A minimal, personal or portfolio theme. Ideal for entrepreneurs or individuals of multiple creative professions.',
  //     image: require('./img/logo-zeno.jpg'),
  //   },
  // },
  // Contact Page
  contact: {
    hero: {
      pretitle: 'Contact Us',
      title: 'Let us know how we can help.',
      content: 'Fill out the form and we will be in touch shortly.',
    },
    meta: {
      title: 'Contact Us',
      description: 'Fill out the form and Let us know how we can help.',
      image: require('./img/city.jpg'),
    },
  },
  // Contact form plugin settings
  contactForm: {
    submit: {
      btn: 'm-0',
      size: 'm-0',
      text: 'Contact',
    },
    inputFormat: 'vertical',
    confirm: {
      title: 'Submitted Successfully!',
      subTitle: 'We’ll get back to you as soon as possible.',
    },
    layout: [
      {
        label: 'Name',
        _id: 'name',
        inputType: 'text',
        placeholder: 'Full Name',
        required: true,
      },
      {
        label: 'Email Address',
        _id: 'email',
        inputType: 'email',
        placeholder: 'name@demo.com',
        required: true,
      },
      {
        label: 'Message',
        _id: 'message',
        inputType: 'textarea',
        placeholder: 'how can we help?',
        required: true,
      },
    ],
  },
  // Blog plugin and custom blog Settings
  blog: {
    pretitle: '',
    title: 'Our Blog',
    content:
      'Welcome to The Prodigy Logistic Limited. Blog, where we share updates, announcements, and articles from our team',
    indexRoute: '/blog',
    postRoute: '/blog',
    limit: 6,
    returnLinkText: 'Back',
    notFound: {
      title: 'No Posts',
      subTitle: "Couldn't find any blog posts.",
    },
    promo: {
      use: false,
      pretitle: 'The Promo Section',
      title: 'Any Title you Want',
      content: 'If You want promo',
      button: {
        link: '/about',
        text: 'Learn More',
        classes: 'btn bg-gray-100 rounded text-blue-500 hover:text-blue-600',
      },
    },
    components: {
      blogIndex: (): Promise<any> => import('./blog/blog-index.vue'),
      blogSingle: (): Promise<any> => import('./blog/blog-single.vue'),
      featuredImage: (): Promise<any> => import('./blog/el-featured-image.vue'),
      title: (): Promise<any> => import('./blog/widget-title.vue'),
      date: (): Promise<any> => import('./blog/widget-date.vue'),
      author: (): Promise<any> => import('./blog/widget-author.vue'),
      singleHeader: (): Promise<any> => import('./blog/el-single-header.vue'),
      entry: (): Promise<any> => import('./blog/widget-entry.vue'),
      social: (): Promise<any> => import('./blog/widget-social.vue'),
      pagination: (): Promise<any> => import('./blog/widget-pagination.vue'),
    },
    layout: {
      index: ['featuredImage', 'date', 'title', 'author'],
      single: ['singleHeader', 'entry', 'social'],
    },
    metatags: {
      index: {
        title: 'Blog',
        description:
          'Get new updates, announcements, and articles from the prodigy limited team',
        image: require('./img/city.jpg'),
      },
    },
  },
  // Footer
  footer: {
    nav: [
      {
        _item: 'home',
        path: '/',
        name: 'Home',
      },
      {
        _item: 'about',
        path: '/about',
        name: 'About',
      },
      {
        _item: 'about',
        path: '/blog',
        name: 'Blog',
      },
      {
        _item: 'contact',
        path: '/contact',
        name: 'Contact',
      },
      {
        _item: 'twitter',
        path: 'https://twitter.com/',
        icon: 'fab fa-twitter',
        target: '_blank',
      },
    ],
    left: `Built by <a href='https://eliteaddy.com/' target='_blank'>EliteAddy Inc.</a>`,
    right: `&copy ${new Date().getFullYear()} <a href='/'>The Prodigy Logistics Ltd</a>`, // Empty when blank (e.g. right: '') or Dynamically added if removed/commented.
    figure: require('./img/cloud-with-shadow.svg'),
    figureAlt: 'Cloud',
  },
};
