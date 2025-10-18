let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Documents/WCSERVER/Finals/DineEase/frontend
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +9 src/main.ts
badd +30 src/views/MenuView.vue
badd +16 src/App.vue
badd +14 src/components/TestNav.vue
badd +15 src/views/SignInView.vue
badd +65 src/components/ReservationForm.vue
badd +12 src/views/ReservationView.vue
badd +1 src/components/ui/input/Input.vue
badd +46 src/views/SignUpView.vue
argglobal
%argdel
edit src/views/SignUpView.vue
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 72 + 72) / 145)
exe 'vert 2resize ' . ((&columns * 72 + 72) / 145)
argglobal
balt src/views/SignInView.vue
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 46 - ((16 * winheight(0) + 15) / 30)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 46
normal! 036|
lcd ~/Documents/WCSERVER/Finals/DineEase/frontend
wincmd w
argglobal
if bufexists(fnamemodify("~/Documents/WCSERVER/Finals/DineEase/frontend/src/components/ReservationForm.vue", ":p")) | buffer ~/Documents/WCSERVER/Finals/DineEase/frontend/src/components/ReservationForm.vue | else | edit ~/Documents/WCSERVER/Finals/DineEase/frontend/src/components/ReservationForm.vue | endif
if &buftype ==# 'terminal'
  silent file ~/Documents/WCSERVER/Finals/DineEase/frontend/src/components/ReservationForm.vue
endif
balt ~/Documents/WCSERVER/Finals/DineEase/frontend/src/views/ReservationView.vue
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 42 - ((13 * winheight(0) + 15) / 30)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 42
normal! 013|
lcd ~/Documents/WCSERVER/Finals/DineEase/frontend
wincmd w
exe 'vert 1resize ' . ((&columns * 72 + 72) / 145)
exe 'vert 2resize ' . ((&columns * 72 + 72) / 145)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
