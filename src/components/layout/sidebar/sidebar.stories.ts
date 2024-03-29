import {SidebarComponent} from './sidebar.component';
import {Meta, Story} from '@storybook/angular';
import {of} from "rxjs";

export default {
  title: 'Prisma/Stories/Sidebar',
  component: SidebarComponent,
} as Meta;

export const Template: Story<SidebarComponent> = (args) => ({
  props: args,
  template: `
    <pm-sidebar
        [showBackButton]="showBackButton"
        [showNextButton]="showNextButton"
        [nextButtonAction]="nextButtonAction"
        [label]="label"
    >
        <pm-sidebar-entry [entry]="sidebarEntries[0]">
            <pm-sidebar-entry [entry]="sidebarEntries[3]">
                <pm-sidebar-entry [entry]="sidebarEntries[4]"></pm-sidebar-entry>
            </pm-sidebar-entry>
        </pm-sidebar-entry>
        <pm-sidebar-entry [entry]="sidebarEntries[2]"></pm-sidebar-entry>
        <pm-sidebar-entry [entry]="sidebarEntries[3]"></pm-sidebar-entry>
        <p>Conteúdo aqui! algo como router-outlet</p>
        <ng-container *ngFor="let _ of [].constructor(20)">
            <p>.</p>
        </ng-container>
    </pm-sidebar>
  `
});

export const defaultArgs = {
  showBackButton: false,
  showNextButton: false,
  nextButtonAction: undefined,
  sidebarEntries: [],
  label: of(''),
};

export const DefaultSidebar = Template.bind({});
DefaultSidebar.args = {
  ...defaultArgs,
  label: of('Sidebar'),
  showBackButton: true,
  showNextButton: true,
  nextButtonAction: () => { console.log('aaaa') },
  sidebarEntries: [
    {
      routerLink: `/`,
      label: 'Home',
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
          routerLink: `/`,
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
          routerLink: `/`,
          iconClass: 'uil uil-xl uil-apps',
          children: [
            {
              label: 'Card Gallery',
              routerLink: `/`,
              iconClass: 'uil uil-xl uil-apps',
              children: [
                {
                  label: 'Card Gallery',
                  routerLink: `/`,
                  iconClass: 'uil uil-xl uil-apps'
                },
              ]
            },
          ]
        },
      ]
    },
    {
      label: 'Preferences',
      iconClass: 'uil uil-2x uil-setting',
      action: () => {console.log('Alguma coisa!')}
    },
    {
      label: 'Settings',
      iconClass: 'uil uil-2x uil-setting',
      action: () => {console.log('Alguma coisa2!')}
    },
  ]
} as Partial<SidebarComponent>;
