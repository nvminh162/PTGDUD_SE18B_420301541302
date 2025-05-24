# Tutorial @nvminh162 (Simple Version) - King Of Terminal Script

## `BACK-END (use json-server)`
- Create folder (Replace the name to suit your needs.)
```
mkdir nguyenvanminh-22003405-json-server
```

```
cd nguyenvanminh-22003405-json-server
```

- Initial project
```
npm init -y
```

- Install library
```
npm install json-server
```

- Change key `scripts` your file `package.json` to run to use script (`npm run server`)
```
"scripts": {
    "server": "json-server --watch db.json --port 3000",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

- Create `.gitignore` (optional)
```
echo "node_modules" > .gitignore
```

```
echo "package-lock.json" >> .gitignore
```

- Create `db.json` and paste to file `db.json` to mock data
```
echo "" > db.json
```
```
{
    "posts": [
        { "id": "1", "title": "a title", "views": 100 },
        { "id": "2", "title": "another title", "views": 200 }
    ],
    "comments": [
        { "id": "1", "text": "a comment about post 1", "postId": "1" },
        { "id": "2", "text": "another comment about post 1", "postId": "1" }
    ],
    "profile": {
        "name": "typicode"
    },
    "nvminh162": {
        "name": "nvminh162",
        "age": 21
    }
}
```

- Create `backup-data.json` to backup data when you (optional)
```
echo "" > backup-data.json
```

- Run test Server
```
npm run server
```

*NOTE*
- Access your API at http://localhost:3000
- Available Routes
```
GET /posts
GET /posts/1
POST /posts
PUT /posts/1
PATCH /posts/1
DELETE /posts/1
```

## `FRONT-END (use redux-toolkit)`

### 1. Initial Project with Vite
```
npm create vite@latest
```

### 2. Install dependencies default
```
cd nguyenvanminh-22003405-rtk
```
```
npm i
```

### 3. Install tailwindcss (copy full -> paste)
- Install library
```
npm install tailwindcss @tailwindcss/vite
```
- Setup file `vite.config.js`
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```
- setup `file index.css`
```
@import "tailwindcss";
```

### 4. Install react-router-dom
```
npm i react-router-dom
```

### 5. Redux
```
npm i react-redux
```
```
npm i @reduxjs/toolkit
```
```
echo "VITE_URL=http://localhost:3000/products" > .env
```

### 6. Install toastify (notify message)
```

npm i react-toastify
```

### 7. Install uuid (create random id -> LIKE MONGODB)
```
npm i uuid
```

### 8. Loading Spinner (https://www.davidhu.io/react-spinners/)
```
npm install react-spinners
```

*NOTE*
```
Bài này dùng kỹ thuật base64 để lưu ảnh
```

*Script để cài nhanh rất cả các thư viện trên*
```
npm install @reduxjs/toolkit @tailwindcss/vite react react-dom react-redux react-router-dom react-spinners react-toastify tailwindcss uuid
```

**GOOD YOUR EXAM!**

@nvminh162

===

Nội dung thi: Redux Tool kit
React Router
Tailwind CSS
Hooks và Custom Hook
Fetch API
Json server để tạo API

https://www.mockaroo.com/docs

https://mockapi.io/

===

```
import { ClockLoader, MoonLoader, GridLoader } from "react-spinners";

if (isLoading)
    return (
      <div className="flex justify-center items-center mt-20">
        <MoonLoader />
        <div className="font-bold ml-3">Loading ...</div>
      </div>
    );
if (error)
    return (
      <div className="flex justify-center items-center mt-20">
        <ClockLoader />
        <div className="font-bold ml-3">Lỗi API: {error}</div>
      </div>
    );

if (list.length === 0)
    return (
      <div className="flex justify-center items-center mt-20 space-x-2">
        <GridLoader />
        <div className="font-bold ml-3">Chưa có sản phẩm trong kho</div>
        <br />
        <Link className="hover:underline" to={"/add-product"}>
          Thêm sản phẩm
        </Link>
      </div>
    );
```