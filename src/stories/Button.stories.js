import { Button } from '@mui/material';
import React from 'react';

export default {
    component: Button,
    title: 'Button',
    args: {
        color: {
            type: 'string',
            control: {
                type: 'ColorPicker',
                define: {
                    options: [
                        'primary',
                        'secondary',
                        'info',
                        'error',
                        'warning',
                        'success',
                    ],
                },
            },
        },
    }
};

const Template = (args) => <Button {...args}> { args.children } </Button>;

export const Default = Template.bind({});

Default.args = {
    color: 'primary',
    variant: 'contained',
    children: 'TEXTO',
};
