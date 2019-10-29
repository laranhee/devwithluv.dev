# Dev With Luv

[![Netlify Status](https://api.netlify.com/api/v1/badges/815054b5-06c5-4c23-97a4-20bd35a88a60/deploy-status)](https://app.netlify.com/sites/devwithluv/deploys)

## 사이트 개발 or 포스트 작성 준비과정

1. repo clone

   ```sh
   git clone https://github.com/laranhee/devwithluv.dev.git
   ```

2. npm install

   ```sh
   cd devwithluv.dev
   npm install
   ```

3. run

   ```sh
   npm run dev
   ```

## 포스트 추가하기

post 폴더에 `카테고리/포스트-제목/index.md` 형태로 폴더와 md 파일을 만든다.

md 파일에 다음과 같은 형식으로 포스트를 작성한다.

```md
---
layout: post-layout.html(포스트를 감싸는 레이아웃으로 고정값)
title: 포스트 제목
permalink: /sites/bestofjs.org/index.html(실제 생성되는 url, /카테고리/포스트-제목/index.html 형태로 작성)
tags: 카테고리(예: chrome)
---

##### devwithluv.dev

[https://devwithluv.devg](https://devwithluv.dev)

개발과 관련된, 알면 좋지만 몰라도 상관없는 짧막한 정보들을 모아놓은 사이트
```

## 이런사람들

<table>
   <tr>
      <td>
         laranhee
      </td>
      <td>
         ddody
      </td>
      <td>
         giyeonkwon
      </td>
      <td>
         heyrinOh (504 Gateway Timeout)
      </td>
   </tr>
   <tr>
      <td>
         <img src="https://avatars2.githubusercontent.com/u/8968165?s=100&v=4"/>
      </td>
      <td>
         <img src="https://avatars2.githubusercontent.com/u/11662233?s=100&v=4"/>
      </td>
      <td>
         <img src="https://avatars2.githubusercontent.com/u/30770570?s=100&v=4"/>
      </td>
      <td>
         <img src="https://avatars2.githubusercontent.com/u/38285577?s=100&v=4"/>
      </td>
   </tr>
</table>
