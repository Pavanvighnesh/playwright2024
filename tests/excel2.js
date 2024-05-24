const Exceljs=require('exceljs')

const workbook= new Exceljs.Workbook()

workbook.xlsx.readFile("C:\\Users\\lenovo R3\\Desktop\\Copy of Test cases for email.xlsx").then(function(){
    const worksheet=workbook.getWorksheet('Sheet1')

worksheet.eachRow((row,rownumber)=>{

    row.eachCell((cell,colnumber)=>{

        console.log(cell.value)
    })
})



})

