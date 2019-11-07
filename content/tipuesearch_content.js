var tipuesearch = {"pages": [{'title': 'Weeks', 'text': 'Week2~Week5 \n Week6~Week9 \n Week10~Week14 \n Week15~Week18 \n', 'tags': '', 'url': 'Weeks.html'}, {'title': 'Week2~Week5', 'text': '\n Week2 \n 建立個人倉儲cad2019及進行網站編譯 \n \n 1.下載 2019Fall可攜套件.7z \xa0 (編譯\xa0 Solvespace 用)，完成後開啟。  2.登入個人github帳號，創建新的倉儲cad2019。 3.進入要存放資料夾tmp。 4.輸入 git clone \xa0 https://github.com/s40723227/cad2019 \xa0複製 個人倉儲至資料夾 。 5.輸入git submodule add https://github.com/mdecourse/cmsimde.git 取得子模組資料。  6.將up_dir的所有項目複製到cad2019。 7.完成後，進入cmsimde，輸入python -m pip install flask_cors 更改模組。 8.完成後，python wsgi.py 開始編輯倉儲(login密碼為 admin )。 9.編輯完成後，git status  ->  git add .  ->  git commit -m "XXX"  ->  git push。\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  \n Week3 \n 根據 Solvespac e 編譯引導，進行編譯後並啟動solvespcae \n \n 編譯步驟 \n 1.\xa0\xa0 先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe。 2.git version 查驗 git 版本(檢查版本是否為git 2.13 版本以上)。 3.輸入git clone\xa0 --recurse-submodules 取得所有子模組資料。 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace。 4.編譯Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 line713: # list(APPEND ANGLE_DEFINITIONS \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 line714: # "-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() 5.手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 。  6.cd solvespace -> cd extlib -> cd libpng -> mkdir build -> cd build -> cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release -> mingw32-make 。 7.重新命名libpng.dll.a為libpng_static.a 並複製到Y:\\msys64\\mingw64\\lib目錄下。 8.回到solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 輸入cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release -> mingw32-make。 9.開啟solvespcae即完成程式編譯。 \n \xa0Week4 \n 進行網站更新及拍攝操作影片(上字幕.加浮水印) \n 1.使用的錄影軟體  ShareX \n \n 2.使用的剪輯軟體(上字幕.加浮水印)  Arctime \n \n 3.課程浮水印\xa0 KMOL \n \n Week5 \n 學員互評及自評，solvespcae基本圖面繪製及組裝 \n \n 步驟一(支架): 開啟圖檔，使用快捷鍵R畫出矩形->點選兩線段，使用快捷鍵Q使兩線段等長->使用快捷鍵D定義線段長度->使用快捷鍵shift+X擠出->點選two-siderider雙面擠出->使用快捷鍵D定義擠出長度->即完成 \n 步驟二(桌腳): 方法與步驟一相同，只有擠出長度不同。 \n 步驟三(支架與桌腳組合): 開啟圖檔，使用快捷鍵shift+I叫出支架及桌腳的圖檔->點選桌腳的座標系X與系統的座標系Y，再使用快捷鍵X使兩座標系同方向->點選兩接合點使用快捷鍵O使兩點接合->以相同方法完成整體支架。 \n 步驟四(桌面): 方法與步驟一相同，只有矩形尺寸及擠出長度不同。 \n 步驟五(整體支架與桌面組合): 方法與步驟三相同。 \n 備註:零件圖檔更改尺寸及顏色，組合圖也會更著改變。 \n \n 成品圖 \n \n', 'tags': '', 'url': 'Week2~Week5.html'}, {'title': 'Week6~Week9', 'text': 'Week6 \n 1.機械設計工程系-電腦輔助設計實習\xa0 W6 任務一參數化零組件繪製 \n \n (1)繪製基本零件(車體底盤.輪子.軸.支撐軸):使用線條(S)及圓(R)畫出所需外型，再使用草圖展出(Shift+X)畫出展出或切除尺寸。 (2)組裝零件:使用(X)讓零件法線方向相同後，使用(O)讓兩零件之兩點接合，即完成。 \n 成品圖 \n \n 2. 機械設計工程系-電腦輔助設計實習 W6 任務二網際 V-rep 模型控制 \n \n (1)下載 \xa0 V-rep 3.6.1 rev 4.7z \xa0及 web_vrep2.zip \xa0( local )並解壓縮到隨身系統裡。 (2)打開vrep.exe並開啟web_vrep2裡的two_wheeler.ttt。 (3)打開web_vrep2裡的app.py並執行，進入到http://127.0.0.1:5000/。 (4)按開始之後，就可以控制車了。 \n 3.機械設計工程系-電腦輔助設計實習 W6 任務三新增啟動與停止按鈕 \n \n (1)開啟D:\\web_vrep2\\templates中的contrils.html，隨便複製一行當作修改內容，把up改成start及stop。 (2)接著開啟D:\\web_vrep2中的vrep_linefollower.py，新增啟動與停止的指令程式碼，完成後即可操作啟動與停止鈕。 \n Week7 \n Solvespace 編譯與參數繪圖驗證 \n 1.Solvespace 編譯-加入學號 \n \n (1)到個人隨身系統的solvespace\\build\\scr\\CMakeFiles\\solvespace.dir底下，找到solvespace.cpp.obj檔案並刪除。 (2)到solvespace\\scr底下，找到solvespace.cpp並用編譯器開啟，利用ctrl+F搜尋GPL找到This is solvespace字串，並在後面加上is compiled by 學號。 (3)到start_mdecourse，輸入cd solvespace\\build->mingw32-make，等待完成後，開啟solvespace.exe案Help->About就完成了。 \n 編譯-加入學號圖 \n \n 2. Solvespace \xa0參數繪圖驗證 \n (1) \n \n 成品圖 \n \n (3) \n \n 成品圖 \n \n (4) \n \n 成品圖 \n \n (6) \n \n 成品圖 \n \n (7) \n \n 成品圖 \n \n (8) \n \n 成品圖 \n \n (10) \n \n 成品圖 \n \n (11) \n \n 成品圖 \n \n (12) \n \n 成品圖 \n \n (13) \n \n 成品圖 \n \n (14) \n \n 成品圖 \n \n (15) \n \n 成品圖 \n \n (16) \n \n 成品圖 \n \n (18) \n \n 成品圖 \n \n Week8 \n 1.啟用CMSiMDE中的網誌系統 \n \n (1)開啟 start_mdecourse.bat ，輸入 leo 。 (2)將個人倉儲中的 config 內的 pelican.leo 用leo開啟。 (3)到個人網站，將blog的網址複製到 @path . ./  ->  Pelican設定  ->  遠端中SITEURL 。 (4)再將底下的 DISQUS_SITENAME 改為自己的學號。 (5)在 local_blog 點選右鍵->點選 goto script ，將指令複製起來後，存儲。 (6)到個人倉儲下輸入指令。 (7)完成。 \n 2.以ssh對Github連線 \n \n (1)到Y槽(Data)中的 portablegit 將 sh_for_solvespace 檔案複製並修改成 sh.exe 。 (2)開啟 start_mdecourse.bat 並輸入 sh 及 ssh-keygen -t rsa -b 4096 -C "使用者學號" 產生key，打上key的產生區域。 (3)下 載 putty.7z SSH 連線工具組 ， 利用其中的  puttygen.exe  將上述建立的 Openssh keys 轉為 putty 可以辨識的格式。 (4)修改啟動的  start.bat  加入下列設定: set GIT_HOME=%Disk%:\\portablegit\\bin\\  set GIT_SSH=%Disk%:\\putty\\plink.exe 修改完成後,重新啟動。 (5) 將要使用 ssh 連線的倉儲 .git 中的 config 檔案中的 url 設定改為 ssh 連線格式: url = git@github.com:倉儲名稱/cad2019.git 。 (6) 開啟  putty.exe  建立一個 session 名稱為 github.com, 其中指定 Connection -> Proxy 與 Connection -> SSH -> Auth。 (7)將下列字串加入編輯器並存儲到 y:\\home\\.ssh\\config : Host github.com  \xa0 \xa0 User git  \xa0 \xa0 Port 22  \xa0 \xa0 Hostname github.com  \xa0 \xa0 TCPKeepAlive yes  \xa0 \xa0 IdentitiesOnly yes (8) 將所建立的OpenSSH格式的public key內容,送到Github帳號 SSH settings 中。 (9)完成。 \n 3.導入Webots \n \n (1)到 http://mde.tw/cad2019/content/Webots.html 中下載 Webots_2019b_rev1.7z \xa0解壓縮到Y槽(Data)。 (2)將隨身系統中的start_mdecourse.bat複製一個並改名start_mdecourse_webots.bat。 (3)打開編譯器，將start_mdecourse_webots.bat設定執行路徑及啟動指令。 (4)完成後，即可開啟Webots。 \n Week9', 'tags': '', 'url': 'Week6~Week9.html'}, {'title': 'Week10~Week14', 'text': 'Week10 \n Week11 \n Week12 \n Week13 \n Week14 \n', 'tags': '', 'url': 'Week10~Week14.html'}, {'title': 'Week15~Week18', 'text': 'Week15 \n Week16 \n Week17 \n Week18 \n', 'tags': '', 'url': 'Week15~Week18.html'}, {'title': 'Note', 'text': 'Solvespace功能表說明 \n Sketch 草圖 \n \n Constrain 約束 \n \n New Group 組成 \n \n View 視角 \n \n', 'tags': '', 'url': 'Note.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n \xa0', 'tags': '', 'url': 'Develop.html'}]};