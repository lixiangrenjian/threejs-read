import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
export default [
    {
        input: './src/Three',
        output: {
            format: 'umd',
            name: 'THREE',
            sourcemap: true,
            file: './build/three.js'
        },
        plugins: [
            commonjs(), 
            babel({
                exclude: ['node_modules/**']
            })
        ]
    },
]