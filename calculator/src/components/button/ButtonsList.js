export const BUTTON_ACTION = {
    AC: 'AC',
    ADD: 'ADD',
    DELETE: 'DELETE',
    EQUAL: 'EQUAL',
}

export const button_list = [
    {
        label: 'AC',
        action: BUTTON_ACTION.AC,
        class: 'other'
    },
    {
        label: '(',
        action: BUTTON_ACTION.ADD,
        class: 'other'
    },
    {
        label: ')',
        action: BUTTON_ACTION.ADD,
        class: 'other'
    },
    {
        label: '/',
        action: BUTTON_ACTION.ADD,
        class: 'operator'
    },
    {
        label: '7',
        action: BUTTON_ACTION.ADD,
        class: 'number'
    },
    {
        label: '8',
        action: BUTTON_ACTION.ADD,
        class: 'number'
    },
    {
        label: '9',
        action: BUTTON_ACTION.ADD,
        class: 'number'
    },
    {
        label: 'x',
        action: BUTTON_ACTION.ADD,
        class: 'operator'
    },
    {
        label: '4',
        action: BUTTON_ACTION.ADD,
        class: 'number'
    },
    {
        label: '5',
        action: BUTTON_ACTION.ADD,
        class: 'number'
    },
    {
        label: '6',
        action: BUTTON_ACTION.ADD,
        class: 'number'
    },
    {
        label: '-',
        action: BUTTON_ACTION.ADD,
        class: 'operator'
    },
    {
        label: '1',
        action: BUTTON_ACTION.ADD,
        class: 'number'
    },
    {
        label: '2',
        action: BUTTON_ACTION.ADD,
        class: 'number'
    },
    {
        label: '3',
        action: BUTTON_ACTION.ADD,
        class: 'number'
    },
    {
        label: '+',
        action: BUTTON_ACTION.ADD,
        class: 'operator'
    },
    {
        label: '.',
        action: BUTTON_ACTION.ADD,
        class: 'number'
    },
    {
        label: '0',
        action: BUTTON_ACTION.ADD,
        class: 'number'
    },
    {
        label: 'DEL',
        action: BUTTON_ACTION.DELETE,
        class: 'other'
    },
    {
        label: '=',
        action: BUTTON_ACTION.EQUAL,
        class: 'equal'
    }
];