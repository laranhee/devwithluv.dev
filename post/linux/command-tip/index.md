---
title: how to search for string in Linux
permalink: /linux/commandTip/index.html
layout: post-layout.html
tags: linux
---

##### how to search for string in Linux

`grep '{STRING}' {FILE_NAME}`:
{FILE_NAME}에서 {STRING}이 포함된 열 찾기 

`grep -Ev '{STRING}' {FILE_NAME}`:
{FILE_NAME}에서 {STRING}이 제외된 열 찾기

ex)
sample-access-log.2019-10-20 파일에서
"dasolseo"가 포함된 열을 찾되
"enter success"가 포함된 열은 제외하기:

`grep 'dasolseo' ./sample-access_log.2019-06-30 | grep -Ev 'enter success'`
