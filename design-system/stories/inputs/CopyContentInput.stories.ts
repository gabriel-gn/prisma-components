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
    text: {control: 'text'}
    // we need to override here since in Angular it could be null as well and therefore it would become an ambigious data type for storybook
  }
} as Meta;

const Template: Story<CopyContentInputComponent> = (args: CopyContentInputComponent) => ({
  component: CopyContentInputComponent,
  props: args,
  template: `
    <pm-copy-content-input
        [text]="textToCopy"
    >
        Conteúdo
    </pm-copy-content-input>`
});

export const CopyContentInput = Template.bind({});
CopyContentInput.args = {
  textToCopy: 'Some input value'
};
