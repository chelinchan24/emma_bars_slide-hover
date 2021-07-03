
https://user-images.githubusercontent.com/16677586/124363580-a48ab880-dc6e-11eb-8aa3-c3dd664ba1cf.mov


![image](https://i.imgur.com/h0Tb91c.png)  
本套件是擁有滑動背景效果的 Segmented Controls 元件，用於標示出啟用中按鈕的背景，會在游標懸停到其他選項時，移動到該選項下方作為 hover 效果，並在游標離開後回到原位。
<br/><br/>

[<img src="https://user-images.githubusercontent.com/16677586/124362800-ccc3e880-dc69-11eb-8026-2f6d0fcbe85d.png" alt="drawing" width="180"/>](https://github.com/chelinchan24/emma_bars_slide-segmented-controls/releases)　
[<img src="https://user-images.githubusercontent.com/16677586/124362786-b453ce00-dc69-11eb-840a-8da5cca10d9d.png" alt="drawing" width="180"/>](https://chelinchan24.github.io/emma_bars_slide-segmented-controls/)

## 需求
- jQuery

## 相容性
- 瀏覽器需要可以處理 [CSS `flex`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex#browser_compatibility)。

## 使用
### HTML
每一組元件分成三層，分別是元件本身最外層的容器、每一個選項的按鈕，以及按鈕的標題。套件的程式透過各元素的 `class` 的名稱來進行辨識，所有的 `class` 都可以自訂，只需在呼叫套件時透過參數帶入即可。
``` html
<!--
    選項之間需要透過註解（<!-- -->）標籤來避免 inline 物件產生的空格。
-->
<div class="容器">
    <div class="選項">
        <span class="標題">葦名城</span>
    </div><!--
    --><div class="選項">
        <span class="標題">平田宅第</span>
    </div><!--
    --><div class="選項 啟用">
        <span class="標題">仙峰寺</span>
    </div><!--
    --><div class="選項">
        <span class="標題">崩落峽谷</span>
    </div><!--
    --><div class="選項">
        <span class="標題">源之宮</span>
    </div>
    <div class="滑塊"></div>
</div>
```
`class` 分為五種：最外層的容器、選項的按鈕、按鈕標題、作為背景的滑塊、啟用中按鈕的標記。  
  
作為標記的 `class` 會被放在使用者選中的按鈕上：
``` html
<div class="選項 啟用">
        <span class="標題">仙峰寺</span>
</div>
```
### JavaScript
只要在元件載入時呼叫 `emma_bars_slideSegmentedControls`，並輸入各 `class` 的名稱就能讓元件運作。
``` js
emma_bars_slideSegmentedControls('容器', '選項', '標題', '滑塊', '啟用')
```
### CSS
CSS 的說明寫在 [`style.css`](https://github.com/chelinchan24/emma_bars_slide-segmented-controls/blob/master/style.css) 檔案內。

## 授權
本套件以 [MIT License](https://github.com/chelinchan24/emma_bars_slide-segmented-controls/blob/master/LICENSE) 發布。 
  
如果您想要在自己的專案中使用本套件，請記得要註明作者「@chelinchan24」，並附上網址「[emma.chel.in](http://emma.chel.in)」以供查照。
