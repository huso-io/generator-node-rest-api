# 构建指令
> 提示：这里列出来的所有指令都可以在 `package.json` 的 `scripts` 处找到。

##  常用

```shell
yarn pre-dev
```
:point_up: 第一次准备开发前先执行该指令安装项目需要的依赖，也可通过
运行该指令重新安装项目的所有依赖。

```shell
yarn remount
```
:point_up: 重新安装所有依赖，即使之前已经安装了。

```shell
yarn start
```
:point_up: 进入开发模式。

```shell
yarn test
```
:point_up: 执行测试用例。

```shell
yarn flow
```
:point_up: 专门针对 JavaScript 的 [静态类型检测](https://flow.org/)。

```shell
yarn lint
```
:point_up: 检测代码。

## 其它

| 构建命令 | 简述 | 详细描述 |
| --- | --- | --- |
| `clear` | 清理工程 | 同时执行 `clean-build` & `clean-package` 两个指令以清理整个工程，包括依赖的目录、缓存文件、测试报告等 |
| `clean-package` | 清理依赖 | 清理依赖相关的目录、索引、许可证报告等 |
| `clean-console` | 清理终端输出 | 清理同一个终端下的输出 |
| `prepublish` | 预广播 | 所有依赖安装完毕后执行一系列包相关的检查，比如安全性等 |
| `analyze-dirs` | 描述工程体积 | 以当前工程的根目录为单位，在终端输出不同子目录的体积 |
| `eslint` | 检测代码 | 专注于检测 `*.js` 格式的脚本文件 |
| `check-package` | 包检查 | 检查包的安全性、准确性等，同时生成各个包的许可证报告 |
| `deps-license` | 许可证报告 | 生成许可证报告 |
| `deps-license-development` | 许可证报告 | 生成针对开发环境下的许可证报告，单独声明是为了通过 `npm-run-all` 与 `deps-license-production` 指令异步执行 |
| `deps-license-production` | 许可证报告 | 生成针对生产环境下的许可证报告，单独声明是为了通过 `npm-run-all` 与 `deps-license-development` 指令异步执行 |
| `lines` | 代码行数 | 生成代码行数综合及不同文件的行数报告 |
| `update-authors` | 更新贡献者 | 根据 `.mailmap` 更新项目贡献者清单 |
