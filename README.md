# 테러플라이

## 원문
```html
<div>안녕하세요 <b><i><u>레 터 플 라 이</u></i></b> 입니다</div>
```

## 결과
```html
<div><span style="color: rgb(243, 176, 119);">안</span><span style="color: rgb(42, 197, 105);">녕</span><span style="color: rgb(144, 145, 110);">하</span><span style="color: rgb(65, 187, 205);">세</span><span style="color: rgb(129, 117, 34);">요</span> <b><i><u><span style="color: rgb(24, 25, 205);">레</span> <span style="color: rgb(95, 140, 175);">터</span> <span style="color: rgb(23, 125, 21);">플</span> <span style="color: rgb(48, 55, 210);">라</span> <span style="color: rgb(91, 9, 186);">이</span></u></i></b> <span style="color: rgb(219, 44, 246);">입</span><span style="color: rgb(74, 87, 136);">니</span><span style="color: rgb(15, 246, 244);">다</span></div>
```

## 결과 (style 속성생략, 공백 문자를 ' '로 표시함, '/n/t')
```html
<div>
  <span>안</span>
  <span>녕</span>
  <span>하</span>
  <span>세</span>
  <span>요</span>
  ' '
  <b>
    <i>
      <u>
        <span>레</span>
        ' '
        <span>터</span>
        ' '
        <span>플</span>
        ' '
        <span>라</span>
        ' '
        <span>이</span>
      </u>
    </i>
  </b>
  ' '
  <span>입</span>
  <span>니</span>
  <span>다</span>
</div>
```

## 예제1
```html
<div>봄이 왔어요</div>
```

## 결과1
```html
<div>
  <span>봄</span>
  <span>이</span>
  ' '
  <span>왔</span>
  <span>어</span>
  <span>요</span>
</div>
```


## 예제2
```html
<div><b>봄</b>이 왔어요</div>
```

## 결과2
```html
<div>
  <b>
    <span>봄</span>
  </b>
  <span>이</span>
  ' '
  <span>왔</span>
  <span>어</span>
  <span>요</span>
</div>
```

## 예제3
```html
<div><span>봄</span><span>이</span> <span>왔</span><span>어</span><span>요</span></div>
```

## 결과3
```html
<div><span>봄</span><span>이</span> <span>왔</span><span>어</span><span>요</span></div>
```
