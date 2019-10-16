---
title: how to kill the browser process in Chrome
permalink: /chrome/taskManager/index.html
layout: post-layout.html
tags: chrome
---

##### how to kill the browser tab process

혹시 당신의 브라우저가 무한루프 늪에 빠졌나요?

브라우저상에서 다른 액션을 해보지만 말을 듣지 않나요?

![infinity loop](https://media.giphy.com/media/5nkwQ6TSx9SgAHqtdi/giphy-downsized.gif)

자바스크립트는 `single thread`로 돕니다. 즉 하나에 한가지 일밖에 못하죠.

`while(true){}` 와 같은 일을 현재 탭에서 끊임없이 하고 있기 때문에

브라우저가 말을 듣지 않게 행동하게 되는겁니다.

그럼 무한 루프에 빠져있는 탭을 죽이는 방법을 알려드리죠.

**1. 브라우저 상단에 있는 점세개 버튼을 클릭**

**2. 도구 더보기 > 작업관리자를 클릭**

**3. 종료하려는 탭을 선택 (CPU가 계속 증가하고 있음)**

**4. 프로세스종료 버튼을 클릭**
