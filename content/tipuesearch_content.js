var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Week', 'text': 'Week1\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n 中秋連假 \n Week2 \n 建立個人倉儲cad2019及編輯 \n 1.下載 2019Fall可攜套件.7z \xa0(編譯\xa0 Solvespace 用)，完成後開啟。  2.登入個人github帳號，創建新的倉儲cad2019。 3.進入要存放資料夾tmp。 4.輸入 git clone \xa0 https://github.com/s40723210/cad2019 \xa0複製 個人倉儲至資料夾 。 5.輸入git submodule add https://github.com/mdecourse/cmsimde.git 取得子模組資料。6.進入cmsimde，輸入python -m pip install flask_cors 更改模組。 7.完成後，python wsgi.py 開始編輯倉儲(login密碼為admin)。 8.編輯完成後，git status  ->  git add .  ->  git commit -m "XXX"  ->  git push。\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  \n Week2 \n 根據 Solvespac e 編譯引導，進行編譯後並啟動solvespcaesolvespcae.exeexe。 \n 編譯步驟 \n 1.\xa0\xa0 先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe。 2.git version 查驗 git 版本(檢查版本是否為git 2.13 版本以上)。 3.輸入git clone\xa0 --recurse-submodules 取得所有子模組資料。 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace。 4.編譯Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 line713: # list(APPEND ANGLE_DEFINITIONS \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 line714: # "-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() 5.手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 。 6.cd solvespace -> cd extlib -> cd libpng -> mkdir build -> cd build -> cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release -> mingw32-make -> rename\xa0libpng.dll.a to libpng_static.a and copy to\xa0Y:\\msys64\\mingw64\\lib。 7.回到solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 輸入cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release -> mingw32-make。', 'tags': '', 'url': 'Week.html'}]};