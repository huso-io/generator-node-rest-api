#!/bin/sh

echo "### 开始安装 Ruby 依赖..."

sudo gem install -n /usr/local/bin \
  scss_lint

echo "结束安装..."
