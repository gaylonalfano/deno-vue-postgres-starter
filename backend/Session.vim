let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Code/deno-vue-postgres-starter/backend
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +1 ~/Code/deno-vue-postgres-starter/backend
badd +23 docker-compose.yml
badd +3 .env
badd +1 src/app/server.ts
badd +10 src/app/controllers/user.controller.ts
badd +45 src/app/db/db.ts
badd +1 src/app/routes/user.routes.ts
badd +52 src/app/repositories/user.repository.ts
badd +9 src/app/services/user.service.ts
badd +2 src/app/repositories/message.repository.ts
badd +2 src/app/services/messages.service.ts
badd +6 src/app/controllers/message.controller.ts
badd +8 src/app/routes/message.routes.ts
badd +5 src/app/services/services.module.ts
badd +6 src/app/controllers/controllers.module.ts
badd +7 src/app/services/message.service.ts
badd +2 src/app/types/message.type.ts
badd +1 src/app/types/user.type.ts
badd +4 src/app/repositories/repositories.module.ts
badd +0 src/app/routes/routes.module.ts
badd +1 src/app/db/create.sql
badd +5 src/app/db/sql/create-users-table.sql
badd +2 src/app/db/sql/create-messages-table.sql
badd +0 src/app/db/sql/insert-users.sql
badd +5 src/app/db/sql/test-db-create-tables.sql
badd +1 src/app/db/sql/test-db-insert-users.sql
badd +1 src/app/db/sql/test-db-insert-posts.sql
badd +20 src/app/db/sql/test-db-insert-comments.sql
argglobal
%argdel
$argadd ~/Code/deno-vue-postgres-starter/backend
set stal=2
edit src/app/server.ts
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 23 - ((22 * winheight(0) + 20) / 41)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
23
normal! 0
lcd ~/Code/deno-vue-postgres-starter/backend
tabedit ~/Code/deno-vue-postgres-starter/backend/src/app/routes/routes.module.ts
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 7 - ((6 * winheight(0) + 20) / 41)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
7
normal! 0
lcd ~/Code/deno-vue-postgres-starter/backend
tabedit ~/Code/deno-vue-postgres-starter/backend/src/app/controllers/message.controller.ts
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 9 - ((8 * winheight(0) + 20) / 41)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
9
normal! 0
lcd ~/Code/deno-vue-postgres-starter/backend
tabedit ~/Code/deno-vue-postgres-starter/backend/src/app/db/sql/insert-users.sql
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 1 - ((0 * winheight(0) + 20) / 41)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
lcd ~/Code/deno-vue-postgres-starter/backend
tabedit ~/Code/deno-vue-postgres-starter/backend/src/app/db/sql/test-db-insert-posts.sql
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 3 - ((2 * winheight(0) + 20) / 40)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
3
normal! 0
lcd ~/Code/deno-vue-postgres-starter/backend
tabnext 5
set stal=1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFc
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
