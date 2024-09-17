// Yeu cau module Express
const express = require("express");

//Tao ung dung Express
const app = express();

//Thiet lap cong ma server se lang nghe
const port = 3000;

//Middleware de phan tich du lieu tu request
app.use(express.urlencoded({ extended: true }));

//middleware de phan tich du lieu tu JSON tu đoy cua yeu cau
//dieu nay cho phep Express hieu va xu ly du kieu JSON tu request
app.use(express.json());

//middleware de phuc vu file tinh (HTML, CSS, JS) tu muc public
app.use(express.static('public'));

//middleware de phan tich du lieu tu form HTML
app.use(express.urlencoded({ extended: true }));

//dinh nghia route chinh tra ve trang chao mung khi ng dung truy cap 
app.get('/api/v1/check', (req, res) => {
    res.send("Chao mung ban den voi ung dung web dong!");});

//route Post nhan du lieu tu client va tra ve phan hoi
//khi client gui du lieu den dia chi 'submit' voi phuong thuc post
//Route nay se nhan du lieu tu form, them vao mang 'names' va tra ve phan hoi JSON
app.post("/api/v1/submit", (req, res) => {
    //lay thuoc tinh 'name'
    const { name } = req.body;

    // neu 'name' ton tai tra ve chao mung voi ten dang nhap
    if (name) {
        res.json({ message: `Chao mung ${name}!` });
    } else {
        // neu 'name' khong ton tai, tra ve phan hoi loi
        res.status(400).json({ message: "Vui long cung cap ten dang nhap!" });
    }
    
});

// server lang nghe tai cong 3000
//khi server bat dau chay, no se lang nghe cac yeu cau tu cong da chi dinh
app.listen(port,() =>{
    console.log(`Ung dung dang chay tai http://localhost:${port}`);
})
