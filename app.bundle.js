!function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(m&&m(t);p.length;)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={0:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var m=l;i.push([55,1]),n()}({11:function(e){e.exports=JSON.parse('{"name":"omikuji","version":"0.0.1","homepage":"https://sprout2000.github.io/omikuji","private":true,"license":"MIT","author":{"name":"sprout2000","email":"office@nishigami.jp"},"scripts":{"clean":"rimraf dist/*","start":"cross-env NODE_ENV=\\"development\\" webpack-dev-server","build":"cross-env NODE_ENV=\\"production\\" webpack --progress --hide-modules","predeploy":"npm-run-all clean build","deploy":"gh-pages -d dist"},"dependencies":{},"devDependencies":{"@types/react":"^16.9.17","@types/react-dom":"^16.9.4","@types/react-onsenui":"^2.9.9","@types/webpack":"^4.41.0","@types/webpack-dev-server":"^3.9.0","@typescript-eslint/eslint-plugin":"^2.12.0","@typescript-eslint/parser":"^2.12.0","copy-webpack-plugin":"^5.1.1","cross-env":"^6.0.3","css-loader":"^3.4.0","eslint":"^6.8.0","eslint-config-prettier":"^6.7.0","eslint-plugin-prettier":"^3.1.2","eslint-plugin-react":"^7.17.0","file-loader":"^5.0.2","gh-pages":"^2.1.1","html-webpack-plugin":"^3.2.0","localforage":"^1.7.3","npm-run-all":"^4.1.5","onsenui":"^2.10.10","prettier":"^1.19.1","react":"^16.12.0","react-dom":"^16.12.0","react-onsenui":"^1.11.2","rimraf":"^3.0.0","style-loader":"^1.1.1","ts-loader":"^6.2.1","ts-node":"^8.5.4","typescript":"^3.7.4","webpack":"^4.41.4","webpack-cli":"^3.3.10","webpack-dev-server":"^3.10.1","workbox-sw":"^4.3.1","workbox-webpack-plugin":"^4.3.1"}}')},52:function(e,t,n){var a=n(7),r=n(53);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},o=(a("!!../node_modules/css-loader/dist/cjs.js!./App.css",r,i),r.locals?r.locals:{});e.exports=o},53:function(e,t,n){var a=n(2),r=n(4),i=n(54);t=a(!1);var o=r(i);t.push([e.i,'body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\na,\na:visited,\na:hover,\na:active {\n  text-decoration: none;\n  color: #666;\n  font-size: 0.9em;\n}\n\n.App {\n  text-align: center;\n}\n\n.container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.omikuji-container {\n  margin-bottom: 20px;\n}\n\n.button-container {\n  margin-bottom: 20px;\n}\n\n.card-container {\n  min-width: 90vw;\n}\n\n.card-header {\n  color: #666;\n  font-size: 0.9em;\n}\n\n.card-content {\n  padding-top: 10px;\n  text-align: center;\n  font-size: 0.9em;\n}\n\n.history-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.drawer-header {\n  height: 120px;\n  background-image: url('+o+");\n  background-size: cover;\n  background-color: #f5f5f5;\n  display: flex;\n  justify-content: center;\n  padding-left: 20px;\n  flex-direction: column;\n  font-size: 0.8em;\n  line-height: 0.25;\n}\n\n.sidebar-text {\n  color: #666;\n  font-size: 0.9em;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 50vmin;\n}\n\n.Running {\n  animation: App-logo-spin infinite 0.7s linear;\n  height: 50vmin;\n}\n\n.fortune {\n  height: 50vmin;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n",""]),e.exports=t},54:function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/cover.png"},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),s=n(5),l=n.n(s),c=n(3),m=n.n(c),d=n(1);const p=e=>{switch(e){case"大吉":return{color:"#cc0000"};case"吉":return{color:"#0088cc"};case"中吉":return{color:"#ff8000"};case"小吉":return{color:"#006600"};case"末吉":return{color:"#993300"};case"凶":return{color:"#8f00b3"};case"大凶":return{color:"#666666"};default:return{color:"#999999"}}};var u=e=>r.a.createElement(d.Page,null,r.a.createElement("div",{className:"history-container"},r.a.createElement(d.List,{style:{minWidth:"90vw",marginTop:10}},r.a.createElement(d.ListItem,{modifier:"longdivider"},r.a.createElement("div",{className:"left",style:{color:"#666"}},"時間"),r.a.createElement("div",{className:"center",style:{color:"#666",marginLeft:"7em"}},"運勢")),e.scores.map(e=>r.a.createElement(d.ListItem,{key:e.id,style:p(e.fortune),expandable:!0},r.a.createElement("div",{className:"left"},e.createdAt),r.a.createElement("div",{className:"center",style:{marginLeft:"1em"}},e.fortune),r.a.createElement("div",{className:"expandable-content",style:{textAlign:"center",color:"#666"}},e.oracle)))))),h=n.p+"img/omikuji.png",g=n.p+"img/chuukichi.png",f=n.p+"img/daikichi.png",b=n.p+"img/daikyou.png",v=n.p+"img/kichi.png",y=n.p+"img/kyou.png",E=n.p+"img/suekichi.png";const w=[h,f,v,g,n.p+"img/syoukichi.png",E,y,b];var k=e=>r.a.createElement(d.Page,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"omikuji-container"},r.a.createElement("img",{src:w[e.imgNum],alt:"logo",className:e.cName})),r.a.createElement("div",{className:"button-container"},r.a.createElement(d.Button,{onClick:e.omikuji,disabled:!!e.disable},r.a.createElement(d.Icon,{icon:"ion-pricetags",size:24,style:{marginRight:10}}),"おみくじ")),r.a.createElement("div",{className:"card-container"},r.a.createElement(d.Card,null,r.a.createElement("div",{className:"card-header"},r.a.createElement(d.Icon,{icon:"md-face",size:24,style:{color:"#e91e63",marginRight:10}}),"きょうの占い"),r.a.createElement("div",{className:"card-content"},r.a.createElement("p",null,e.oracle)))))),N=n(11);var x=e=>r.a.createElement(d.Page,null,r.a.createElement(d.List,{className:"drawer"},r.a.createElement("div",{className:"drawer-header"},r.a.createElement("p",null,"おみくじ"),r.a.createElement("p",null,"v",N.version)),r.a.createElement(d.ListItem,{tappable:!0,onClick:e.onReload},r.a.createElement("div",{className:"left"},r.a.createElement(d.Icon,{icon:"md-refresh",style:{color:"#007aff"},size:24})),r.a.createElement("div",{className:"center sidebar-text"},"アプリを再読込み")),r.a.createElement(d.ListItem,{tappable:!0,onClick:e.onConfirm},r.a.createElement("div",{className:"left"},r.a.createElement(d.Icon,{icon:"md-delete",style:{color:"#e91e63"},size:24})),r.a.createElement("div",{className:"center sidebar-text"},"履歴を消去")),r.a.createElement(d.ListItem,{tappable:!0},r.a.createElement("div",{className:"left"},r.a.createElement(d.Icon,{icon:"md-info",style:{color:"#999"},size:24})),r.a.createElement("div",{className:"center sidebar-text"},r.a.createElement("a",{href:"https://github.com/sprout2000/omikuji"},"このアプリについて")))));var O=[["見知らぬ人が良いきっかけを運んでくれる","お金の出入りが激しい","危険な恋が待っている","待ちに待った出来事が起こる","思ったより良い成果が得られる","止まらない食欲に困惑する","あなたのコメントで炎上が起こる","充電がなかなか減らない","叶わなくていいことまで叶う","懐を狙われるくらい収入アップ","旅先で有名になれる","努力せずとも成果が得られる","風邪すら引かない","注目され抜擢される","懸賞に当たりやすい","貯金がみるみる増える","老若男女問わず、異様な人気","偶然訪れた先でラッキー連続","あてずっぽうで書いた書類で高得点","まさに健康な身体の見本","気になる人からの反応がある","新しいガジェットが手に入る","欲張らなければ叶う","使ったお金が結果的に戻る","熱愛のウワサが流れる","旅先でサプライズがある","懸案事項が前日の夢に出る","おおむね健康だが冷え性に注意","待ちに待った製品が発売される"],["本当の願いを見直してみて","散財、でも笑顔が見られる","趣味の合う異性と出会う","予定がめちゃくちゃになる","目標の成果まで届かない","友人の結婚・離婚をSNSで知る","スマホがトイレに水没する","ラッキーが舞い込んで叶う","クレジットカードに頼って乗り越えるべし","山の中で森林浴が吉","友人との共同作業で吉","ネットをやり過ぎて目が疲れる","知らぬ間に友人が減少","自撮りが密かなマイブームに","ビビらなければ叶いやすい","お金を出すタイミングが肝心","常連のお店で運命の出会いをする","足元に注意、小石につまづく","平均的な成果も上げられない","温泉に入って疲労回復","知らない人からのアプローチがある","頭を使いすぎて熱を持つ","望みが高すぎなければ叶う","年齢×千円を持ち歩くと吉","年下から告白される","海辺でリフレッシュできそう","赤字の危機を回避する","本の読みすぎで目が疲れる","家族からフォローされる","ネットの使いすぎで休日が終わる","今年は一つだけ願い事が叶う","少しの我慢がお金の妖精を呼ぶ","漫画片手に人付き合いを学べば吉","旅行雑誌を眺めるだけで満足","仕事がなかなか手につかない","足ツボマッサージが効果的","発言しても誰からも反応がない","電車で隣の席からスマホを覗き見される"],["親戚のつてを頼れば吉","お金が降ってくる夢を見る","待ち人はあらわれない","ステキな景色に出会う","貸した書籍が返ってこない","ダイエットが長続きしない","面白い見解を見つける","食べ物のことなら叶う","新しい趣味で散財する","趣味の違う人と出会う","繁華街で迷う","遊びすぎて赤字の危機","深爪しすぎて痛む","意外な人物と知り合う","好みの小物が手に入る","友だちが持ってくる好機を逃すな","地味に出費がかさむ","飲み会でおごってもらえる","予定通りに進む","ランチタイムにギリ間に合う","ヤマ感が外れて悲惨なことに","よく食べて、よく寝ましょう","友達が増える","携帯が圏外になりにくい","ありのままでいればチャンスあり","だまされるがお金は減らない","悪い人のあと良い人に出会える","北極・南極へいくと運気アップ","仕事の基本の基本をマスター","風邪には要注意","ありのままの自分がバレる","凍結に注意"],["１／２の確率で叶いそう","もらった商品券だけで３日間生活できる","妄想で満足できる","移動中に降りる駅を間違える","単語スペルをうっかりミス","休み明け寝不足になりがち","有名人からのコメントがもらえる","ものをうっかり曲げてしまう","念願のチケット入手","新しい趣味が副業になる","合コンにかなり誘われる","国外で迷う","三日以内に運命の出会いがある","連休最後の夜に仕事を思い出す","電車の乗り継ぎがスムーズにいく","ほどほどにモテる","体が冷えて体調を崩す","悩み事解決のヒントが見つかる","動作が軽くなる","思いがけない形で叶う","宝くじを買うと吉","さり気ない異性の仕草にドキッとする","買い物で小銭をぴったり出せる","歩き疲れたら無理しない","コーヒー買うのに万札しかない","誤字で失敗する","小腹が空いて、暴食に走る","ログインできない","奇跡的な一瞬を激写する"],["多くを犠牲にしてやっと一つ叶う","へそくりがばれる","好きな相手の新情報をゲット","新しい靴で靴擦れする","提出物忘れに注意","食べ過ぎで胃がもたれる","なりすましの被害にあう","施錠が解除できなくなる","誰かが助けてくれて叶う","貯金箱を見てびっくり","ランチに入ったお店でサービスしてもらえる","ドラマを見て人付き合いを研究すれば吉","ネットで穴場情報が見つかる","苦手な分野が理解できるようになる","掃除して気分がリフレッシュ","友人との会話がはずむ","同僚の書類と取り違える","何かを一つ失うと、願いが一つ叶う","会計簿をつければ運気アップ","好きな人と親密になれるはず","なんとなく出不精に","連日すごい眠気との戦い","ちょい太りを何とか回避する","友達の意外な一面を知る","やる気がないけどやれば勝てる","お金のありがたさを知る","憧れの人の意外な一面を発見","計画を十分に練ろう","お気に入りの筆記用具が壊れる","リラックスには足湯が最適","同僚と険悪な雰囲気になる","イヤホンが片方聞こえなくなる"],["他人の願い事が叶ったのを見て満足","レシートがたまる財布に哀愁","同姓同名の別人と間違えられる","気楽な一人旅、隣に仲良しカップル","住所欄の書き間違い注意","健康雑誌の立ち読みで満足","あと一歩で叶わないことも","財布の中身の軽さに軽く絶望","連日の小雨でテンションが下がる","興味のある分野を極めれば吉","楽しみなイベント前日に注意","スマホが壊れた…夢を見る","明細書を見て衝撃が走る","しばらく我慢あるのみ","商談が上手くいく","問題の読み間違いに注意","ランニングで心も体も健康に","無駄な出費が増えそう","意中の相手と意外な共通点が見つかる","友達との思い出作りにすると吉","ちょい太りがアダになる","寄せられる意見に一喜一憂する","歩きスマホを注意される","何回もおかわりできる","穴を掘ったらお金が出てくる","ひたすら待てば吉","ナンバーワンになれる","散歩することでより健康に","うかつな発言で犬猿の仲に","誤クリックが多くなる"],["不可能ってご存知ですか","倹約しましょう","異性と会話が続かずつらくなる","行く手に大きな雨雲が先回り","新聞を読んで時事問題を強化","足首をひねって地味に痛い","既読スルーすらしてもらえない","なぜか髪がサラサラになる","差し入れをもらえる","スマホ画面にクモの巣状のヒビが入る","転んで目立つ傷が出来る","友達申請しても音沙汰なし","実務の手間が悲惨なことに","今のあなたには無理難題かも","既読はされるが、返信なし","神様にお願いしてください","歩くと棒に当たる","雨と強風のコンボが炸裂","悪質なクレーマーに一人でせっせと対応中","作業中のパソコンが固まる","小さなミスが重なる","微妙に肩が痛い","食べているとお箸を落とす","ひとりごとを誰かに聞かれてしまう","最後の唐揚げを取られる","コインパーキングで別車の精算をしてしまう","外出て10分後に土砂降り","スマホの電池がお陀仏","アポイントの時間を間違える","大事なデータとサヨナラ"]];n(21),n(50),n(52);const S=["大吉","吉","中吉","小吉","末吉","凶","大凶"],j=["おみくじ","履歴"];class D extends r.a.Component{constructor(){super(...arguments),this.state={title:"おみくじ",scores:[],index:0,imgNum:0,cName:"App-logo",oracle:"おみくじボタンをタップ！",disable:!1,drawerOpen:!1,count:0},this.renderToolbar=()=>r.a.createElement(d.Toolbar,null,r.a.createElement("div",{className:"left"},r.a.createElement(d.ToolbarButton,{onClick:this.toggleDrawer},r.a.createElement(d.Icon,{icon:"md-menu"}))),r.a.createElement("div",{className:"center"},this.state.title)),this.renderTabs=()=>[{content:r.a.createElement(k,{key:"Home",omikuji:this.handleOnClick,imgNum:this.state.imgNum,cName:this.state.cName,oracle:this.state.oracle,disable:this.state.disable}),tab:r.a.createElement(d.Tab,{key:"Home",label:"おみくじ",icon:"md-home"})},{content:r.a.createElement(u,{key:"settings",scores:this.state.scores}),tab:r.a.createElement(d.Tab,{key:"settings",label:"履歴",icon:"md-time"})}],this.increment=()=>{this.setState(e=>({count:e.count+1}))},this.onReload=()=>{window.location.reload()},this.openDrawer=()=>{this.setState({drawerOpen:!0})},this.closeDrawer=()=>{this.setState({drawerOpen:!1})},this.toggleDrawer=()=>{this.setState({drawerOpen:!this.state.drawerOpen})},this.handleOnConfirm=()=>{m.a.notification.confirm({title:"(´･ω･`)",message:"本当に消しちゃうの？",buttonLabels:["いいえ","はい"],cancelable:!0,callback:e=>{1===e&&this.onDeleteHistory()}}),this.closeDrawer()},this.onDeleteHistory=()=>{this.setState({imgNum:0,cName:"App-logo",oracle:"おみくじボタンをタップ！",scores:[],count:0}),l.a.setItem("omikuji-20190501",this.state.scores).catch(e=>{console.error(e)}),this.closeDrawer()},this.handleOnClick=()=>{if(this.state.count>2)m.a.notification.alert({title:"(´･ω･`)",message:"一度に三回までしか引けないよ…",buttonLabel:"OK",cancelable:!0});else{this.increment(),this.setState({imgNum:0,cName:"Running",disable:!this.state.disable});const e=Math.floor(Math.random()*S.length),t=Math.floor(Math.random()*O[e].length),n={fortune:S[e],createdAt:(new Date).toLocaleString(),id:(new Date).getTime(),oracle:O[e][t]};setTimeout(()=>{this.setState({scores:[n,...this.state.scores],imgNum:e+1,cName:"fortune",oracle:n.oracle,disable:!this.state.disable})},800)}}}componentDidMount(){l.a.getItem("omikuji-20190501").then(e=>{e?this.setState({scores:e}):this.setState({scores:[]})}).catch(e=>{console.error(e)})}componentDidUpdate(e,t){this.state.scores!==t.scores&&l.a.setItem("omikuji-20190501",this.state.scores).catch(e=>{console.error(e)})}render(){return r.a.createElement(d.Page,{renderToolbar:this.renderToolbar},r.a.createElement(d.Splitter,null,r.a.createElement(d.SplitterSide,{side:"left",width:250,collapse:!0,swipeable:!0,isOpen:this.state.drawerOpen,onClose:this.closeDrawer,onOpen:this.openDrawer},r.a.createElement(x,{onReload:this.onReload,onConfirm:this.handleOnConfirm,onDelete:this.onDeleteHistory})),r.a.createElement(d.SplitterContent,null,r.a.createElement(d.Tabbar,{renderTabs:this.renderTabs,onPreChange:({index:e})=>this.setState({index:e,title:j[e]}),index:this.state.index,swipeable:!0}))))}}o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./service-worker.js")}),m.a.platform.isIPhoneX()&&document.documentElement.setAttribute("onsflag-iphonex-portrait","")}});