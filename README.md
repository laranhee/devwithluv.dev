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

src/post 폴더에 `카테고리/포스트-제목/index.md` 형태로 폴더와 md 파일을 만든다.

md 파일에 다음과 같은 형식으로 포스트를 작성한다.

```md
---
layout: post-layout.html(포스트를 감싸는 레이아웃으로 고정값)
title: 포스트 제목
permalink: /sites/bestofjs.org/index.html(실제 생성되는 url, /카테고리/포스트-제목/index.html 형태로 작성)
tags: 카테고리(예: chrome)
---

##### devwithluv.dev

[https://devwithluv.dev](https://devwithluv.dev)

웹개발과 관련된, 알면 좋지만 몰라도 상관없는 짧막한 정보들을 모아놓은 사이트
```

### 로컬 이미지 추가하기

외부 이미지가 아닌 로컬 이미지를 추가하고 싶을 경우, post 파일이 위치하는 경로가 `src/post/카테고리/포스트-제목/index.md` 일 때, `src/post-img/카테고리/포스트-제목/` 디렉토리에 이미지를 위치시키고, `index.md` 파일에서 현재 디렉토리에 이미지가 존재하는 것처럼 참조한다.

예: post 파일(`src/post/example/test/index.md`)에 로컬이미지(`src/post-img/example/test/01.png`)를 참조할 때

```md
### 포스트

![screenshot](01.png)
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
