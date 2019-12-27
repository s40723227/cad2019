var tipuesearch = {"pages": [{'title': 'Weeks', 'text': 'Week2~Week5 \n Week6~Week9 \n Week10~Week14 \n Week15~Week18 \n', 'tags': '', 'url': 'Weeks.html'}, {'title': 'Week2~Week5', 'text': '\n Week2 \n 建立個人倉儲cad2019及進行網站編譯 \n \n 1.下載 2019Fall可攜套件.7z \xa0 (編譯\xa0 Solvespace 用)，完成後開啟。  2.登入個人github帳號，創建新的倉儲cad2019。 3.進入要存放資料夾tmp。 4.輸入 git clone \xa0 https://github.com/s40723227/cad2019 \xa0複製 個人倉儲至資料夾 。 5.輸入git submodule add https://github.com/mdecourse/cmsimde.git 取得子模組資料。  6.將up_dir的所有項目複製到cad2019。 7.完成後，進入cmsimde，輸入python -m pip install flask_cors 更改模組。 8.完成後，python wsgi.py 開始編輯倉儲(login密碼為 admin )。 9.編輯完成後，git status  ->  git add .  ->  git commit -m "XXX"  ->  git push。\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  \n Week3 \n 根據 Solvespac e 編譯引導，進行編譯後並啟動solvespcae \n \n 編譯步驟 \n 1.\xa0\xa0 先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe。 2.git version 查驗 git 版本(檢查版本是否為git 2.13 版本以上)。 3.輸入git clone\xa0 --recurse-submodules 取得所有子模組資料。 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace。 4.編譯Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 line713: # list(APPEND ANGLE_DEFINITIONS \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 line714: # "-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() 5.手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 。  6.cd solvespace -> cd extlib -> cd libpng -> mkdir build -> cd build -> cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release -> mingw32-make 。 7.重新命名libpng.dll.a為libpng_static.a 並複製到Y:\\msys64\\mingw64\\lib目錄下。 8.回到solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 輸入cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release -> mingw32-make。 9.開啟solvespcae即完成程式編譯。 \n \xa0Week4 \n 進行網站更新及拍攝操作影片(上字幕.加浮水印) \n 1.使用的錄影軟體  ShareX \n \n 2.使用的剪輯軟體(上字幕.加浮水印)  Arctime \n \n 3.課程浮水印\xa0 KMOL \n \n Week5 \n 學員互評及自評，solvespcae基本圖面繪製及組裝 \n \n 步驟一(支架): 開啟圖檔，使用快捷鍵R畫出矩形->點選兩線段，使用快捷鍵Q使兩線段等長->使用快捷鍵D定義線段長度->使用快捷鍵shift+X擠出->點選two-siderider雙面擠出->使用快捷鍵D定義擠出長度->即完成 \n 步驟二(桌腳): 方法與步驟一相同，只有擠出長度不同。 \n 步驟三(支架與桌腳組合): 開啟圖檔，使用快捷鍵shift+I叫出支架及桌腳的圖檔->點選桌腳的座標系X與系統的座標系Y，再使用快捷鍵X使兩座標系同方向->點選兩接合點使用快捷鍵O使兩點接合->以相同方法完成整體支架。 \n 步驟四(桌面): 方法與步驟一相同，只有矩形尺寸及擠出長度不同。 \n 步驟五(整體支架與桌面組合): 方法與步驟三相同。 \n 備註:零件圖檔更改尺寸及顏色，組合圖也會更著改變。 \n \n 成品圖 \n \n', 'tags': '', 'url': 'Week2~Week5.html'}, {'title': 'Week6~Week9', 'text': 'Week6 \n 1.機械設計工程系-電腦輔助設計實習\xa0 W6 任務一參數化零組件繪製 \n \n (1)繪製基本零件(車體底盤.輪子.軸.支撐軸):使用線條(S)及圓(R)畫出所需外型，再使用草圖展出(Shift+X)畫出展出或切除尺寸。 (2)組裝零件:使用(X)讓零件法線方向相同後，使用(O)讓兩零件之兩點接合，即完成。 \n 成品圖 \n \n 2. 機械設計工程系-電腦輔助設計實習 W6 任務二網際 V-rep 模型控制 \n \n (1)下載 \xa0 V-rep 3.6.1 rev 4.7z \xa0及 web_vrep2.zip \xa0( local )並解壓縮到隨身系統裡。 (2)打開vrep.exe並開啟web_vrep2裡的two_wheeler.ttt。 (3)打開web_vrep2裡的app.py並執行，進入到http://127.0.0.1:5000/。 (4)按開始之後，就可以控制車了。 \n 3.機械設計工程系-電腦輔助設計實習 W6 任務三新增啟動與停止按鈕 \n \n (1)開啟D:\\web_vrep2\\templates中的contrils.html，隨便複製一行當作修改內容，把up改成start及stop。 (2)接著開啟D:\\web_vrep2中的vrep_linefollower.py，新增啟動與停止的指令程式碼，完成後即可操作啟動與停止鈕。 \n Week7 \n Solvespace 編譯與參數繪圖驗證 \n 1.Solvespace 編譯-加入學號 \n \n (1)到個人隨身系統的solvespace\\build\\scr\\CMakeFiles\\solvespace.dir底下，找到solvespace.cpp.obj檔案並刪除。 (2)到solvespace\\scr底下，找到solvespace.cpp並用編譯器開啟，利用ctrl+F搜尋GPL找到This is solvespace字串，並在後面加上is compiled by 學號。 (3)到start_mdecourse，輸入cd solvespace\\build->mingw32-make，等待完成後，開啟solvespace.exe案Help->About就完成了。 \n 編譯-加入學號圖 \n \n 2. Solvespace \xa0參數繪圖驗證 \n (1) \n \n 成品圖 \n \n (3) \n \n 成品圖 \n \n (4) \n \n 成品圖 \n \n (6) \n \n 成品圖 \n \n (7) \n \n 成品圖 \n \n (8) \n \n 成品圖 \n \n (10) \n \n 成品圖 \n \n (11) \n \n 成品圖 \n \n (12) \n \n 成品圖 \n \n (13) \n \n 成品圖 \n \n (14) \n \n 成品圖 \n \n (15) \n \n 成品圖 \n \n (16) \n \n 成品圖 \n \n (18) \n \n 成品圖 \n \n Week8 \n 1.啟用CMSiMDE中的網誌系統 \n \n (1)開啟 start_mdecourse.bat ，輸入 leo 。 (2)將個人倉儲中的 config 內的 pelican.leo 用leo開啟。 (3)到個人網站，將blog的網址複製到 @path . ./  ->  Pelican設定  ->  遠端中SITEURL 。 (4)再將底下的 DISQUS_SITENAME 改為自己的學號。 (5)在 local_blog 點選右鍵->點選 goto script ，將指令複製起來後，存儲。 (6)到個人倉儲下輸入指令。 (7)完成。 \n 2.以ssh對Github連線 \n \n (1)到Y槽(Data)中的portablegit將sh_for_solvespace檔案複製並修改成sh.exe。 (2)開啟start_mdecourse.bat並輸入sh及ssh-keygen -t rsa -b 4096 -C "使用者學號"產生key，打上key的產生區域。 (3)下載 putty.7z SSH 連線工具組 ，利用其中的 puttygen.exe 將上述建立的 Openssh keys 轉為 putty 可以辨識的格式。 (4)修改啟動的 start.bat 加入下列設定: \xa0 \xa0 \xa0 \xa0set GIT_HOME=%Disk%:\\portablegit\\bin\\ \xa0 \xa0 \xa0 \xa0set GIT_SSH=%Disk%:\\putty\\plink.exe  修改完成後,重新啟動。  (5)將要使用 ssh 連線的倉儲 .git 中的 config 檔案中的 url 設定改為 ssh 連線格式:url = git@github.com:倉儲名稱/cad2019.git。  (6)開啟 putty.exe 建立一個 session 名稱為 github.com, 其中指定 Connection -> Proxy 與 Connection -> SSH -> Auth。  (7)將下列字串加入編輯器並存儲到y:\\home\\.ssh\\config:  Host github.com  \xa0 \xa0 User git  \xa0 \xa0 Port 22  \xa0 \xa0 Hostname github.com    \xa0 \xa0 TCPKeepAlive yes  \xa0 \xa0 IdentitiesOnly yes  (8)將所建立的OpenSSH格式的public key內容,送到Github帳號SSH settings中。 (9)完成。 \n 3.導入Webots \n \n (1)到 http://mde.tw/cad2019/content/Webots.html 中下載 Webots_2019b_rev1.7z \xa0解壓縮到Y槽(Data)。 (2)將隨身系統中的start_mdecourse.bat複製一個並改名start_mdecourse_webots.bat。 (3)打開編譯器，將start_mdecourse_webots.bat設定執行路徑及啟動指令。 (4)完成後，即可開啟Webots。 \n Week9 \n 期中報告 \n', 'tags': '', 'url': 'Week6~Week9.html'}, {'title': 'Week10~Week14', 'text': 'Week10 Week12 Week13 Week14', 'tags': '', 'url': 'Week10~Week14.html'}, {'title': 'Week10', 'text': '正向 pull request與反向pull request之差異 \n 正向\xa0 pull request: \xa0 \xa0 \xa0指無權限之組員創建N ew pull request後，將 更新資料推送到組別倉儲，再經由有權限組長或組員確認資料無誤後，同意合併。 \n 反向 pull request: \xa0 \xa0 \xa0指管理者給於組員權限，使組員擁有合併的權力，但常因組員版本不同，推送易發生衝突。 \n Fork倉儲 \n 1.登入個人github帳號，並搜尋自己組別的倉儲。 2.點選Fork後，再點選自己的github帳號。 3.使用指令 git clone --recurse-submodules將分組倉組clone下來。 4.更新資料後，git add . ->git commit -m"xxx" ->git push，創建New pull request。 5.等待組長同意後，確認合併即可。 \n \n 繪圖軟體介紹 \n Solvespace Solvespace功能表說明 Solvespace實作影片 \n \n Solidworks Solidworks開發緣起 Solidworks套件安裝與流程設定 \n \n NX NX開發起源 NX套件安裝與設定流程 \n \n Inventor Inventor開發起源 Inventor套件安裝與設定流程 \n \n Creo (Pro/E) Creo (ProE)開發起源 Creo (ProE)套件安裝與設定流程 \n \n 各套繪圖軟體之差異及特點分析 \n', 'tags': '', 'url': 'Week10.html'}, {'title': 'Week12', 'text': 'Batch Command \n 使用者在維護網站時，需開啟動態與近態頁面，必須 以 python 執行位於 cmsimde 子目錄中的 wsgi.py，以及開啟位於倉儲根目錄中的 http-server.py，為了方便，所以在 y:\\ 目錄建立下列兩個命令批次檔案: \n cad.bat - 啟動 wsgi.py 並且在瀏覽器開啟 https 9443 動態網頁 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n @echo off \n y: \n cd tmp\\cad2019\\cmsimde \n start python wsgi.py | start chrome https: //localhost:9443 \n \n \n \n \n \n \n \n 其中的 | 是同時執行 wsgi.py 的啟動以及瀏覽器網頁的開啟 \n 而 cadh.bat - 啟動 http-server 並且在瀏覽氣開啟 https 8444 靜態網頁 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n @echo off \n y: \n cd tmp\\cad2019\\ \n start python http-server.py | start chrome https: //localhost:8444 \n \n \n \n \n \n \n \n 至於近端倉儲維護告一段落後, 啟動 gitextensions 開啟 cad2019 倉儲時, 使用: \n cadg.bat \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n @echo off \n y: \n Y:\\cad\\201906_fall\\data\\GitExtensions\\gitextensions.exe\xa0 browse y:\\tmp\\cad2019\\ \n \n \n \n \n \n \n \n 操作影片: \n \n 1.到課程網頁的Tasks2中的Batch Command，並打開編輯器。 2.將各程式碼複製到編輯器，並確認自己的路徑是否相同。 3.存儲到Y槽，即可在start_mdecourse.bat打上 cad.bat\xa0 .\xa0\xa0cadh.bat .\xa0\xa0cadg.bat 做測試。 4.完成。 \n NX12使用手冊重點整理 \n 第三章 2D草圖 \xa0 在本章中，將學習如何在NX12中創建和編輯草圖，可以在 建模(Plane in Modeling) 應用程序中的平線上直接創建草圖，在大多數情況下，建模是從2D草圖開始的，然後拉伸.旋轉或掃掠草圖以創建實體，透過繪製草圖可以輕鬆地繪製許多其他很難建模的複雜形狀。 \xa0 在本章中，將看到一些草圖繪製概念和對某些零件進行草圖繪製和建模。 \n 3.1 概述 \xa0\xa0 \xa0 NX12草圖是一組被命名的曲線，這些曲線連接在一串字符串中，掃描後形成實體，草圖表示該零件的外邊界，曲線在草圖繪製中的平面上創建。 \xa0 首先，這些曲線的繪製並沒有任何確切的尺寸，然後應用尺寸及幾何的約束來完全約束草圖，繪製完成後，可以使用多種方法來生成3D零件： • 旋轉草圖 • 拉伸草圖 \n \n • 沿參考線掃掠草圖 \n   從草圖創建的特徵與之關聯， 也就是說如果草圖發生變化，特徵也會發生變化。   使用草圖創建零件的優點是： •用於創建輪廓輪廓的曲線具有優良機動性，可用於建模特殊的形狀。 •曲線是參數化的，因此具有關聯性，可以輕鬆更改或刪除它們。 •如果更改了繪製草圖的平面，則草圖也會相應改變。 •當您想要控制特徵的輪廓時，草圖非常實用，尤其是將來需要更改時，草圖可以 快速.輕鬆地進行編輯。 3.2 草圖環境   在NX 12中，可以使用兩種方法創建草圖。 ➢(1)選擇菜單(Choose  Menu )→插入( Insert )→草圖( Sketch )。 \n \n ➢(2)在主工具欄中選擇草圖(Choose  Sketch  in  Home  toolbar)。  無論哪種情況，都會彈出一個功能框，要求定義草圖平面，螢幕將顯示草圖選項， 可以選擇 草圖平面 和 草圖方向 . 草圖平面類型 。  使用 創建草圖 功能框創建草圖時，可以通過點擊所示的座標系來選擇創建草圖的平 面在此座標系上，即顯示你選擇的平面，默認平面為 XC-YC ，然而你可以選擇在另一 平面上繪製草圖。 ➢ 選擇XC-YC平面，然後點擊 確定 (Choose the  XC-YC  plane and click  OK )。 \n   將顯示草圖平面，並且標記X-Y方向，主螢幕將更改為草圖環境( Sketching Environment )， XY平面顯示為繪圖的默認平面，這是基本的草圖窗口。   NX 12中還有一個特殊的草圖任務環境，它在主窗口中顯示所有素描工具，用於進入草圖任務環境。 ➢ 直接在草圖工具欄區域中點擊更多選項 (Click the  More  option in the direct sketch tool bar area) ➢ 點擊在草圖任務環境中打開，如下所示 (Click on  Open in Sketch Task Environment  as shown below): \n \n 在完成標誌旁有三個實用的選項: (1)可以在框中更改草圖的名稱 (2)面向草圖( Orient to Sketch )，用於將視圖定向到草圖的平面。 (3)如果在繪圖過程中旋轉了模型文件，點擊此圖標在與螢幕平行的平面上查看草圖。 將草圖重新附加( Reattach attaches )到其他平面，基準平面或路徑或更改素描方向。 允許將草圖重新附加到所需的平面，而無需重新創建所有曲線，尺寸和約束。 3.3 草圖曲線工具欄   該工具欄包含用於創建常用類型的曲線和樣條曲線.編輯.延伸.修剪.圓角等的圖標， 每種類型的曲線都有不同的選擇方法和創建方法。 \n \n  最常用的選項: \n 輪廓(Profile)   此選項會根據您在彈出工具欄中選擇的圖標創建直線和圓弧。  可以通過使用座標系或通過輸入線的長度和角度來點選此點，如圖所示。 \n \n 直線(Line)   此選項將選擇性地創建直線。 \n \n 弧(Arc) \n   此選項有兩種方法可以創建弧。  (1)三點畫弧，如圖所示。 \n (2)創建具有中心點.半徑和後掠角的圓弧或者創建具有起點和終點的圓弧，如圖所示。 \n \n 圓(Circle)   創建圓類似於創建圓弧，不同之處在於，圓是封閉的。 \n 快速修剪(Quick Trim) 將從曲線的交點修剪延伸的曲線，如果每個實體與另一個實體相交， 則此選項通過拆分每個實體來讀取它們，並擦除所選部分。 \n Studio樣條線(Studio Spline) \n   創建具有極點或具有曲線度的點之基本樣條曲線（B樣條曲線和Bezier）。 \n \n 3.4 約束工具欄    有曲線都是通過點選之點創建的，舉例來說，兩點決定一直線。    在2D環境中，任何點都有兩個自由度，一個沿X軸，另一個沿Y軸。    所創建曲線的類型取決於點的數量，因此，曲線實體的自由度數是其包含的點的數量之兩倍， 這些自由度可以通過使用固定實體創建約束來消除。   實際上，建議你通過直接或間接將實體與固定實體相關聯來刪除所有這些自由度（使草圖完全受約束）， 可以通過提供尺寸或幾何屬性（如平行度，垂直度等）來完成。 \n     在NX 12中，智能約束是自動應用的，即NX12會解釋自動尺寸或幾何約束。 可以通過點擊連續自動標註( Continuous Auto  Dimensioning)來關閉此選項，如圖所示。 \n \n 尺寸約束(Dimensional Constraints)   透過給尺寸賦予固定實體（例如軸，平面，坐標系或模型中創建的任何現有實體幾何形狀）的尺寸，可以消除自由度。  這些尺寸可以是線性.徑向.角度等。您可以在繪圖過程中隨時通過雙擊尺寸來編輯尺寸值。 \n \n 幾何約束(Geometric Constraints)   除了尺寸約束之外，還可以提供一些幾何約束以消除自由度。包括平行.垂直.共線.同心.水平.垂直.等長...等。   該軟件具有為所選實體找到可能約束的集合的能力。 例如，在下圖中的線上施加一個約束， 使其平行於矩形的左側（該線最初與矩形成一定角度）。 \n \n 顯示草圖約束(Display Sketch Constraints)   點擊此圖標將以白色顯示與該特定草圖中的實體相關的所有選項。 顯示/刪除約束(Show/Remove Constraints)   該窗口列出了與所選任何實體相關的所有約束和約束類型，可以刪除列出的任何約束或更改約束的順序， 不受約束的自由度數將顯示在狀態行中，這些都應該通過應用約束來遵循嚴格的模型來刪除。 3.5 範例    3.5.1 Arbor Press Base \n    \n 操作影片:  1.點擊草圖( Sketch )按鈕，然後點擊確定( OK )。  2.選擇菜單( Menu )→插入( Insert )→草圖曲線( Sketch Curve )→點擊輪廓( Profile )或點擊輪廓( Profile )組中的  直接繪製( Direct Sketch )（記住要關閉連續自動尺寸標註( Continuous Auto Dimensioning )）。  3.繪製上圖之圖形，點擊輪廓( Profile )中的線( Line )及弧( Arc )來繪製直線及圓弧。    4.選擇插入( Insert )→幾何約束( Geometric Constraints )或點擊在側面工具欄中的約束( Constraints ) 。  5.選擇曲線上的點( Point on Curve ) 進行約束。  6.選擇Y軸，並選擇圓弧的中心;使用相同方法，使X軸也對準中心。  7.選擇兩條斜線並使兩線等長( Equal Length )，如圖所示。    8.選擇底部的兩條水平線，使兩線共線( Collinear )並點擊等長( Equal Length )，如圖所示。    9.如果沒有找到附近的兩個藍色圓圈（切線約束），如下圖所示，則選擇圓弧和連接到其端點的兩條垂直線之一，  點選切線( Tangent ) 。     如果圓弧和直線已經相切，則圖標將顯示為灰色，則點擊編輯( Edit )→選項( Selection )→取消全選( Deselect All )，  對圓弧和另一條垂直線重複相同的步驟。  10.使用等長( Equal Length )的方法，使圖形對稱。  注意:在加入約束後，草圖可能會失去幾何連續性，圖如所示，在此種狀況下，點選兩線的確切終點，  並點擊重合約束。(在尺寸與幾何約束有衝突，會以黃點顯示)。    11.在約束( Constraints )工具欄中選擇快速尺寸( Rapid Dimension ) 。  12.約束各線段的尺寸(依大到小尺寸開始約束)，如圖所示。   \n 13.完成後，點擊螢幕左上角或右下角的完成標誌( Finish Flag ) 。  14.點擊草圖，並選擇拉伸( Extrud )。       15.在Z方向上將該草圖拉伸60mm，如圖所示。    \xa016.完成。  3.5.2 Impeller Lower Casing    操作影片: \n   1.點擊菜單( Menu )→插入( Insert )→點擊草圖任務環境( Sketch In Task Environment )或 點選功能區的草圖任務環境( Sketch In Task Environment )中的 。   2.將繪圖平面設置為XC-YC平面。   3.繪製下圖曲線。   4.透過點擊直接繪製( Direct Sketch )中的加號，在原點（0，0，0）上創建一個點。   5.點擊幾何約束( Geometric Constraints ) 。   6.選擇原點處的點，並點擊固定約束( Fixed ) （如果看不到此圖標，則點設置( Settings )並按下圖所示進行檢查）。        7.使所有曲線和直線之節點相切( Tangent )。   8.約束尺寸，如下圖。        9.選擇所有尺寸，並點擊右鍵隱藏所有尺寸。   10.選擇菜單( Menu )→編輯( Edit )→移動物件( Move Object )或從功能區欄中選擇移動曲線( Move Curve )。   11.選擇所有曲線，在選擇物件( Select Object )中可以看到4個物件，將其中的動作( Motion )改為距離( Distance )。   12.在指定向量( Specify Vector )中選擇YC方向，並在距離( Distance )中輸入0.5英吋。         13.在功能框中，點擊複製原物件( Copy Original )，並點選確定( OK )。   14.使用基本曲線將兩端點連接起來以完成草圖。   15.選擇編輯( Edit )→移動物件( Move Object )或從功能區欄中選擇移動曲線( Move Curve )。   16.選擇下方曲線，並向Y軸方向移動-1.5英吋。   17.使用直線將此曲線與內部曲線連接，如圖所示。         18.選擇編輯( Edit )→移動物件( Move Object )。   19.選擇外線，如下圖所示。 \n 20.將此線向X軸移動-0.5英吋。          21.使用直線將兩條線連接起來，如圖所示。          22.點擊完成標誌( Finish Flag ) ，即完成。 \xa0 3.5.3 Impeller    操作影片:   1.點擊草圖( Sketch )，並將草繪平面設置為XC-YC平面，然後點擊確定( OK )。  2.點擊菜單( Menu )→插入( Insert )→基準/點( Datum/Point )  →點( Point )或在點( Point )的功能區欄中點擊直接繪製( Direct Sketch )。    3.創建兩個點，一個在原點(0，0，0).一個在(11.75，6，0)。  4.點擊側邊工具欄上的弧形( Arc )圖標，並點擊彈出式工具欄中的中心點及端點畫弧( Arc by Center and Endpoints ) 。  5.點擊原點上的點，並創建一個半徑為1.5的圓弧，如圖所示。    6.點擊（11.75，6，0）處的點，並創建半徑為0.5的圓弧。  7.點擊彈出工具欄中的3點畫弧( Arc by 3 Points ) 。  8.選剛剛創建的兩個弧的頂部端點，並點擊兩者之間的某個位置以創建另一個連接的弧，對底部端點執行相同操作。 \n      \n  9.點擊側面工具欄中的約束( Constraints )，並確認所有弧在其端點處相切( Tangent )。  10.點擊原點上的點，並點擊固定約束( Fixed ) 。  11.點擊快速尺寸( Rapid Dimension ) ，並約束每個圓弧的半徑( Radius )尺寸，     以使末端的兩個圓弧分別為1.5和0.5英寸，兩個中間的圓弧分別為18和15英寸，如圖所示。        12.點擊完成標誌( Finish Flag ) ，即完成。 3.6 練習 \xa03.6.1 圓形底座(Circular Base)\xa0\xa0 \n 操作影片: \n   3.6.2 固定器(Sketching of a Holder) \n', 'tags': '', 'url': 'Week12.html'}, {'title': 'Week13', 'text': "Webot  tutorial\xa0 1\xa0 \n 操作影片: \n \n 1.開啟Webots，創建一個新的世界，並將檔名改為 my_first_simulation。 2.更改場地尺寸及牆的高度。 3.加入木箱，並更改木箱尺寸與初始高度。 4.利用ctrl+C.ctrl+V複製出三個箱子，以shift+滑鼠左鍵拖移，完成後存儲。 5.加入一台機器，加入後儲存，再按開始鍵，檢查機器是否作動。 6.進行物理施壓測試，使用Alt+滑鼠左鍵拖移機器。 7.使用Alt+滑鼠左鍵拖移木箱，會發現木箱無法拖移，需給予木箱重量才能拖移。 8.更改效能。 9.創建控制程式，點選python，並命名為e-puck_go_forward。 10.更改程式碼後存儲，進行測試。 11.測試完後，即完成。 \n Webot \xa0 tutorial 2 \n 1.開啟tutorial 1的範本，並另存為obstacles.wbt。 2.刪除原先的場地，並新增一個新場地(Floor)，將場地尺寸設定為(1,1)且無牆壁。 3.新增實體節點(Solid)，在children中新增一個形狀節點(Shape)。 4.在形狀幾何(geometry)中新增球形節點(Sphere)。 5.在形狀外觀(appearance)中新增幾何圖形節點(PBRAppearance)，並將當中的屬性(metalness)改為0.粗糙度(roughness)改為1。 6.在實體節點(Solid)中的實體邊界(bounding Object)中新增形狀節點(Shape)。 7.在實體節點(Solid)中的物理性質(physics)中新增物理節點(physics)。 8.將實體節點(Solid)平移到機器前(0,0.2,-0.2)，完成後存儲。 9.將球體更改尺寸及座標(radius為0.05，subdivision為2)。 10.設定各節點名稱已做def use機制設定(geometry def BALL_GEOMETRY).(將boundingObject目錄下清空，並新增USE / BALL_GEOMETRY)(Solid def ball)。 11.以相同方式新增四面牆壁。 12.將各牆壁中的節點命名及設定尺寸.設定位置。 13.完成後存儲，並模擬及操作完畢。 \n \n V-rep bubbleRob外型設定 \n 操作影片: 1.開啟V-rep，點選新增球體(Menu-add-Primitive shape-Sphere)，並給予球體尺寸(X-size為0.2) 2.點選crtl+space會開始模擬。 3.利用crtl+C.crtl+V複製一樣的球，接著按crtl+space做碰撞測試，會看到兩顆球彈走。 4.再來要將球體新增外觀及功能。 5.點選球體，並點選平移，在Z軸上輸入0.02後，點選平移按鈕，會看到球體上升。 (Sphere-Object/item shift-translation-Z 0.02-Translate selection) 6.點選左邊場景結構中的球體，並改名為bubbleRob。 7.新增感測器在球體上(Menu-add-Proximity sensor- Cone type) 8.點選感測器，並點選旋轉，在Y軸及Z軸上輸入90，點選選轉扭，更改感測器角度。 (Proximity sensor-Object/item rotate-Rotation-Y 90. Z 90.-Rotate selection) 9.點選感測器，並點選平移，在X軸輸入0.1;Z軸輸入0.12,更改感測器位置。 (Proximity sensor-Object/item shift-translation-X 0.1. Z 0.12.-Translate selection) 10.雙擊左邊場景結構中的感測器，並點擊顯示體積參數(Show volume parameter )，將偏移量(Offest)改為0.005，角度(Angle)改為30，範圍(Range)改為0.15。 11.點擊顯示檢測參數(Show detection parameters),並取消不允許檢測之項目(item Don't allow detections)。 12.點選左邊場景結構中的感測器，並改名為bubbleRob_sensingNose。 13.選取球體與感測，並點選編輯中的Make last selected object parent，使球體與感測器結合。 14.再來將球體加上輪子，新增一個尺寸為0.08x0.08x0.02的圓柱，並設定圓柱的位置（0.05,0.1,0.04），完成後將其X軸方向選轉90度。 15.將輪子命名為bubbleRob_leftWheel，並複製一個命名為bubbleRob_rightWheel，將Y軸座標側為-0.1。 16.接著新增馬達(Menu bar-Add-Joint-Revolute)，將馬達位置調至輪子中心，並命名為bubbleRob_leftMotor。 17.雙擊馬達，點選Show dynamics properties dialog，並勾選Motor enabled及Lock motor when target velocity is zero。 18.以相同步驟完成bubbleRob_rightMotor。 19.將馬達固定在輪子上，並將馬達固定在球體上。 20.新增第三支撐點(直徑0.05的球體)，並平移球體X-0.07，完成後命名為bubbleRob_slider。 21.新增傳動器(Menu bar-Add-Force sensor)，並設定位置X -0.07. Z 0.05.，完成後命名為bubbleRob_connection。 22.將傳動器與支撐點連接，並跟主體連接，即完成外型設定。 \n Webots及Vrep之介紹與使用心得 \n Webots \n \n Webots是一款用於移動機器人建模、編程、和仿真的開發環境軟件。在Webots中，用戶可以設計各種複雜的結構，不管是單機器人還是群機器人，相似的或者是不同的機器人都可以很好的交互；也可以對每個對象屬性如形狀、顏色、紋理、質量等進行自主選擇。除了可以在軟件中對每個機器人選擇大量的虛擬傳感器和驅動器，也可以在這種集成的環境或者是第三方的開發環境對機器人的控制器進行編程。機器人的行為完全可以通過現實環境中進行驗證，同時控制器的代碼也可以實現商業化機器人的移植。 \n Vrep \n \n Vrep是一款動力學仿真軟件，主要定位於機器人仿真建模領域，可以利用內嵌腳本、ROS節點、遠程API客戶端等實現分佈式的控制結構，是非常理想的機器人仿真建模的工具。控制器可以採用C/C++, Python, Java, Lua, Matlab, Octave or Urbi等語言實現。 \n 使用心得 \xa0 我覺得Webots在設定零件及功能設定上來得比Vrep簡單許多，在場景模擬逼真度也比Vrep好，但Vrep在零件編排的結構上比Webots來的詳細，在遠端控制方面也比Webots，兩種各有優缺點，使用方面見仁見智。 \n Week13報告影片 \n", 'tags': '', 'url': 'Week13.html'}, {'title': 'Week14', 'text': 'Webots tutorial 3 \n \n 1.開啟Webots Tutorial 2的檔案，並另存為appearance.wbt。 2.修改牆壁的外觀，在第一面牆的Appearance中的baseColor改成藍色.metalness改0.roughness改為0.5(若use-der機制有完成設定，其餘3面也會更著變動)。 3.將球體新增紋路，在Appearance的baseColorMap中新增ImageTexture。 4.在ImageTexture的url新增WEBOTS_HOME / projects / default / worlds / textures / red_brick_wall.jpg 路徑下的圖片。 5.可使用View / Wireframe Rendering菜單項以線框模式查看仿真和恢復純渲染模式：View / Plain Rendering。 6.查看坐標系：View / Optional Rendering / Show Coordinates System (Ctrl + F1)。 7.查看距離傳感器的光線：View / Optional Rendering / Show DistanceSensor Rays (Ctrl + F10)。 \n Webots tutorial 4 \n \n 1.開啟Webots Tutorial 3的檔案，並另存為collision_avoidance.wbt。 2.新增一個控制程式碼檔案，並命名為e-puck_avoid_collision。 3.進行自動迴避程式碼加入。 4.複製程式碼並貼上，存儲後執行，能看到機器自動迴避。 \n Webots tutorial 5 \n \n 1.開啟Webots Tutorial 4的檔案，並另存為compound_solid.wbt。 2.新增啞鈴，先新增Solid，並def為dumbbell。 3.在physics中新增Physics，接著在children中新增Group，並在Group中的children新增Shape兩個Transform。 4.在Shape中的geometry新增cylinder，並將height改為0.1及radius改為0.01。 5.接著在Transform中的children新增Shape，並在底下的geometry新增Sphere，然後將底下的radius改為0.03。 6.將Transform底下的translation Y軸改為0.05。 7.依相同方式完成另一個Transform，並將translation Y軸改為-0.05。 8.接著使用def-use機制將Group def GO，並將boundimgObject新增use GO。 9.接著調整啞鈴的物理性質，將phusics中的mass改為2及density改為-1.centerOfMass Y軸改為0.01。 10.調整啞鈴位置，將rotation中的數值改為(1,0,0,1.5708)，且translation Y軸改為0.03。 11.接著設定啞鈴的物理屬性，將Worldlnfo中的contactProperties新增ContactProperties，並將底下的coulombFriction改為0。 12.接著將material1和material2改為dumbbell。 13.設定完測試，即完成。 \n Webots tutorial 6 \n \n 1.開啟Webots Tutorial 5的檔案，將箱子.機器.球.啞鈴刪除後，另存為4_wheels_robot.wbt。 2.新增Robot，並將底下的physics加入Physics。 3.在Robot下的children中新增Shape，並def BODY。 4.將Robot下的boundingObject中新增use BODY。 5.接著將Shape下的geometry新增Box，並將尺寸定為(0.1,0.05,0.2)。 6.接著將Shape下的appearance新增PBRAppearance，並將顏色改為紅色.metalness改為0。 7.在Robot下的children中新增Hingejoint(複製三個)，並在底下的jointParameter中新增HingeJointParameter。 8.接著在Hingejoint中的device新增RotationalMotor，並且在Hingejoint中的endPoint新增Soild。 9.將Soild def WHEEL1，並在底下的children新增Shape，且def WHEEL。 10.在endPoint底下的physics加入Physics，並def WHEEL_PH。 11.接著在Shape下的geometry中新增Cylinder，並在Shape下的appearance新增PBRAppearance。 12.將appearance中的顏色改為綠色.metalness改為0。 13.接著調整軸心位置，將geometry中的radius改為0.04.height改為0.02。 14.將Hingejoint下的boundingObject新增use WHEEL，並將endPoint下的name改為wheel1。 15.調整輪胎位置，將translation中的數值調為(0.06,0,0.05)，並將rotation的數值調為(0,0,1,1.5708)。 16.接著將HingeJointParameter下的anchor中的數值調為(0.06,0,0.05)。 17.將RotationalMotor中的name改為wheel1。 18.接著將其餘三個輪胎的數值改動.名稱改動，並用use-der機制完成。 19.新增感測器，在Robot下的children中新增DistanceSensor,並在DistanceSensor下的children新增Shape。 20.接著在Shape下的geometry新增Box.appearance新增PBRAppearance，並將appearance下的metalness改為0.顏色改為藍色。 21.接著更改大小,將geometry中的size數值改為(0.01,0.01,0.01)。 22.接著更改感測器位置，將DistanceSensor下的translation中的數值改為(0.03,0,0.1)，並且將rotation中的數值改為(0,1,0,0.3)。 23.接著複製感測器，將其translation中的數值改為(-0.03,0,0.1).rotation中的數值改為(0,1,0,-1.8)。 24.將感測器的name改為ds_left及ds_right，並將調整Robot高度為(0,0.05,0)，完成設定後存儲。 25.接著加入程式碼，選擇Python，並命名為4_wheels_collision_avoidance。 26.複製程式碼貼上並存儲，並且將conteoller選用4_wheels_collision_avoidance。 27.接著開始模擬，運作正常及完成。', 'tags': '', 'url': 'Week14.html'}, {'title': 'Week15〜Week18', 'text': 'Week15 \n 個人學習成果影片 \n \n 個人 心得 ： 在這幾週，我了解很多關於各繪圖軟件的發展及用途。優缺點，在NX的部分，練習很多2D輪廓的佈局，其中包含一些曲線輪廓要如何佈局。幾何特徵如何設定，使我在NX繪圖更加的了解。在模擬程序方面用了Webots.Vrep，從放置零件到參數設置， 了解到要模擬程序是多麼困難，但在這幾週的例題練習，也讓我了解了兩個一個模擬程式許多。 \n Week16 \n 越野車零組件設計繪圖查驗 \n \n 個人心得: 這周任務是做簡化版越野車繪製及轉檔，以之前練習過的solvespace例題用過的各種指令來畫，很快速就完成了，只是在設計連結的部分思考了比較久，因為要思考後面轉檔完，如何將零件分開，讓我在這方面更了解了一些。 \n Week17 \n Week18', 'tags': '', 'url': 'Week15〜Week18.html'}, {'title': 'Note', 'text': 'Solvespace功能表說明 \n Sketch 草圖 \n \n Constrain 約束 \n \n New Group 組成 \n \n View 視角 \n \n', 'tags': '', 'url': 'Note.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n \xa0', 'tags': '', 'url': 'Develop.html'}]};