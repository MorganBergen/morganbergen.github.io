# the vi, ex, and vim editors


`vi` is the classic screen-editing program for Unix operating systems.  
`ex` is a command-line text editor that is a subset of `vi`.
`neovim` is a fork of `vim` that aims to improve user experience, plugins, and GUIs.

## `neovim`

`neovim` has multiple different modes, which are accessed by pressing the `Esc` key.  

Here are the following modes
	- `Normal` mode is the default mode, it is used for moving around the file and editing text.
	- `Insert` mode is used for inserting text into the file.
	- `Visual` mode is used for selecting text.
	- `Command-line` mode is used for executing commands.
	- `Ex` mode is used for executing ex commands.

A user can invoke powerful editing capailities by using the `:` key to enter `Command-line` mode.
The ~/.config/nvim/init.vim file is used to configure `neovim`
That init.vim file is the start up file which `nvim` reads at the beginning of your editing session.
