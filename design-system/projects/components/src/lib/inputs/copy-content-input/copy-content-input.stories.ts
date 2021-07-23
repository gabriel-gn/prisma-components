import {CopyContentInputComponent} from './copy-content-input.component';
import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';

export default {
  title: 'Prisma/Stories/CopyContentInput',
  component: CopyContentInputComponent,
} as Meta;

export const Template: Story<CopyContentInputComponent> = (args) => ({
  props: args,
  template: `
    <pm-copy-content-input
      [text]="text"
      [disabled]="disabled"
    >
      Conteúdo
    </pm-copy-content-input>
  `
});

export const defaultArgs = {
  disabled: false,
  text: ''
};

export const DefaultCopyContentInput = Template.bind({});
DefaultCopyContentInput.args = {
  ...defaultArgs,
  text: 'Some input value',
};
