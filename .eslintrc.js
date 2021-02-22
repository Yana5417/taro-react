module.exports = {
  extends: ['taro/react'],
  // parser: 'babel-eslint',
  rules: {
    'no-unused-vars': ['warn', { varsIgnorePattern: 'Taro' }],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', 'ts', '.jsx', '.tsx'] },
    ],
    // 不使用多余的分号
    '@typescript-eslint/no-extra-semi': 0,
    // 不允许使用any
    '@typescript-eslint/no-explicit-any': 0,
    // 没有重新赋值的变量必须使用const定义
    'prefer-const': 0,
    'import/no-commonjs': 0,
    'jsx-quotes': ['error', 'prefer-double'],
    quotes: ['error', 'single'],
  },
}
