export type colorType = 'red' | 'green' | 'blue' | 'gray'

const defaultTheme = {
    color: {
        red: {
            1: '#ffece8',
            2: '#fdcdc5',
            3: '#fbaca3',
            4: '#f98981',
            5: '#f76560',
            6: '#f53f3f',
            7: '#cb272d',
            8: '#a1151e',
            9: '#770813'
        },
        green: {
            1: '#e8ffea',
            2: '#aff0b5',
            3: '#7be188',
            4: '#4cd263',
            5: '#23c343',
            6: '#00b42a',
            7: '#009a29',
            8: '#008026',
            9: '#006622',
        },
        blue: {
            1: '#e8f7ff',
            2: '#c3e7fe',
            3: '#9fd4fd',
            4: '#7bc0fc',
            5: '#57a9fb',
            6: '#3491fa',
            7: '#206ccf',
            8: '#114ba3',
            9: '#063078',
        },
        gray: {
            1: '#f7f8fa',
            2: '#f2f3f5',
            3: '#e5e6eb',
            4: '#c9cdd4',
            5: '#a9aeb8',
            6: '#86909c',
            7: '#6b7785',
            8: '#4e5969',
            9: '#272e3b',
        }
    },

    fontSize: {
        md: '1rem',
        lg: '1.25rem'
    },
    lineHeight: {
        md: '1.5rem',
        lg: '1.75rem',
    }
}

export default defaultTheme;