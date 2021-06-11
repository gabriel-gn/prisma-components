import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {CopyContentInputComponent} from '../../projects/components/src/lib/copy-content-input/copy-content-input.component';
import {CopyContentInputModule} from '../../projects/components/src/lib/copy-content-input/copy-content-input.module';

export default {
  title: 'Prisma/Inputs/Copy Content Input',
  component: CopyContentInputComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CopyContentInputModule,
      ],
    }),
  ],
  argTypes: {
    text: {control: 'text'},
    disabled: {control: 'boolean'}
    // we need to override here since in Angular it could be null as well and therefore it would become an ambigious data type for storybook
  }
} as Meta;

const Template: Story<CopyContentInputComponent> = (args: CopyContentInputComponent) => ({
  component: CopyContentInputComponent,
  props: args,
  template: `
    <pm-copy-content-input
        [text]="text"
        [disabled]="disabled"
    >
        Conteúdo
    </pm-copy-content-input>`
});

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  text: 'Some input value',
  disabled: true
};
