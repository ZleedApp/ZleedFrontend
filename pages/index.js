import Button from '@/components/Button';

import {
  HomeIcon,
  RadioIcon,
  Tv,
  Bell,
  Star,
  Wallet2,
  Settings,
  Languages,
  SwatchBook,
  Cookie,
  LogOut
} from 'lucide-react';
import Dropdown from '@/components/Dropdown';

export default function Home() {
  return (
    <>
      <h1>Zleed</h1>

      <Button icon={RadioIcon} type="secondary">
        Studio
      </Button>

      <Button type="primary">
        Home
      </Button>

      <Dropdown items={[ { type: 'link', icon: Tv, href: '/', name: 'My Channel' }, { type: 'separator' }, { type: 'link', icon: Bell, href: '/', name: 'Notifications' }, { type: 'separator' }, { type: 'link', icon: Star, href: '/', name: 'Subscriptions' }, { type: 'link', icon: Wallet2, href: '/', name: 'Wallet' }, { type: 'separator' }, { type: 'link', icon: Settings, href: '/', name: 'Settings' }, { type: 'link', icon: Languages, href: '/', name: 'Language' }, { type: 'link', icon: SwatchBook, href: '/', name: 'Theme' }, { type: 'link', icon: Cookie, href: '/', name: 'Cookie Choices' }, { type: 'separator' }, { type: 'link', icon: LogOut, href: '/', name: 'Log Out' } ]} id="profileDropdown" picture={'https://cdn.zleed.tv/brand/logo_dark.svg'}>TheClashFruit</Dropdown>
      <Dropdown items={[ { type: 'link', icon: HomeIcon, href: '/', name: 'Home' } ]} id="generic">generic dropdown</Dropdown>
    </>
  );
}
