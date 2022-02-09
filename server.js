// 가져오기
// 설정하기
// 사용하기

const express = require(`express`)
const nunjucks = require(`nunjucks`)
const app = express()

app.set(`view engine`,`html`)
nunjucks.configure(`views`,{
    express:app,
})

app.use(express.urlencoded({extended:true,}))

const list = [
    {
        subject:'안녕하세요_list',
        username:'web7722_list',
        date:'2022-02-03'
    },
    {
        subject:'안녕하세요_list2',
        username:'web7722_list2',
        date:'2022-02-03'
    },
    {
        subject:'안녕하세요_list3',
        username:'web7722_list3',
        date:'2022-02-03'
    },
    {
        subject:'안녕하세요_list4',
        username:'web7722_list4',
        date:'2022-02-03'
    },
    {
        subject:'안녕하세요_list5',
        username:'web7722_list5',
        date:'2022-02-03'
    }
]

app.get(`/`,(req,res)=>{
    res.render(`index.html`)
})



// board

app.get(`/board/list`,(req,res)=>{
    res.render(`board_list.html`,{  
        content:list,
    })
})



app.get(`/board/write`,(req,res)=>{
    console.log(list)
    res.render(`board_write.html`)
})

app.post(`/board/write`,(req,res)=>{
    let board = {...req.body}
    console.log(list,board)
    list.push(board)
    console.log(list)
    res.redirect(`/board/list`)
})

app.get(`/board/view`,(req,res)=>{
    console.log(list)
    res.render(`board_view.html`)
})

app.listen(3000,()=>{
    console.log(`server start 3000`)
})

