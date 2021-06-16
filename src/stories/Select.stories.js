import React from 'react';
import Select from '../Select/Select'

export default {
    title: 'Test Assessment Component/Select',
    component: Select,
    decorators: [
        (Story) => (
            <div style={{
                display: 'flex',
                minHeight: '100vh',
                paddingTop: '50px',
                justifyContent: 'center'
            }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        actions: {
          handles: ['click .select__input', 'click .select__option_point'],
        },
      },
}

const Template = (args) => <Select {...args} />;

export const mediumSelect = Template.bind({});
mediumSelect.storyName = 'Medium Select';
mediumSelect.args = {
    size: "m",
    name: "select_input",
    label: "Select one item",
    startValue: "point3",
    options: [
        {
            text: 'Point 1',
            value: 'point1',
        },
        {
            type: 'heading1',
            text: 'Heading 1',
        },
        {
            type: 'heading2',
            text: 'Heading 2',
        },
        {
            text: 'Point 3',
            value: 'point3',
        },
        {
            text: 'Point 4',
            value: 'point4',
        },
        [
            {
                type: 'heading2',
                text: 'Heading 5',
            },
            {
                text: 'Point 5.1',
                value: 'point5.1',
            },
            {
                text: 'Point 5.2',
                value: 'point5.2',
            },
        ],
        {
            type: 'heading1',
            text: 'Heading 1',
        },
        {
            text: 'Point 3',
            value: 'point3',
        },
        {
            text: 'Point 5',
            value: 'point5',
        },
    ]
};

export const largeSelect = Template.bind({});
largeSelect.storyName = 'Large Select';
largeSelect.args = {...mediumSelect.args, size: 'l'};