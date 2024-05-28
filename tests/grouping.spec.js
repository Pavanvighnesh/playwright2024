import{test,expect} from '@playwright/test'


test.beforeAll(async()=>{

    console.log('beforeall')
})

test.afterAll(async()=>{

    console.log('afterall')
})

test.beforeEach(async()=>{

    console.log('beforeeach')
})

test.afterEach(async()=>{

    console.log('aftereach')
})

test.describe.only('group1',()=>{
    test('test1',async({page})=>{

        console.log('This is test1')
    })
    
    test.only('test2',async({page})=>{
    
        console.log('This is test2')
    })


})

test.describe('group2',()=>{
    test('test3',async({page})=>{

        console.log('This is test3')
    })
    
    test('test4',async({page})=>{
    
        console.log('This is test4')
    })
    



})

