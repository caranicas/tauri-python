import PyInstaller.__main__

PyInstaller.__main__.run([
    './src/image.py',
    '--onefile',
    '--name=image-x86_64-pc-windows-msvc.exe',
])