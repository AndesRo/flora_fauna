import os
import sys
import urllib.request

def download_pip():
    url = "https://bootstrap.pypa.io/get-pip.py"
    file_path = "get-pip.py"
    urllib.request.urlretrieve(url, file_path)
    return file_path

def main():
    file_path = download_pip()
    os.system(f"python {file_path}")
    os.remove(file_path)

if __name__ == "__main__":
    main()
