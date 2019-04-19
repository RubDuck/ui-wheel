## 一个 Vue UI 组件
[![Build Status](https://travis-ci.org/RubDuck/ui-wheel.svg?branch=master)](https://travis-ci.org/RubDuck/ui-wheel)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。长期更新。

## 开始使用

1.添加 CSS 样式
    使用本框架前，请在 CSS 中开启 border-box
    ```
    *,*::before,*::after{box-sizing:border-box}
    ```
    IE 8 及以上浏览器都支持此样式


    你还需要设置默认颜色等变量（后期会改为 SCSS 变量）
    ```

    html{
        --button-height:32px;--font-size: 14px;--button-bg:white;--button-active-bg:#eee;--border-radius:4px;--color:#333;--border-color:#999;--border-color-hover:#666
        }
    ```
    IE 15及以上浏览器都支持。

2.安装 
    ```
    npm install --save rubduck-wheel-test
    ```
3.引入
    ```
    import {Button,ButtonGroup,Icon} from 'rubduck-wheel-test'
    import 'rubduck-wheel-test/dist/index.css'
    export default {
    name: 'app',
    components: {
        HelloWorld,
        'g-button':Button
    }
    }
    ```

## 文档


## 提问


## 联系方式


## 贡献代码