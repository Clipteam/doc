---
sidebar_position: 3
title: 开发
---

## 安装

:::tip

请确保在开始之前已经安装了[Node.js](https:////www.nodejs.org)和[Git](https://git-scm.com/)，此外我们建议使用Linux而不是Windows进行配置

:::

### 在现有的React应用中使用
```bash
yarn install clipcc-gui@latest
```
或者
```bash
yarn install https://github.com/Clipteam/clipcc-gui.git
```
### 下载源码并运行
```bash
git clone https://github.com/Clipteam/clipcc-gui.git
cd clipcc-gui
yarn install
yarn start
```
然后前往 [http://localhost:8601/](http://localhost:8601/)查看运行输出

如果你想要编辑`clipcc-vm`或`clipcc-block`，请使用 ``yarn link``
```bash
# 请先在工作目录中clone你需要的仓库
cd clipcc-vm && yarn && yarn link
cd clipcc-block && yarn
# 编译clipcc-block并link它，需要Python 3
yarn build
yarn link
# ...
cd clipcc-gui
yarn link clipcc-vm clipcc-block
yarn start
```
:::note 
只有 ``clipcc-vm`` 和 ``clipcc-gui`` 支持热重载
:::

**如果你需要在其他应用中引用 ``clipcc-gui`` 的本地副本，你需要先执行 ``yarn build:dist`` **

你也可以使用Yarn工作区, 详情[点此](hhttps://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/)

### 和原版Scratch的区别
1. clipcc-gui 使用 React 17.0.2 而不是 React 16.2
2. clipcc-block 重写了编译脚本以使用 Python3，并可以在 Windows 上运行
3. 切换包管理器为 Yarn
## 测试
### Documentation

You may want to review the documentation for [Jest](https://facebook.github.io/jest/docs/en/api.html) and [Enzyme](http://airbnb.io/enzyme/docs/api/) as you write your tests.

See [jest cli docs](https://facebook.github.io/jest/docs/en/cli.html#content) for more options.

### Running tests

*NOTE: If you're a Windows user, please run these scripts in Windows `cmd.exe`  instead of Git Bash/MINGW64.*

Before running any test, make sure you have run `yarn install` from this (clipcc-gui) repository's top level.

#### Main testing command

To run linter, unit tests, build, and integration tests, all at once:
```bash
yarn test
```

#### Running unit tests

To run unit tests in isolation:
```bash
yarn run test:unit
```

To run unit tests in watch mode (watches for code changes and continuously runs tests):
```bash
yarn run test:unit -- --watch
```

You can run a single file of integration tests (in this example, the `button` tests):

```bash
$(yarn bin)/jest --runInBand test/unit/components/button.test.jsx
```

#### Running integration tests

Integration tests use a headless browser to manipulate the actual HTML and javascript that the repo
produces. You will not see this activity (though you can hear it when sounds are played!).

Note that integration tests require you to first create a build that can be loaded in a browser:

```bash
yarn run build
```

Then, you can run all integration tests:

```bash
yarn run test:integration
```

Or, you can run a single file of integration tests (in this example, the `backpack` tests):

```bash
$(yarn bin)/jest --runInBand test/integration/backpack.test.js
```

If you want to watch the browser as it runs the test, rather than running headless, use:

```bash
USE_HEADLESS=no $(yarn bin)/jest --runInBand test/integration/backpack.test.js
```

## Troubleshooting

### Ignoring optional dependencies

When running `yarn install`, you can get warnings about optionsl dependencies:

```
npm WARN optional Skipping failed optional dependency /chokidar/fsevents:
npm WARN notsup Not compatible with your operating system or architecture: fsevents@1.2.7
```

You can suppress them by adding the `no-optional` switch:

```
yarn install --no-optional
```

Further reading: [Stack Overflow](https://stackoverflow.com/questions/36725181/not-compatible-with-your-operating-system-or-architecture-fsevents1-0-11)

### Resolving dependencies

When installing for the first time, you can get warnings that need to be resolved:

```
npm WARN eslint-config-scratch@5.0.0 requires a peer of babel-eslint@^8.0.1 but none was installed.
npm WARN eslint-config-scratch@5.0.0 requires a peer of eslint@^4.0 but none was installed.
npm WARN scratch-paint@0.2.0-prerelease.20190318170811 requires a peer of react-intl-redux@^0.7 but none was installed.
npm WARN scratch-paint@0.2.0-prerelease.20190318170811 requires a peer of react-responsive@^4 but none was installed.
```

You can check which versions are available:

```
yarn view react-intl-redux@0.* version
```

You will need to install the required version:

```
yarn install  --no-optional --save-dev react-intl-redux@^0.7
```

The dependency itself might have more missing dependencies, which will show up like this:

```
user@machine:~/sources/scratch/clipcc-gui (491-translatable-library-objects)$ yarn install  --no-optional --save-dev react-intl-redux@^0.7
clipcc-gui@0.1.0 /media/cuideigin/Linux/sources/scratch/clipcc-gui
├── react-intl-redux@0.7.0
└── UNMET PEER DEPENDENCY react-responsive@5.0.0
```

You will need to install those as well:

```
yarn install  --no-optional --save-dev react-responsive@^5.0.0
```

Further reading: [Stack Overflow](https://stackoverflow.com/questions/46602286/npm-requires-a-peer-of-but-all-peers-are-in-package-json-and-node-modules)
### Transitions

These are names for the action which causes a state change. Some examples are:

* `START_FETCHING_NEW`,
* `DONE_FETCHING_WITH_ID`,
* `DONE_LOADING_VM_WITH_ID`,
* `SET_PROJECT_ID`,
* `START_AUTO_UPDATING`,

### How transitions relate to loading states

Like this diagram of the project state machine shows, various transition actions can move us from one loading state to another:

![Project state diagram](/img/project_state_diagram.svg)

_Note: for clarity, the diagram above excludes states and transitions relating to error handling._
