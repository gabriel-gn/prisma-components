import {CopyContentInputComponent} from './copy-content-input.component';
import {Meta, Story} from '@storybook/angular';
import {MainColors} from '../../../models/colors';
import {Sizes} from '../../../models/sizes';

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
      [copyCallback]="copyCallback"
      [fillHeight]="fillHeight"
      [btnColor]="btnColor"
      [borderRadius]="borderRadius"
    >
    </pm-copy-content-input>
  `
});

export const defaultArgs = {
  disabled: false,
  text: '',
  copyCallback: undefined,
  fillHeight: false,
  btnColor: MainColors.primary,
  borderRadius: Sizes.md
};

export const DefaultCopyContentInput = Template.bind({});
DefaultCopyContentInput.args = {
  ...defaultArgs,
  text: 'Some input value',
} as Partial<CopyContentInputComponent>;
