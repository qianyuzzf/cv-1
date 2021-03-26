let html = document.querySelector('#html')
let style = document.querySelector('#style')

let string = `
/* 你好，我叫谦宇
 * 接下来我要开始加样式了
 * 首先，我先准备一个 div
 */
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
    color: red;
}
/* 接下来我会把 div 变成一个八卦图
 * 首先，把 div 变成一个圆
 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 接下来，我要加两个风火轮
 * 首先，第一个
 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
/* 然后加第二个
 */
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`

let string2 = ''
let n = 0

let step = () => {
  setTimeout(() => {
    if (n < string.length - 1) {
      if (string[n] === '\n') {
        //如果是回车，就直接加入“<br>”
        string2 += '<br>'
      } else if (string[n] === ' ') {
        //如果是缩进，就加入“&nbsp;”
        string2 += '&nbsp;'
      } else {
        //如果不是回车，就照搬
        string2 += string[n]
      }
      html.innerHTML = string2
      style.innerHTML = string.substring(0, n)
      window.scrollTo(0, 9999)
      html.scrollTo(0, 9999)
      n += 1
      step()
    } else {
    }
  }, 50)
}
step()
