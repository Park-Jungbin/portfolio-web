#!/usr/bin/env python3
"""
Simple HTTP server for local development
Run with: python server.py
"""

import http.server
import socketserver
import webbrowser
import os
from pathlib import Path

PORT = 8080

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def main():
    # Change to the directory containing this script
    os.chdir(Path(__file__).parent)
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"서버가 포트 {PORT}에서 실행 중입니다.")
        print(f"브라우저에서 http://localhost:{PORT} 를 열어주세요.")
        print("서버를 중지하려면 Ctrl+C를 누르세요.")
        
        # 자동으로 브라우저 열기
        webbrowser.open(f'http://localhost:{PORT}')
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n서버를 중지합니다.")
            httpd.shutdown()

if __name__ == "__main__":
    main()