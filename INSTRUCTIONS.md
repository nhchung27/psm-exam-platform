# Hướng dẫn chạy ứng dụng

Để chạy ứng dụng này, bạn cần một web server đơn giản để phục vụ các file. Dưới đây là một vài cách để làm điều đó:

## Cách 1: Sử dụng `live-server` (yêu cầu Node.js)

1.  Mở terminal của bạn.
2.  Cài đặt `live-server` toàn cục bằng npm (nếu bạn chưa có):
    ```bash
    npm install -g live-server
    ```
3.  Di chuyển đến thư mục của ứng dụng:
    ```bash
    cd "/Users/chungnguyen/Documents/PSM I & II Materials/App luyện thi"
    ```
4.  Chạy `live-server`:
    ```bash
    live-server
    ```
    `live-server` sẽ tự động mở ứng dụng trong trình duyệt của bạn.

## Cách 2: Sử dụng Python

Nếu bạn đã cài đặt Python, bạn có thể sử dụng module `http.server` tích hợp sẵn.

1.  Mở terminal của bạn.
2.  Di chuyển đến thư mục của ứng dụng:
    ```bash
    cd "/Users/chungnguyen/Documents/PSM I & II Materials/App luyện thi"
    ```
3.  Chạy web server:

    *   **Python 3:**
        ```bash
        python3 -m http.server
        ```
    *   **Python 2:**
        ```bash
        python -m SimpleHTTPServer
        ```

4.  Mở trình duyệt của bạn và truy cập vào địa chỉ `http://localhost:8000`.

Sau khi chạy một trong các lệnh trên, ứng dụng sẽ được mở trong trình duyệt của bạn.