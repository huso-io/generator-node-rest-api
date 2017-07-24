#!/bin/sh

echo "### 开始安装 Atom 组件"

apm install --no-confirm \
    linter \
    linter-eslint \
    linter-jscs \
    linter-pug-lint \
    linter-scss-lint \
    linter-shellcheck \
    linter-ui-default \
    language-babel \
    language-graphql \
    language-ini \
    language-pug \
    language-unix-shell \
    minimap \
    minimap-find-and-replace \
    minimap-highlight-selected \
    advanced-open-file \
    atom-beautify \
    atom-clock \
    autoclose-html \
    autocomplete-modules \
    autocomplete-paths \
    busy-signal \
    color-picker \
    docblockr \
    editorconfig \
    git-plus \
    git-time-machine \
    highlight-line \
    highlight-selected \
    intentions \
    markdown-scroll-sync \
    markdown-writer \
    merge-conflicts \
    open-recent \
    pigments \
    project-manager \
    qolor \
    regex-railroad-diagram \
    seti-syntax \
    seti-ui \
    file-icons \
    simple-drag-drop-text \
    sort-lines \
    split-diff \
    todo-show \
    tool-bar \
    tool-bar-atom \

echo "安装完成。"
