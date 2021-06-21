import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from '../projects/components/src/lib/card/card.module';
import {CardComponent} from '../projects/components/src/lib/card/card.component';

export default {
  title: 'Prisma/Cards',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CardModule,
        BrowserAnimationsModule
      ],
    }),
  ],
  argTypes: {
    // showIndex: {control: 'boolean'},
  }
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  component: CardComponent,
  props: args,
  template: `
    <pm-card>
      conteudo
    </pm-card>`
});

export const DefaultCard = Template.bind({});
DefaultCard.args = {
};
