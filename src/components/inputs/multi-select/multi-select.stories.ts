import {MultiSelectComponent, MultiSelectOption} from './multi-select.component';
import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';
import {Sizes} from '../../../models/sizes';
import {delay, Observable, of} from "rxjs";

export default {
  title: 'Prisma/Stories/MultiSelect',
  component: MultiSelectComponent,
} as Meta;

export const Template: Story<MultiSelectComponent> = (args) => ({
  props: args,
  template: `
    <pm-multi-select
        [options]="options"
        [placeholder]="placeholder"
        [borderRadius]="borderRadius"
        [roundedThumbnail]="roundedThumbnail"
        [limit]="limit"
        [selectedOptions]="selectedOptions"
        [observableInput]="observableInput"
        [observableDebounce]="observableDebounce"
    >
    </pm-multi-select>
  `
});

export const defaultArgs = {
  options: [],
  placeholder: '',
  borderRadius: Sizes.md,
  roundedThumbnail: true,
  limit: 0,
  selectedOptions: [],
  observableInput: undefined,
  observableDebounce: 100,
};

export const DefaultMultiSelect = Template.bind({});
DefaultMultiSelect.args = {
  ...defaultArgs,
  placeholder: 'Busque algo',
  options: [
    {label: 'Mary', value: {} },
    {label: 'Shelley', value: {} },
    {label: 'Gabs', value: {} },
    {label: 'Pedrocs', value: {} },
    {label: 'Rics', value: {} },
    {label: 'Ana', value: {} },
    {label: 'Igor', value: {} }
  ] as MultiSelectOption[]
} as Partial<MultiSelectComponent>;

export const ThumbnailMultiSelect = Template.bind({});
ThumbnailMultiSelect.args = {
  ...defaultArgs,
  placeholder: 'Busque algo',
  options: [
    {
      label: 'Arkansas',
      value: '2.978M',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      label: 'California',
      value: '39.14M',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      label: 'Florida',
      value: '20.27M',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      label: 'Texas',
      value: '27.47M',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ]
} as Partial<MultiSelectComponent>;

export const PreSelectedOptions = Template.bind({});
PreSelectedOptions.args = {
  ...defaultArgs,
  placeholder: 'Busque algo',
  options: [
    {label: 'Mary', value: {} },
    {label: 'Shelley', value: {} },
    {label: 'Gabs', value: {} },
    {label: 'Pedrocs', value: {} },
    {label: 'Rics', value: {} },
    {label: 'Ana', value: {} },
    {label: 'Igor', value: {} }
  ],
  selectedOptions: [{label: 'Mary', value: {} }]
} as Partial<MultiSelectComponent>;

export const ObservableInput = Template.bind({});
ObservableInput.args = {
  ...defaultArgs,
  placeholder: 'Busque algo',
  options: [],
  selectedOptions: [{label: 'Pre Selected', value: {} }],
  observableInput: (search: string) => {
    let call: Observable<any>;
    if (`${search}`.length > 3) {
      call = of([{label: `${search}`, value: `${search}` }]);
    } else {
      call = of([]);
    }
    return call.pipe(
      delay(2000),
    )
  }
} as Partial<MultiSelectComponent>;
