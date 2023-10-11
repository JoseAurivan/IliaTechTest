import { validEmail} from '@/validation/validate'

describe('Email Validation',()=>{
    it("Expect success when  email is  valid ",()=>{
        const email = "teste@example.com";
        expect(validEmail.test(email)).toBe(true);
    })
    it("Expect error when email is incorrect",()=>{
        const email = "teste@example";
        expect(validEmail.test(email)).toBe(false);
    })

})

describe("Name size validaion",()=>{
    
})