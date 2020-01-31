This folder should be used to create Interfaces to implement locales for specfic Modules, and then all Locales should follow this specific type, to be extended as a generic of locales.interface.ts

 - For example if you need to create locales for Footer, define all the keys for footer in an interface `footer-locale.interface.ts` with a sample class like this. 

 ```ts 
interface IFooterMenuItem extends IFooterItem {
  target: string;
  submenu?: IFooterMenuItem;
}

interface IFooterItem {
  href: string;
  name: string;
  [key: string]: any;
}

export interface IFooterLocale {
  id: string;
  description: {
    menuBar: IFooterMenuItem[];
    socialLinks: IFooterItem[];
    homeURL: string;
    copyRight: string;
    copyRightData: IFooterItem[];
    [key: string]: any;
  };
  [key: string]: any;
}
```

This interface can be used as type in your locale  as 

```ts
import { IFooterLocale } from '@app/abstractions';
export const footerLocaleEn: IFooterLocale = {
  id: 'footerLinks',
  description: {
    menuBar: [
      {
        href: 'https://www.bluestacks.com/apps.html',
        name: 'Android Games',
        target: '_self',
        subMenu: [
          {
            name: 'Action',
            href: 'https://www.bluestacks.com/apps/action.html',
            target: '_self',
          },
        ],
      },
      {
        name: 'Streaming',
        href: 'https://www.bluestacks.com/get-involved-with-streaming.html',
        target: '_self',
        subMenu: [
          {
            name: 'Streamer Academy',
            href: 'https://www.bluestacks.com/streamer-academy.html',
            target: '_self',
          },
        ],
      },
      {
        name: 'About',
        href: 'https://www.bluestacks.com/about-us.html',
        target: '_self',
        subMenu: [],
      },
      {
        name: 'BlueStacks',
        href: 'https://www.bluestacks.com/bluestacks-4.html',
        target: '_self',
        subMenu: [
          {
            name: 'How Does Bluestacks Work?',
            href: 'https://www.bluestacks.com/how-does-bluestacks-work.html',
            target: '_self',
          },
          {
            name: 'Android on PC',
            href: 'https://www.bluestacks.com/using-android-on-pc.html',
            target: '_self',
          },
        ],
      },
      {
        name: 'Blog',
        href: '/blog.html',
        target: '_self',
        subMenu: [],
      },
      {
        name: 'Support',
        href: 'https://support.bluestacks.com/',
        target: '_self',
        subMenu: [
          {
            name: 'Updates',
            href:
              'https://support.bluestacks.com/hc/en-us/articles/360021469391-Release-Notes',
            target: '_blank',
          },
        ],
      },
      {
        href: 'https://www.bluestacks.com/about-us/contact-us.html',
        name: 'Contact Us',
        target: '_self',
        subMenu: [],
      },
      {
        name: 'Enterprise',
        href: 'https://www.bluestacks.com/enterprise.html',
        target: '_self',
        subMenu: [],
      },
      {
        name: 'Become an Affiliate',
        href: 'https://www.bluestacks.com/affiliate.html',
        target: '_self',
        subMenu: [
          {
            name: 'F.A.Q',
            href: 'https://www.bluestacks.com/affiliate-faqs.html',
            target: '_blank',
          },
        ],
      },
    ],
    socialLinks: [
      {
        name: 'discord',
        href: 'https://discord.gg/54WPezP',
        isDiscord: true,
      },
      {
        name: 'Reddit',
        href: 'https://www.reddit.com/r/BlueStacks/',
        isReddit: true,
      },
      {
        name: 'facebook',
        href: 'https://www.facebook.com/BlueStacksInc',
        isFb: true,
      },
      {
        name: 'twitter',
        href: 'https://twitter.com/bluestacksinc',
        isTwitter: true,
      },
    ],
    homeURL: 'https://www.bluestacks.com',
    copyRight:
      '© 2019 BlueStacks name and logo are registered trademarks of Bluestack Systems, Inc.',
    copyRightData: [
      {
        name: 'Terms and Privacy',
        href: 'https://www.bluestacks.com/terms-and-privacy.html',
      },
      {
        name: 'Copyright Dispute Policy',
        href: 'https://www.bluestacks.com/copyright-dispute-policy.html',
      },
      {
        name: 'EU Privacy',
        href: 'https://www.bluestacks.com/terms-and-privacy.html#eu-privacy',
      },
    ],
  },
};
```