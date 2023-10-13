import { validEmail, validNameSize} from "@/validation/validate";

describe("Email Validation",()=>{
	it("Expect success when  email is  valid ",()=>{
		const email = "teste@example.com";
		expect(validEmail.test(email)).toBe(true);
	});
	it("Expect error when email is incorrect",()=>{
		const email = "teste@example";
		expect(validEmail.test(email)).toBe(false);
	});

});

describe("Name size validaion",()=>{
	it("Expect sucess when name has minimun size of 1",()=>{
		const name="a";
		expect(validNameSize.test(name)).toBe(true);
	});
	it("Expect error when name does not have minimun size of 1",()=>{
		const name="";
		expect(validNameSize.test(name)).toBe(false);
	});
	it("Expect sucess when name has size bigger than 1",()=>{
		const name="Solid Snake";
		expect(validNameSize.test(name)).toBe(true);
	});
});