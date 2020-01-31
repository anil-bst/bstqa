All locale strings are defined here. 
- For each feature create a folder for example `footer`
- Create a locale file using locale-code. `en.locale.ts`
- The locale inside the locale file must extended the predefined interface for the feature in `abstractions/locale`, for example all locales for `footer` must extend the interface `abstractions/locale/footer-locale.interface.ts`
    For example for footer, the `en.locale.ts` file will look like this: 
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

- The locale must be exported in `index.ts`, inside the feature folder. 
    For example, for footer, the `index.ts` file will look like this:

```ts 
import { footerLocaleEn } from './en.locale';
import { ILocales, IFooterLocale } from '@app/abstractions/interfaces';
export const footerLocales: ILocales<IFooterLocale> = {
  en: footerLocaleEn,
};
```