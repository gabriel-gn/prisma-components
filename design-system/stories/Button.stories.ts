import {ButtonComponent} from '../projects/components/src/lib/button/button.component';
import {Meta, Story} from '@storybook/angular';

export default {
  title: 'Prisma/Buttons',
  component: ButtonComponent,
  argTypes: {
    label: {control: 'text'},
    type: {control: 'select'},
    // we need to override here since in Angular it could be null as well and therefore it would become an ambigious data type for storybook
  }
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
  template: `<pm-button [type]="type">Botão</pm-button>`
});

export const Default = Template.bind({});
Default.args = {
  type: 'default'
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary'
};


// export const Default = () => ({
//   title: 'Botões',
//   component: ButtonComponent,
//   props: {
//     label: '',
//   },
//   argTypes: {
//     label: {control: 'text'},
//     // we need to override here since in Angular it could be null as well and therefore it would become an ambigious data type for storybook
//   },
//   template: `<pm-button>Botão</pm-button>`,
// });
