#tabによるコンテンツ切り替え
.tabでtabの部分を作成  
.tabboxに切り替えるコンテンツの中身を記述

tabの何番目をクリックしたか？で、一致するn番目のコンテンツを表示させる。

切り替えはjsにて.activeを付与し、display:blockに。それ以外をdisplay:noneする。