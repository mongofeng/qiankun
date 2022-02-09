# 搭建第一个 Vite 项目

```sh
npm init vite@latest

npm init vite@latest my-vue-app -- --template vue-ts
```

# 集成 eslint

## 首先我们安装 eslint

```sh
yarn add eslint  -D
```

## 接下来初始化 eslint:

```sh
npx eslint --init
```

# stylelint

```sh
yarn add -D stylelint stylelint-config-prettier stylelint-config-standard stylelint-config-rational-order stylelint-no-unsupported-browser-features stylelint-config-css-modules stylelint-declaration-block-no-ignored-properties stylelint-scss
```

```js
module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-no-unsupported-browser-features',
    'stylelint-config-css-modules',
    'stylelint-config-prettier',
  ],
  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-scss',
  ],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['svg', 'rect'],
      },
    ],
    'media-feature-name-no-unknown': [
      true,
      {
        ignoreMediaFeatureNames: ['min-device-pixel-ratio'],
      },
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
```

# commitlint

## 格式化工具

```sh
yarn add -D @commitlint/cli @commitlint/config-conventional
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

```

添加.husky/commit-msg 钩子

```sh
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'

```

## 自动化提交

```sh
yarn add @commitlint/cz-commitlint commitizen -D
```

package.json

```json
{
  "scripts": {
    "commit": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "@commitlint/cz-commitlint"
    }
  }
}
```

- eslint
- stylelint
- husky
- commit-lint

# 参考文档

- [实战--为 vite-vue3-ts 项目添加 eslint + prettier + lint-staged 项目规范](https://juejin.cn/post/7043702363156119565)
- [详解如何使得代码提交更规范（lint-staged、commitlint、commitizen、conventional-changelog-cli）](https://juejin.cn/post/6976891381914533918#heading-19)
