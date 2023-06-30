import * as React from 'react';
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'set': React.SVGProps<SVGSetElement>;
        }
    }
}