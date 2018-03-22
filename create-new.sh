#!/usr/bin/env bash
set -e

usage="Copies the core files of this boilerplate into a sibling directory called <project-name>\nUsage: $0 <project-name>"

if [ -z "$1" ];
then
    echo -e ${usage}
    exit 1
fi

target="../$1"

if [ -e ${target} ];
then
    echo "Error: a directory named ${target} already exists."
    exit 1
fi

echo "Setting up project boilerplate for ${target}"

rsync -av \
 --exclude='dist' \
 --exclude='node_modules' \
 --exclude='.git' \
 --exclude='create-new.sh' \
 --exclude='.idea' \
 --exclude='package-lock.json' \
 --exclude='*.log' \
 --exclude='.DS_Store' \
 . ${target}

cd ${target}
npm install
