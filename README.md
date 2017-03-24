# 테러플라이

## 원문
```html
<div>안녕하세요 <b><i><u>레 터 플 라 이</u></i></b> 입니다</div>
```

## 결과
```html
<div>
  <span>안</span>
  <span>녕</span>
  <span>하</span>
  <span>세</span>
  <span>요</span>
  <span> </span>
  <b>
    <i>
      <u>
        <span>레</span>
        <span> </span>
        <span>터</span>
        <span> </span>
        <span>플</span>
        <span> </span>
        <span>라</span>
        <span> </span>
        <span>이</span>
      </u>
    </i>
  </b>
  <span> </span>
  <span>입</span>
  <span>니</span>
  <span>다</span>
</div>
```

## 예제1
```html
<div>안녕하세요 <span><span>레 터 플 라 이</span> 입니다</span></div>
```

## 결과1
```html
<div>
  <span>안</span>
  <span>녕</span>
  <span>하</span>
  <span>세</span>
  <span>요</span>
  <span> </span>
  <span>
    <span>
      <span>레</span>
      <span> </span>
      <span>터</span>
      <span> </span>
      <span>플</span>
      <span> </span>
      <span>라</span>
      <span> </span>
      <span>이</span>
    </span>
    <span> </span>
    <span>입</span>
    <span>니</span>
    <span>다</span>
  </span>
</div>
```

## 예제2
```html
<div><span>안</span>녕하세<span>요</span></div>
```

## 결과2
```html
<div>
  <span>안</span>
  <span>녕</span>
  <span>하</span>
  <span>세</span>
  <span>요</span>
</div>
```

## 예제3
```html
<div><span>안 </span>녕하세<span>요</span></div>
```

## 결과3
```html
<div>
  <span>
    <span>안</span>
    <span> </span>
  </span>
  <span>녕</span>
  <span>하</span>
  <span>세</span>
  <span>요</span>
</div>
```

## 예제4
```html
<div><span>레</span><span> </span><span>터</span><span> </span><span>플</span><span> </span><span>라</span><span> </span><span>이</span></div>
```

## 결과4
```html
<div>
  <span>레</span>
  <span> </span>
  <span>터</span>
  <span> </span>
  <span>플</span>
  <span> </span>
  <span>라</span>
  <span> </span>
  <span>이</span>
</div>
```

## 예제5 (작동 X)
```html
<div>
  <span>레</span>
  <span> </span>
  <span>터</span>
  <span> </span>
  <span>플</span>
  <span> </span>
  <span>라</span>
  <span> </span>
  <span>이</span>
</div>
```

## 결과5
```html
<div>
  <span>레</span>
  <span> </span>
  <span>터</span>
  <span> </span>
  <span>플</span>
  <span> </span>
  <span>라</span>
  <span> </span>
  <span>이</span>
</div>
```
