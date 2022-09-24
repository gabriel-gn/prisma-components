import {SidebarComponent} from './sidebar.component';
import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';

export default {
  title: 'Prisma/Stories/Sidebar',
  component: SidebarComponent,
} as Meta;

export const Template: Story<SidebarComponent> = (args) => ({
  props: args,
  template: `
    <pm-sidebar
        [showBackButton]="showBackButton"
        [sidebarEntries]="sidebarEntries"
    >
        <p>Conteúdo aqui! algo como router-outlet</p>
        <ng-container *ngFor="let _ of [].constructor(20)">
            <p>.</p>
        </ng-container>
    </pm-sidebar>
  `
});

export const defaultArgs = {
  showBackButton: false,
  sidebarEntries: []
};

export const DefaultSidebar = Template.bind({});
DefaultSidebar.args = {
  ...defaultArgs,
  sidebarEntries: [
    {
      routerLink: `/`,
      label: 'Home',
      translate: '',
      iconClass: 'uil uil-2x uil-home',
      badge: '1',
    },
    {
      label: 'Decks',
      translate: '',
      iconClass: 'uil uil-2x uil-swatchbook',
      children: [
        {
          label: 'Deck Library',
          routerLink: `/`,
          queryParams: {tab: 'library'},
          iconClass: 'uil uil-xl uil-apps'
        },
        {
          label: 'Meta Decks',
          routerLink: `/`,
          queryParams: {tab: 'meta'},
          iconClass: 'uil uil-xl uil-fire'
        },
        {
          label: 'Trending Decks',
          routerLink: `/`,
          queryParams: {tab: 'trending'},
          iconClass: 'uil uil-xl uil-arrow-growth'
        },
        {
          label: 'Favorites',
          routerLink: `/favorites`,
          iconClass: 'uil uil-xl uil-favorite'
        },
      ]
    },
    {
      label: 'Cards',
      translate: '',
      iconClass: 'uil uil-2x uil-layers',
      children: [
        {
          label: 'Card Gallery',
          routerLink: `/cards`,
          iconClass: 'uil uil-xl uil-apps'
        },
      ]
    },
    {
      label: 'Preferences',
      iconClass: 'uil uil-2x uil-setting',
      action: () => {console.log('Alguma coisa!')}
    },
  ]
} as Partial<SidebarComponent>;
